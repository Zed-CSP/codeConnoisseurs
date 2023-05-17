const router = require('express').Router();

const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use(htmlRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
