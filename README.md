# README

# Générateur de certificat de déplacement

## Raccourcis (APPLE)

### PRÉAMBULE

Les raccourcis se basent sur un contact dans votre téléphone. Pour fonctionner correctement, le contact doit avoir :

- Prénom
- Nom
- 1 Adresse
- Date Anniversaire
- url (http://VilleDeNaissance)

<img width="300" alt="exempleContact" src="imgREADME/exempleContact.jpg">

### Les Raccourcis

Les raccourcis permettent de générer le PDF de l’attestation de déplacement dérogatoire du ministère de l’intérieur. Différentes versions existent. Cliquer sur le lien en dessous du gif pour télécharger le raccourcis.

<img width="200" alt="covid19Attestation" src="imgREADME/covid19Attestation.gif">

[COVID-19 ATTESTATION](https://www.icloud.com/shortcuts/041144d8623d41d39fcb4d4a2ff05be7)


<img width="200" alt="GenereMoiUneAttestationPourLeTravail" src="imgREADME/GenereMoiUneAttestationPourLeTravail.gif">

[Génère-moi une attestation pour le travail](https://www.icloud.com/shortcuts/574d2abec8364ce8826856a0ae574df4)

<img width="200" alt="GenereMoiUneAttestationPourLesAchats" src="imgREADME/GenereMoiUneAttestationPourLesAchats.gif">

[Génère-moi une attestation pour les achats](https://www.icloud.com/shortcuts/d92a0e4abb6945b1925fa741ff510de1)

Il est possible d'activer les raccourcis ("Génère-moi une attestation pour le travail" et"Génère-moi une attestation pour les achats") directement avec Siri.

<img width="260" alt="SiriGenereMoiUneAttestationPourLeTravail" src="imgREADME/SiriGenereMoiUneAttestationPourLeTravail.gif">



## API

### Requete url

Parametre dans l’url :

- firstname="Camille"
- lastname="Dupont"
- birthday="01/01/1970"
- placeofbirth="Paris"
- address="999 Avenue De France 75001 Paris"
- datesortie="dd/MM/yyyy"
- heuresortie="HH:mm"
- reasons=""

API Url = https://covid19apiattestationq42020.herokuapp.com/generatePDF?

API Url exemple
```
https://covid19apiattestationq42020.herokuapp.com/generatePDF?firstname=Camille&lastname=Dupont&birthday=01/01/1970&address=999%20Avenue%20De%20France%0A75001%20Paris%0AFrance&datesortie=05/11/2020&heuresortie=20:29&reasons=travail&placeofbirth=http://Paris
```

## Développer

### Installer le projet

```
git clone https://github.com/LAB-MI/attestation-deplacement-derogatoire-q4-2020.git
cd attestation-deplacement-derogatoire-q4-2020
npm i
npm start
```

## Générer et tester le code de production

### Tester le code de production en local

### Générer le code de production pour tester que le build fonctionne en entier

```
npm run build:dev
```

### Tester le code de production en local

```
npx serve dist
```

Et visiter http://localhost:5000

Le code à déployer sera le contenu du dossier `dist`

## Crédits

Ce projet a été réalisé à partir d'un fork du dépôt [deplacement-covid-19](https://github.com/nesk/deplacement-covid-19) de lui-même réalisé à partir d'un fork du dépôt [covid-19-certificate](https://github.com/nesk/covid-19-certificate) de [Johann Pardanaud](https://github.com/nesk).

Les projets open source suivants ont été utilisés pour le développement de ce service :

- [PDF-LIB](https://pdf-lib.js.org/)
- [qrcode](https://github.com/soldair/node-qrcode)
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/license)