![Simplicit&eacute; Software](https://platform.simplicite.io/logos/logo250.png)
* * *

Add version 6 to an existing SIM server
=======================================

Login as user `simplicite`.

Install version 6
-----------------

Clone the version 6 template Git repository:

	cd /var/simplicite/git
	git clone --bare https://_your_Git_username_:_your_Git_password_@platform.git.simplicite.io/template-6.git

> **Warning**: make sure to change `_your_Git_username_` and `_your_Git_password_` by your own Git credentials

Create the version 6 variants (release and prerelease) in the SIM database:

	sql "insert into versions values ('6',  '1970-01-01 00:00:00')"
	sql "insert into versions values ('6p', '1970-01-01 00:00:00')"

And optionnaly their "light" variants:

	sql "insert into versions values ('6l',  '1970-01-01 00:00:00')"
	sql "insert into versions values ('6pl', '1970-01-01 00:00:00')"

Add the post receive hook for the template:

	vi template-6.git/hooks/post-receive

With following content:

```bash
#!/bin/sh

gitversion=6
for branch in release release-light prerelease prerelease-light
do
	version=$gitversion
	[ $branch = 'release-light' ] && version=${version}l
	[ $branch = 'prerelease' ] && version=${version}p
	[ $branch = 'prerelease-light' ] && version=${version}pl
	echo "Updating version $version template (branch $branch)..."
	rm -fr /var/simplicite/template-$version
	mkdir /var/simplicite/template-$version
	git --work-tree=/var/simplicite/template-$version --git-dir=/var/simplicite/git/template-$gitversion.git checkout -f $branch
	if [ $? = 0 ]
	then
		chmod +x /var/simplicite/template-$version/tools/*.sh
		date=`git --git-dir=/var/simplicite/git/template-$gitversion.git log -1 --date=iso | awk '/^Date:/ { print $2" "$3 }'`
		echo "Last commit date: $date"
		sqlite3 /var/simplicite/data/apps.db "update versions set date = '$date' where version = '$version'"
		echo "Done"
	else
		echo "${branch} not (yet) available in /var/simplicite/git/template-$gitversion.git"
	fi
done
```

> **Note** in the above steps you may not require all variants of version 6, adapt the commands/scripts accordingly

Make it executable:

	chmod +x template-6.git/hooks/post-receive

Execute it:

	./template-6.git/hooks/post-receive

Edit the post receive hook for the instance manager:

	vi apps.git/hooks/post-receive

with following content:

```bash
#!/bin/sh

echo "Updating instances manager..."
sudo su simplicite -c "git --work-tree=/var/simplicite/apps --git-dir=/var/simplicite/git/apps.git checkout -f master"
for v in l p pl
do
	cat /var/simplicite/apps/bin/version-6.sh | sed "s/template-6/template-6$v/g" > /var/simplicite/apps/bin/version-6$v.sh
done
sudo chmod +x /var/simplicite/apps/bin/*.sh
sudo su simplicite -c "touch /var/simplicite/logs/apps.log"
sudo chmod 660 /var/simplicite/logs/apps.log
echo "Done"
```

Execute it:

	./apps.git/hooks/post-receive

Verify installation
------------------

At that stage you should have the version 6 templates availables in the `/var/simplicite/template-6*` folders.

And a call to `sim versions` should display version 6 templates with their latest revision dates, e.g.:

```text
> sim version
(...)
6p    2023-05-04 18:22:00
6pl   2023-05-04 18:23:00
6r    2023-05-04 18:24:00
6rl   2023-05-04 18:25:00
(...)
```

Create/migrate version 5 instances
----------------------------------

You should now be able to create version 6 instances:

	sim add mynewinstance 6[l|p|pl]

**Optionally** you can switch your existing 5 instances to version 6 with:

	sql "update instances set version='6' where <condition>"
	sql "update instances set version='6l' where <condition>"
	sql "update instances set version='6p' where <condition>"
	sql "update instances set version='6pl' where <condition>"

Where `<condition>` can be `version='5[l[p|pl]` or `name in ('myoldinstance1', 'myoldinstance1', ...)`, etc.

Then force an upgrade on all switched instances:

	for i in `sim ls 5[l|p|pl] | awk '{print $1}`; do echo sim up $i; done

Note that switching from version 5 to version 6 is **irreversible**.
