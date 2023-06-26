Notifications
====================

Les notifications sont paramétrables dans **Social > Notification > Configuration** 
Elles servent à paramétrer des alertes pour les utilisateurs de la plateforme lorsqu'un évènement se produit.

Les notifiations sont associées à un objet métier (objet qui va porter l'évènement), elles sont déclenchées selon une action (création, modification ou suppression) et une condition d'éxécution (facultative). 

Une notification peut être diffusée sur plusieurs canaux et être adressée à plusieurs destinataires. Son contenu est défini par langue et peut être surchargé pour un canal et/ou destinatire particulier. 

Les destinataires de la notification peuvent être concernés par tous ses canaux ou être paramétrès individuellement pour une gestion plus fine par destinataire. 

Les utilisateurs de plateforme ont la possibilité de s'abonner ou se désabonner des notifications dont ils sont destinataires.

Les canaux de diffusion sont les suivants :
* Interne : Le compteur d'une icône de cloche visible dnas le header de la plateforme est mis à jour à chaque nouvelle notification. Les notifications sont stockées dans une table systeme
* Mail : Un email est envoyé aux destinataires de la notification
* Specific : Invoque une méthode de l'objet métier concerné par la notification
* Web Push : Envoie une notification push au navigateur. Ce canal nécessite un certain nombre de paramètres systèmes :
    - **WEBPUSH** : `yes`
    - **WEBPUSH_VAPID_KEY** : <clé publique VAPID générée>
    - **WEBPUSH_PRIVATE_KEY** : <clé privée VAPID générée>
    - **WEBPUSH_VAPID_MAILTO** : `mailto:<contact-email>`

Pour plus d'informations sur la norme VAPID : https://datatracker.ietf.org/doc/rfc8292/


Les destinataires peuvent être :
* Utilisateur : un utilisateur nommé de la plateforme
* Groupe : un groupe d'utilisateurs
* SQL : le résultat d'une requête SQL

Exercice
====================

Créer une notification **interne** qui alerte les utilisateurs du groupe **TRN_ADMIN** lors la **validation** d'une **commande** :
1. Configuration de la notification :
* Nom : **TrnOrderValidated**
* Action : **Mise à jour**
* Module : **Training**
* Objet métier : **TrnOrder**
* Expression : `[OLDVALUE:trnOrdStatus] == 'P' && [VALUE:trnOrdStatus] == 'V'` *attention les codes correspondants aux status peuvent être différents selon votre paramétrage* 

2. Configuration des canaux de diffusion :
* Associer le canal **Interne**

3. Configuration du contenu :
* Langue : **Français**
* Module : **Training**
* Sujet : *vide* (correspond à l'objet d'un mail)
* Contenu : `La commande [VALUE:trnOrdNumber] a été validée`

4. Configuration des destinataires : 
* Ordre : **10**
* Type : **Groupe**
* Groupe : **TRN_ADMIN**

5. Synchroniser les destinataires des notifications
* Cliquer sur l'action de liste **Synchroniser les destinataires**

6. Ajouter le groupe **NOTI_READER** au Profil de **TRN_ADMIN**

7. Vider le cache

Exercice (en autonomie)
====================

* Créez une notification alertant les utilisateurs du groupe **TRN_READONLY** lorsque le **stock d'un produit** devient **inférieur à 10**. Les utilisateurs doivent recevoir un **mail** et une notification **interne**. 
**Le contenu du mail doit être différent du contenu de la notification interne.**