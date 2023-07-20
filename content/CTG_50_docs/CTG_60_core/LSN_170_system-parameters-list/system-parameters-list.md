System Parameters List
======================

**ATTENTION**: This list provide data about **System Parameters** available on Simplicité as of **4.0 version**.
Some system parameters might not be available on previous version or default value might be different. 

### `ACE_KEYBINDINGS`

**Default value**

	default

**Description**

	**Ace editor** key bindings, possible values are:

	- `default`
	- `vim`
	- `emacs`

### `ACE_THEME`

**Default value**

	eclipse

**Description**

	**Ace editor** theme, possible values are:

	- `eclipse` (light theme),
	- `github` (light theme),
	- `monokai` (dark theme)
	- `terminal` (dark theme)
	- `tomorrow` (light theme)
	- `tomorrow_night` (dark theme)
	- `solarized_light` (light theme)
	- `solarized_dark` (dark theme)

### `ACTION_PREFS`

**Default value**

	empty

**Description**

	Technical, do not change/remove, needed in user's parameters

### `ACTIVE_LISTS`

**Default value**

	cell

**Description**

	Allow lists to handle onclick events:

	- `no`: no event
	- `cell`: simple cells can open the row (exclude foreign fields, document, image...)
	- `key`: only functional keys can open the row
	- `row`: specific handler, prototype

	Function `<object>[_<parentobj>_<ref_field>]_listclicked(obj, rowId, parentobj, parentobj_rowId, ref_field)`

### `ADMIN_SYSTEM`

**Default value**

	no

**Description**

	Allows ADMIN to change the core-system.

### `ASYNC_POOL_SIZE`

**Default value**

	10

**Description**

	Max pool size of Asynchronous actions (not used when <=0)

### `BIN_DIR`

**Default value**

	bin

**Description**

	Binary directory. Relative to PROJECT_DIR or absolute path.

### `BPMALERT_FROM`

**Default value**

	"Simplicité" <noreply@simplicite.fr>

**Description**

	Default "from" for alerts, "default" means using mail service default

### `CACHE_INFO_LIMIT`

**Default value**

	1000

**Description**

	Limit the number of objects to display in the Cache info

### `CACHE_MAXAGE`

**Default value**

	43200

**Description**

	Static resources HTTP cache max age in seconds

### `CAPTCHA_AUDIOS`

**Default value**

	[{ val:"10", src:"5times2.mp3" },
	{ val:"20", src:"2times10.mp3" },
	{ val:"6", src:"5plus1.mp3" },
	{ val:"5", src:"4plus1.mp3" },
	{ val:"7", src:"4plus3.mp3" },
	{ val:"12", src:"6plus6.mp3" },
	{ val:"24", src:"12times2.mp3" },
	{ val:"100", src:"99plus1.mp3" },
	{ val:"4", src:"add3to1.mp3" },
	{ val:"green", src:"addblueandyellow.mp3" },
	{ val:"3", src:"after2.mp3" },
	{ val:"2", src:"divide4by2.mp3" },
	{ val:"white", src:"milkcolor.mp3" },
	{ val:"blue", src:"skycolor.mp3" },
	{ val:"yes", src:"sunastar.mp3" },
	{ val:"no", src:"yourobot.mp3" },
	{ val:"paris", src:"capitaloffrance.mp3" },
	{ val:"black", src:"skynight.mp3" },
	{ val:"march", src:"thirdmonth.mp3" },
	{ val:"a", src:"firstletteralphabet.mp3" }]

**Description**

	Internal list of captcha audios

### `CAPTCHA_IMAGES`

**Default value**

	["airplane","balloons","camera","car","cat","chair","clip","clock","cloud","computer",
	"envelope","eye","flag","folder","foot","graph","house","key","leaf","lightbulb",
	"lock","magnifyingglass","man","music","pants","pencil","printer","robot",
	"scissors","sunglasses","tag","tree","truck","tshirt","umbrella","woman","world"]

**Description**

	Internal list of captcha images

### `CHART_PALETTE`

**Default value**

	Sea

**Description**

	Pastel, Base, Strong, Light, Bright, Mars, Sea, Berry, Fire, Choco or add values to Simplicite.Chart.PALETTES

### `COMPLETION_SENSITIVE`

**Default value**

	no

**Description**

	Case sensitive comparison on field completions

### `CONTENT_DIR`

**Default value**

	dbdoc/content

