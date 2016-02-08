/* apis services */
var blogstore = require('../base').blogstore;

function Service(setting){
    setting = setting || {};
    this._init(setting);
}

Service.prototype = {
    _init: function(){

    },
    getBlogList: function(callback){
        blogstore.getAll().then(function(data){
            callback(data);
        });
    }
};

var _server = new Service();

module.exports = {
    getBlogList: function(req, res){
        _server.getBlogList(function(data){
            if(req.query && req.query.callback){
                res.send(req.query.callback + '('+ JSON.stringify(data) + ');');
            }
            else{
                return res.json(data);
            }
        });

    }
};
