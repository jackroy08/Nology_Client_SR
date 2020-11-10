const functions = require('firebase-functions');
const admin = require("firebase-admin");
const app = admin.initializeApp();
const firestore = app.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.scheduledFunction = functions.pubsub.schedule('1 0 * * *').onRun((context) => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 30);
    return firestore
        .collection("loads")
        .where("currentDate", "<", cutoffDate)
        .get().then(async res => {
            await res.forEach(load => {
                return firestore
                    .collection("archivedLoads")
                    .doc(load.id)
                    .set({...load.data()})
                })

            res.forEach(load => {
                return firestore
                    .collection("loads")
                    .doc(load.id)
                    .delete()
            })
            return res;
        })
});
