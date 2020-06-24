const functions = require('firebase-functions');
const admin = require('firebase-admin');
var serviceAccount = require('./permissions.json');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();


app.get('/hello-world', (req, res) => {
    return res.status(200).send('Cambio de respuesta');
});

app.post('/api/create', (req,res) => {
    (async () => {
        try {
            await db.collection('items').doc('/'+ req.body.id ).create({item: req.body.item});
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});



exports.app = functions.https.onRequest(app);




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
