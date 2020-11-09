const functions = require('firebase-functions');
const admin = require("firebase-admin");
const app = admin.initializeApp();
const firestore = app.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.scheduledFunction = functions.pubsub.schedule('5 8 * * *').onRun(async (context) => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 30);
    await firestore
        .collection("loads")
        .where("currentDate", "<", cutoffDate)
        .get()
        .then(loads => {
            return loads.forEach(load => {
                firestore
                    .collection("archivedLoads")
                    .doc(load.id)
                    .set({...load.data()})
            });
        });
    firestore
        .collection("loads")
        .where("currentDate", "<", cutoffDate)
        .delete();
    return null;
});
