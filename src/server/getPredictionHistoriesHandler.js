const { Firestore } = require('@google-cloud/firestore');
const getData = require('../services/getData');

async function getPredictionHistoriesHandler(request, h) {
    try {
        const snapshot = await getData('prediction');
        console.log(snapshot)

        const histories = snapshot.docs.map(doc => ({
            id: doc.id,
            history: {
                ...doc.data(),
                id: doc.id,
            },
        }));

        return h.response({
            status: 'success',
            data: histories,
        }).code(200);
    } catch (error) {
        console.error('Error fetching prediction histories:', error);
        return h.response({
            status: 'fail',
            message: 'Unable to fetch prediction histories.',
        }).code(500);
    }
};

module.exports = getPredictionHistoriesHandler;