**Description**

	Content directory. Relative to PROJECT_DIR or absolute path.

### `CONTEXT_URL`

**Default value**

	http://localhost:8080/simplicite

**Description**

	Dynamic context root. Auto-valued with the first logon.

### `CONVERT_WILDCARDS`

**Default value**

	yes

**Description**

	Set to yes to convert OS like wildcards (* and ?) into SQL wildcards (% and _)

### `CRON_LOCK`

**Description**

	Internal use to identify the host running Unique cronjobs

### `DATETIME_ZERO_HOUR`

**Default value**

	no

**Description**

	If set to yes, presets hour to 00:00:00 in datetime pickers instead of current hour

### `DEFAULT_THUMB_SIZE`

**Default value**

	50

**Description**

	Thumbnail default size of Image field without precision. 0 = no thumb.

### `DIRECT_TRANSACTION`

**Default value**

	no

**Description**

	Manage transaction on direct access (tomcat behavior)

### `DIRECT_URL`

**Description**

	Optional parameter to force the public context URL used in Alert during substitution of `[DIRECTURL]`
	ex: `https://myapp.mydomain.io`

### `DISPOSITION`

**Default value**

	responsive5

**Description**

	Webapp disposition with resources

### `DOC_DIR`

**Default value**

	dbdoc

**Description**

	Documents directory, either:

	- A **relative** path from the base directory configured in `PROJECT_DIR` (e.g. `dbdoc`)
	- An **absolute** local path (e.g. `/var/dbdoc` on Linux or `D:/dbdoc` on windows)
	- `BLOB` to store documents in the database (in this case a local document directory needs to be configured in the `DOC_LOCAL_DIR` for fallback strategy)

### `DOC_LOCAL_DIR`

**Default value**

	dbdoc

**Description**

	Local document directory when DOC_DIR = BLOB

### `DOMAIN_RELAXING`

**Default value**

	none

**Description**

	Domain relaxing (useful when integrating other applications from same domain with JavaScript interactions), settng it to "none" mean no explicit domain relaxing

### `EAI designer`

> **Deprecated** as of version 5 for `designer` credentials, you **should** use the `io.password` JVM argument or the `IO_PASSWORD` environment variable instead.

**Default value**

	designer:designer

**Description**

	EAI (I/O) user and password. Syntax: - code = EAI <login> - value = <login>:<password>

### `EASYMODE`

**Default value**

	no

**Description**

	yes/no Flag to activate the easy mode or not

### `EASYMODE_CLEARCACHE`

**Default value**

	no

**Description**

	When enabled, some changes are automatically reflected by partially flushing the cache

### `EASYMODE_DEFAULTAPPCODE`

**Default value**

	APP

**Description**

	Application prefix (used by quick param)

### `EASYMODE_DEFAULTDOMAINNAME`

**Default value**

	DomainApplication

**Description**

	Domain name on which objects will be added in easy mode.

### `EASYMODE_DEFAULTGROUPNAME`

**Default value**

	APP_ADMIN

**Description**

	Group name on which objects will be granted in easy mode.

### `EASYMODE_DEFAULTMODULENAME`

**Default value**

	Application

**Description**

	Module name for easy mode creations.

### `EDITOR_PREFS`

**Default value**

	empty

**Description**

### `EMAIL_DEFAULT_SENDER`

**Default value**

	"Simplicité(R)" <designer@simplicite.fr>

**Description**

	Default email sender

### `EMAIL_SEND_ASYNC`

**Default value**

	yes

**Description**

	Send emails asynchronously ?

### `EMAIL_SEND_OUTLOOK`

**Default value**

	no

**Description**

	Send emails using local Windows Outlook. 
	yes : Windows only, needs moyocore.jar and dll
	no : use the server Java Mail

### `EXCEL_MODE`

**Default value**

	binary

**Description**

	Excel publication mode: binary or html (legacy)

### `EXPORT_DIR`

**Default value**

	dbdoc/export

**Description**

	Import directory. Relative to PROJECT_DIR or absolute path.

### `EXTRA_PREFS`

**Default value**

	empty

**Description**

	Technical, do not change/remove, needed in user's parameters

### `FEEDBACK_PROXY`

**Default value**

	no

**Description**

### `FEEDBACK_PWD`

**Description**

	Feedback user password

### `FEEDBACK_TIMEOUT`

**Default value**

	30000

**Description**

	Feedback call timeout

