const { Firestore } = require('@google-cloud/firestore');

async function getData(collectionName) {
    const db = new Firestore();

    const historiesCollection = db.collection(collectionName);
    const snapshot = await historiesCollection.get();

    return snapshot;
}

module.exports = getData;