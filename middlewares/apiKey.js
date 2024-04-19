function apiKey(req, res, next) {
    const api_key = '12345678';

    let apikey = req.query.key;
    if (apikey && apikey === api_key) {
        next();
    } else {
        res.json({
            message : 'Not Allowed',
        });
    }
}

module.exports = apiKey;