### `FEEDBACK_URL`

**Default value**

	feedback

**Description**

	This can also be an absolute URL (e.g. https://myapp.com/feedback)

### `FEEDBACK_USER`

**Default value**

	designer

**Description**

	feedback user name

### `FIELD_INLINED_HELP`

**Default value**

	no

**Description**

	Show fields help as an explicit help icon ?

### `FORM_INLINED_HELP`

**Default value**

	no

**Description**

	'yes' to display the helps on the object forms, 'no' to use tooltips or popups.

### `FORM_INLINED_MESSAGE`

**Default value**

	yes

**Description**

	yes/no to show the messages (error, info...) inlined with there related fields.

### `GOOGLE_API_KEY`

**Default value**

	none

**Description**

	Google web API key

### `GRANT_CACHE_SIZE`

**Default value**

	0

**Description**

	Cyclic-cache size of Admin grants

### `HASH_PASSWORD`

**Default value**

	HEX

**Description**

	Password hashing algorithm and encoding: `<algorithm>:<encoding>` or `none` for no password hashing.
	
	- Algorithm values: `MD5`, `SHA-1`, `SHA-256`, `SHA-512`
	- Encoding values: `HEX` (hexadecimal) or `BASE64` (base 64)

	**Warning**: Hashing algorithm and encoding must be consistent with configured authentication module.

### `HISTORY`

**Default value**

	empty

**Description**

	User navigation history

### `HOME_TITLE`

**Default value**

	yes

**Description**

	Display the home title

### `HTML_EDITOR_PARAMS`

**Default value**

	plugins: ['advlist autolink charmap code fullscreen image link media paste save searchreplace table textcolor'],
	toolbar: 'fullscreen | bold italic | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
	menubar: 'edit insert format table tools',
	statusbar: false

**Description**

	Default parameters for used for HTML editor fields (using TinyMCE).
	See [specific html editor page](/lesson/docs/ui/html-editor-params)

### `JAVADOC_LOCATION`

**Default value**

	If there is no value, you will be redirected to up to date online Javadoc: https://platform.simplicite.io/x.y/javadoc/
	
**Description**

	URL of Simplicité Java documentation, used on script editor as javadoc button location.

### `JSDOC_LOCATION`

**Default value**

	If there is no value, you will be redirected to up to date online JSDoc: https://platform.simplicite.io/x.y/jsdoc/
	
**Description**

	URL of Simplicité javascript documentation, used on script editor as jsdoc button location.

### `HTTPCALL_TIMEOUT`

**Default value**

	30

**Description**

	Timeout of external http call in seconds (0=infinite)

### `IMPORT_DIR`

**Default value**

	dbdoc/import

**Description**

	Import directory. Relative to PROJECT_DIR or absolute path.

### `INDEX\DIR`

**Default value**

	dbdoc/index

**Description**

	Content directory. Relative to PROJECT_DIR or absolute path.

### `INDEX_LAST_SCAN`

**Default value**

	1900-01-01 00:00:00

**Description**

	Fulltext indexation last scan

### `LAST_CLEAR_CACHE`

**Default value**

	2016-10-07 12:23:37.299;logout

**Description**

	Internal use to manage clear-cache distribution

### `LICENSE_REMINDER_DELAY`

**Default value**

	30

**Description**

	Time in days to send reminders of license expiration. 0 to disable.
	You can also set the alert and the cron named LicenseReminder.

### `LIST_PREFS`

**Default value**

	empty

**Description**

	Technical, do not change/remove, needed in user's parameters

### `LOG_DEBUG`

**Default value**

	no

**Description**

	yes/no to activate the DEBUG level. Log4j must be set to DEBUG first.

### `LOG_DIR`

**Default value**

	log

**Description**

	Log directory. Relative to PROJECT_DIR or absolute path.

### `LOG_DOCUMENT`

**Default value**

	yes

**Description**

	yes/no to trace the documents usage. Log4j must be set to INFO first.

### `LOG_ERROR`

**Default value**

	yes

**Description**

	yes/no to trace the error level.

### `LOG_FATAL`

**Default value**

	yes

**Description**

	yes/no to trace the fatal level.

### `LOG_INFO`

**Default value**

	yes

**Description**

	yes/no to trace common informations. Log4j must be set to INFO or DEBUG level.

### `LOG_MEMORY`

**Default value**

	yes

**Description**

	yes/no to activate memory traces (MEMORY events, CyclicCache size, etc.)

### `LOG_OBJECT`

**Default value**

	no

**Description**

	yes/no to trace object usage in INFO level.

### `LOG_SESSION`

**Default value**

	yes

**Description**

	yes/no to trace login/logout in INFO level.

### `LOG_SQL_SYSTEM`

**Default value**

	no

**Description**

	yes/no to trace system SQL statements in INFO level.

### `LOG_SQL_USER`

**Default value**

	no

**Description**

	yes/no to trace users SQL statements in INFO level.

### `LOG_WARN`

**Default value**

	yes

**Description**

	yes/no to trace the warning level.

### `MAIL_SERVICE`

**Default value**

	{
	"mail.from": "noreply@simplicite.fr",
	"mail.debug": "false",
	"mail.transport.protocol": "smtp",
	"mail.smtp.host": "localhost",
	"mail.smtp.port": "25"
	}

**Description**

	Mail service configuration.

	The JSON key-values pairs are directly used as properties to instantiate the mail session.
	
	Note: `mail.from` are also defined in `EMAIL_DEFAULT_SENDER` and `BPMALERT_FROM` for state transition.

### `MAX_SESSIONS_USER`

**Default value**

	0

**Description**

	Max private sessions per user. 0 means unlimited.

### `MAX_UPLOAD_SIZE`

**Default value**

	100

**Description**

	Upload file: transfer size limitation (Mo).

### `MODULE_FILTER`

**Default value**

	SHOWALL

**Description**

### `MYSQL_ENGINE`

**Default value**

	InnoDB

**Description**

	MySQL engine: InnoDB (default) or MyISAM

### `OBJECT_CACHE_SIZE`

**Default value**

	10000

**Description**

	Cyclic area to store objects in memory.

### `OBJECT_MANAGEMENT_USER`

**Default value**

	User

**Description**

	Specify the object of user management (header icon access)

### `PANEL_FILTER`

**Default value**

	yes

**Description**

	Yes/No Show the object filter in panels

### `POWERED_BY`

**Default value**

	<a href="http://www.simplicitesoftware.com" target="_blank"><img src="../images/image/poweredby.png"></a>

**Description**

	Powered by credits to display on UIs (HTML syntax can be used).

### `PROCESS_CACHE_SIZE`

**Default value**

	10000

**Description**

### `PROCESS_INLINED_HELP`

**Default value**

	no

**Description**

	'yes' to display the helps on the activities, 'no' to use tooltips or popups.

### `PROJECT_DIR`

**Default value**

	default

**Description**

	Root directory of the project. Relative or absolute path or default to use project name.

### `PRUNE_LOG_DEPTH`

**Default value**

	-30

**Description**

	Depth of crontab PruneLogDB
	- negative value : max period in days
	- positive value : max rows

### `RAILWAY`

**Default value**

	4

**Description**

	Size of the railway (navbar)

### `READONLY_AS_PLAIN_TEXT`

**Default value**

	no

**Description**

	Display readonly items as plain text ?


### `SCOPE_PREFS`

**Default value**

	empty

**Description**

	Technical, do not change/remove, needed in user's parameters

### `SCRIPT_DURATION_WARNING`

**Default value**

	1000

**Description**

	Warning on abnormal script execution (in ms), 0 means no warning

### `SEARCH_PREFS`

**Default value**

	empty

**Description**

	Technical, do not change/remove, needed in user's parameters

### `SESSION_TIMEOUT`

**Default value**

	30

**Description**

	Number of minutes for timeout of authenticated sessions

### `SHORTCUT_PREFS`

**Default value**

	empty

**Description**

	Technical, do not change/remove, needed in user's parameters

### `SOCIAL_POST_DEPTH`

**Default value**

	365

**Description**

### `SRC_DIR`

**Default value**

	src

**Description**

	Sources directory. Relative to PROJECT_DIR or absolute path.

### `TMP_DIR`

**Default value**

	dbdoc/tmp

**Description**

	Temporary work directory. Relative to PROJECT_DIR or absolute path.

### `USE_ABOUT`

**Default value**

	no

**Description**

	yes/no Flag to display the about-box on objects

### `USE_API`

**Default value**

	yes

**Description**

	Use API interface?

### `USE_API_TESTER`

**Default value**

	yes

**Description**

	Use API tester page?

### `USE_COMPLETION`

**Default value**

	yes

**Description**

	yes/norFlag to activate completion feature

### `USE_DOC_GRANT`

**Default value**

	yes

**Description**

	yes/no Flag to activate document rights management

### `USE_DOC_INDEX`

**Default value**

	no

**Description**

	yes/no Flag to activate document indexation management

### `USE_DOMAIN_HOMES`

**Default value**

	yes

**Description**

	Display menu domain homes

### `USE_FEEDBACK`

**Default value**

	no

**Description**

### `USE_FILEEDITOR`

**Default value**

	yes

**Description**

	Use file editor (e.g. for resources or scripts)

### `USE_FORGOT_PWD`

**Default value**

	yes

**Description**

	Add "I forgot my password" on logon page (on the internal auth provider only)
	and use alert `UserForgotPassword` to send the change request validation to user

### `USE_SHOW_PWD`

**Default value**

	no

**Description**

	Add "Show password" on logon page (on the internal auth provider only)

### `USE_FULLTEXT_INDEXES`

**Default value**

	yes

**Description**

	Use fulltext indexes for object and document index searches ?

### `USE_GIT`

**Default value**

	yes

**Description**

	Use GIT interface?

### `USE_HTMLEDITOR`

**Default value**

	yes

**Description**

	yes/norFlag to activate the HTML editor

### `USE_IO`

**Default value**

	yes

**Description**

	Use I/O interface?

### `USE_IO_TESTER`

**Default value**

	yes

**Description**

	Use I/O tester page?

### `USE_OBJECT_PREFS`

**Default value**

	yes

**Description**

	Allows user to customize objects LIST_PREFS and ACTION_PREFS

### `USE_ORACLE_SEQUENCE`

**Default value**

	yes

**Description**

	yes : force the insert statments to use Oracle sequences.
	no : evaluate a "max+1" for each row_id
	Must be in System module (before any XML import)

### `USE_POSTGRESQL_SEQUENCE`

**Default value**

	yes

**Description**

	yes : force the insert statments to use PostgreSQL serial/sequences.
	no : evaluate a "max+1" for each row_id
	Must be in System module (before any XML import)

### `USE_ROWID_TABLE`

**Default value**

	yes

**Description**

	Table row_id sequences

### `USE_SEARCH_INDEX`

**Default value**

	sql

**Description**

	Use data indexation?

### `USE_SOCIAL`

**Default value**

	yes

**Description**

### `USE_UNDO_REDO`

**Default value**

	yes

**Description**

	Manage and display the Undo/Redo behaviors for users

### `USE_USERTOKENS`

**Default value**

	yes

**Description**

	Use persistent user tokens ? Persistent tokens lives beyond the server sessions for a duration configured
	in the `USERTOKEN\_DURATION` system parameter.

### `USE_WEBSOCKET_LOGS`

**Default value**

	no

**Description**

	Use websocket logs (only usefull with websocket enabled servers) ?

### `USER_RESP_DEFAULTMODULENAME`

**Default value**

	ApplicationUsers

**Description**

	Default module name for users and responsibilities

### `USERTOKENS_MODE`

**Default value**

	Simplicite

**Description**

	User tokens mode: `simple` or `jwt`.

### `USERTOKENS_DURATION`

**Default value**

	24h

**Description**

	User tokens duration (by default in hours, but you can also use `24h` or `1d` qualified durations).

### `USERTOKENS_ISSUER`

**Default value**

	Simplicite

**Description**

	User tokens issuer. Only applicable for `jwt` mode.

### `USERTOKENS_SIGNATURE_SECRET`

**Default value**

	<none>

**Description**

	User tokens signature secret. Only applicable for `jwt` mode.

### `USERTOKENS_REUSE`

**Default value**

	yes

**Description**

	Reuse existing user tokens for same logins?

### `USERTOKENS_URL_PARAM`

**Default value**

	_x_simplicite_authorization_

**Description**

	User token URL parameter name

### `VERSION`

**Default value**

	<current major platform version, e.g. 5>

**Description**

	Version to display on UIs (HTML syntax can be used).

Note: You can use single or multiple tokens like `[VERSION:<module name>]` to substitute a module's version in this version string.

### `WEBSERVICE_TIMEOUT`

**Default value**

	5

**Description**

	Webservice session-timeout in minutes, if 0 use the platform session-timeout (see web.xml)

### `WINDOW_TITLE`

**Default value**

	Simplicité®

**Description**

	Webapp title
