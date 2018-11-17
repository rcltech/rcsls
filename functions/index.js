const functions = require('firebase-functions');

exports.hello = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
