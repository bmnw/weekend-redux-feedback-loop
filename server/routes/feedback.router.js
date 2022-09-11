const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST

router.post('/', (req, res) => {
    console.log('in POST /feedback');
}); // end POST /feedback

module.exports = router;