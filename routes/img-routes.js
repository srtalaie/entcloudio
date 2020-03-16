const path = require('path');

module.exports = function(app){
    
    app.get('/images/hero-img', function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/images/hero.jpg"));
    });

}