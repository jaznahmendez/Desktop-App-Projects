const router = require('express').Router();

router.get('/', function(req, res){
    res.render('hobbies');
});

module.exports = router;