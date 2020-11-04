# Générateur de certificat de déplacement

## Développer

### Installer le projet

```console
git clone https://github.com/LAB-MI/attestation-deplacement-derogatoire-q4-2020.git
cd attestation-deplacement-derogatoire-q4-2020
npm i
npm start
```

## Générer et tester le code de production

### Tester le code de production en local

#### Générer le code de production pour tester que le build fonctionne en entier

```console
npm run build:dev
```

#### Tester le code de production en local

```console
npx serve dist
```

Et visiter http://localhost:5000

Le code à déployer sera le contenu du dossier `dist`

## API

### Requete url

Parametre dans l’url : 

- firstname

- lastname 

- birthday 

- placeofbirth 

- address

- city 

- datesortie 

- heuresortie 

- zipcode 

- reasons

## Raccourcis (APPLE)

### PRÉAMBULE

Les raccourcis se basent sur un contact dans votre télèphone. Pour fonctionner correctement, le contact doit avoir : 

- Prénom 

- Nom 

- 1 Adresse 

- Date Anniversaire 

- url (http://VilleDeNaissance)

![imgREADME/exempleContact.jpg](imgREADME/exempleContact.jpg)

### COVID-19 ATTESTATION

Le raccourcis “COVID-19 ATTESTATION” permet de génerer le pdf de l’attestation de déplacement dérogatoire du ministère de l’intérieur.

- [COVID-19 ATTESTATION](https://www.icloud.com/shortcuts/f00551b095d94208b430731b2ab19f69)

## Crédits

Ce projet a été réalisé à partir d'un fork du dépôt [deplacement-covid-19](https://github.com/nesk/deplacement-covid-19) de lui-même réalisé à partir d'un fork du dépôt [covid-19-certificate](https://github.com/nesk/covid-19-certificate) de [Johann Pardanaud](https://github.com/nesk).

Les projets open source suivants ont été utilisés pour le développement de ce
service :

- [PDF-LIB](https://pdf-lib.js.org/)
- [qrcode](https://github.com/soldair/node-qrcode)
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/license)
