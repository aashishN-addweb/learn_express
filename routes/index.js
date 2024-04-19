const router = require('express').Router();
const path = require('path');
const apiKeyMiddleware = require('../middlewares/apiKey');

// router.use(apiKeyMiddleware); // Router Group Middleware (Apply on all routes in current file)

router.get('/', (req, res) => {
    res.render('index', {
        title: "My Home Page"
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        title: "My About"
    });
});

router.get('/download', (req, res) => {
    res.download(path.resolve(__dirname) + '/../public/readme.txt');
});

// Single route middleware
router.get('/api/products', apiKeyMiddleware, (req, res) => {
    res.json([
        {
            id : 123,
            name: 'Chrome'
        },
        {
            id : 124,
            name: 'Firefox'
        },
    ]);
});




module.exports = router;