const path = require('path');

module.exports = function(app){
    
    app.get('/images/hero-img', function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/images/hero.jpg"));
    });
    
    app.get('/images/playstorebadge', function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/images/playstorebadge.png"));
    });

    app.get('/images/web', function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/images/web.png"));
    });

    app.get('/images/encrypted', function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/images/encrypted.svg"));
    });

    app.get('/images/independent', function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/images/independent.svg"));
    });

    app.get('/images/wifi', function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/images/wifi.svg"));
    });
}