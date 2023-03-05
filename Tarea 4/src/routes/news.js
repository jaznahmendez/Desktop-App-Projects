const router = require('express').Router();
const axios = require('axios');

router.get('/', function(req, res){
    if(req.query.q == null || req.query.q == ''){
        res.render('home');
    }else{
        axios.get('https://newsapi.org/v2/everything?q=' + req.query.q + '&apiKey=e16ab044a2454a15a90bd696e21bec68')
        .then(function(response){
            console.log( response.data.articles);
            res.render('home', { news: response.data.articles });
        })
        .catch(function(error){
            console.log(error);
        });
    }
    
});

module.exports = router;
