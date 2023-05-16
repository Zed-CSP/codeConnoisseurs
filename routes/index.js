const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes');

router.use(htmlRoutes);

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
