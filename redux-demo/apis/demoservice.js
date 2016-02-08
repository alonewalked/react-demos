/* demo service */

var demostore = require('../base').demostore;
var builder = require('../base/builder');

function Service(setting){
    setting = setting || {};
    this._init(setting);
}

Service.prototype = {
    _init: function(setting){

    },
    getDemoList: function(callback){
        demostore.getAll().then(function(data){
            callback(data);
        });
    },
    build: function(callback){
        builder.build().then(function(data){
            callback(data)
        })
    }
};

var _server = new Service();

module.exports = {
    getDemoList: function(req, res){
        res.header("Access-Control-Allow-Origin","*");
        _server.getDemoList(function(data){
            if(req.query && req.query.callback){
                res.send(req.query.callback + '('+ JSON.stringify(data) + ');');
            }
            else{
                return res.json(data);
            }
        });

    },
    build: function(req,res){
        res.header("Access-Control-Allow-Origin","*");
        var params = req.body || {};
        _server.build(function(data){
            return res.send(data);
        })
    }
};
