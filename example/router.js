const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const result = {
        say: 'hi'
    };
    res.json(result);
});

router.get('/send', (req, res) => {
    const result = {
        say: 'hi'
    };
    res.send(result);
});

router.get('/err', (req, res) => {
    throw new Error('call error');
});

module.exports = router;
