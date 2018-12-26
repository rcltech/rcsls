const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebase = require('firebase');
const CONFIG = require('./CONFIG.json');
const serviceAccount = require('./serviceKey.json');

exports.hello = functions.https.onRequest((request, response) => {
    if(!admin.apps.length){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://rcsls-2018.firebaseio.com"
        }); 
    }

    admin.database().ref('washers/').set({
        washer1 : 2
    });
    
    response.send("Hello from Firebase!");
});

exports.bye = functions.https.onRequest((request,  response) => {
    response.send("Good Bye")
})