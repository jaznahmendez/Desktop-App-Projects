const router = require('express').Router();

router.get('/', function(req, res){
    res.render('family');
});

module.exports = router;