const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST

router.post('/', (req, res) => {
    console.log('in POST /feedback');
    const feedback = req.body;
    console.log('feedback', feedback);
    const queryText =   `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('ERROR in POST /feedback', error);
            res.sendStatus(500);
        });
}); // end POST /feedback

module.exports = router;