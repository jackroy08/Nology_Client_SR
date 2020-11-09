const functions = require('firebase-functions');
const admin = require("firebase-admin");
const app = admin.initializeApp();
const firestore = app.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.scheduledFunction = functions.pubsub.schedule('every 1 minutes').onRun((context) => {
    console.log('This will be run every 1 minutes!')
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 30);
    const recentLoads = firestore
        .collection("loads")
        .where("currentDate", ">", cutoffDate)
        .get()
        .then(dates => {
            dates.forEach(date => console.log(date));
            return true;
        })
    return null;
});
