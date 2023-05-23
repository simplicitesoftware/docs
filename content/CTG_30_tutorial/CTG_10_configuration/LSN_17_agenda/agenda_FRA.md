Agenda
====================

Le paramétrage d'une vue calendaire se fait par le menu **Interface\Agenda** ou à partir de l'onglet **Agendas** sur le formulaire d'un objet métier.
Le paramétrage d’un Agenda est possible dès lors que l’objet que l’on veut afficher en vue calendaire a dans son paramétrage une ou plusieurs dates.
Simplicité(c) utilise les plugins gratuits <a href="https://fullcalendar.io/" target="_blank">FullCalendar</a> pour cette vue calendaire.
Pour en savoir plus sur la version et librairies utilisées consultez les paramètres systèmes **FULLCALENDAR_LIBS** et **FULLCALENDAR_VERSION**.
Les 2 versions V3 et V4 de FullCalendar sont intégrées. 

L'agenda utilise une instance particulière de l'objet.
Le hook **initAgenda** permet de surcharger le comportement standard de l'agenda.



Exercice
====================

- Parametrer une vue calendaire de toutes les commandes client.
- Créer un objet externe qui permet d'afficher l'agenda dans le menu.  

