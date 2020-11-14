import express from 'express';
const app = express();

const PUBLIC_URL_PDF = 'https://github.com/igle/attestation-deplacement-derogatoire-q4-2020/raw/API/src/certificate.pdf';
const REASONS = ['travail', 'achats', 'sante', 'famille', 'handicap', 'sport_animaux', 'convocation', 'missions', 'enfants'];
const PORT  = process.env.PORT || 5000;

import dateFormat from 'dateformat';

import { generatePdf } from '../src/js/pdf-util';


app.get('/', (req, res) => {
    res.send("Bienvenu sur l'api attestation-deplacement-derogatoire-q4-2020");
})

app.get("/generatePDF", (req, res, next) => {

    // Verifier si les données de query sont ok 
    let profile = {
        firstname: req.query.firstname,
        lastname: req.query.lastname,
        birthday: req.query.birthday,
        placeofbirth: req.query.placeofbirth.split('//')[1],
        address: req.query.address.split('\n')[0],
        city: req.query.address.split('\n')[1].split(' ')[1],
        datesortie: req.query.datesortie,
        heuresortie: req.query.heuresortie,
        zipcode: req.query.address.split('\n')[1].split(' ')[0],
    };

    // Vérifier si les champs sont vide
    for (let user in profile) {
        if (profile[user] == "") {
            res.json(response(user+' est manquant!'));
        }
    }

    // Verfiier la raison
    if (!REASONS.includes(req.query.reasons)) {
        res.json(response('La raison n\'est pas correcte'));
    }

    // Generer l'attestation
    getPDFAwait(profile, req.query.reasons, PUBLIC_URL_PDF).then(function (pdf) {  
        const creationInstant = new Date().toLocaleString("fr-FR", {timeZone: "Europe/Paris"});
        const creationDate = dateFormat(creationInstant, 'isoDate') // 2020-11-03
        const creationHour = dateFormat(creationInstant, 'HH-MM') // 12-42
        // Envoyer le pdf     
        res.setHeader('Content-disposition', 'attachment; filename=attestation-'+creationDate+'_'+creationHour+'.pdf');
        res.set('Content-Type', 'text/pdf');
        res.send(toBuffer(pdf));
    },
    () => {
        res.json(response('Impossible de générer le pdf'));
    });
});

app.listen(PORT, () => {
     console.log('app is listening to port '+PORT);
})

// function de génération du pdf async/pdf
async function getPDFAwait(profile, reasons, pdf) {
    return await generatePdf(profile, reasons, pdf);
}

// Converti Uint8Array vers buffer
function toBuffer(ab) {
    var buf = Buffer.alloc(ab.byteLength);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        buf[i] = view[i];
    }
    return buf;
}

// JSON de reponse
function response(title) {
    return {
        'result': 'Error',
        'message': title
    };
}