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

![imgREADME/exempleContact.jpg](imgREADME/exempleContact.jpg =250x)

### Les Raccourcis

Les raccourcis permettent de générer le PDF de l’attestation de déplacement dérogatoire du ministère de l’intérieur. Différentes versions existent. Cliquer sur le lien en dessous du gif pour télécharger le raccourcis.

![imgREADME/covid19Attestation.gif](imgREADME/covid19Attestation.gif =250x)

[COVID-19 ATTESTATION](https://www.icloud.com/shortcuts/041144d8623d41d39fcb4d4a2ff05be7 =250x)

![imgREADME/GenereMoiUneAttestationPourLeTravail.gif](imgREADME/GenereMoiUneAttestationPourLeTravail.gif =250x)

[Génère-moi une attestation pour le travail](https://www.icloud.com/shortcuts/574d2abec8364ce8826856a0ae574df4 =250x)

![imgREADME/GenereMoiUneAttestationPourLesAchats.gif](imgREADME/GenereMoiUneAttestationPourLesAchats.gif =250x)

[Génère-moi une attestation pour les achats](https://www.icloud.com/shortcuts/d92a0e4abb6945b1925fa741ff510de1 =250x)

Il est possible d'activer les raccourcis ("Génère-moi une attestation pour le travail" et"Génère-moi une attestation pour les achats") directement avec Siri.

![imgREADME/SiriGenereMoiUneAttestationPourLeTravail.gif](imgREADME/SiriGenereMoiUneAttestationPourLeTravail.gif =250x)

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

api url = [https://covid19apiattestationq42020.herokuapp.com](https://covid19apiattestationq42020.herokuapp.com/)/generatePDF?



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