const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        res.render('home');
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.get('/signup', (req, res) => {
    try {
        res.render('signup');
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;
