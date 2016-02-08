/* blog store */
var Wilddog = require('wilddog');
var Promise = require('es6-promise').Promise;

var cachedata = {};

function DemoStore(ref) {
    this.ref = ref;
    this.init(ref);
}

DemoStore.prototype = {
    init: function(ref){
        this.demos = ref.child("demos").on("value", function(datasnapshot) {
            cachedata['demos'] = (datasnapshot.val());
        });
    },
    getAll: function(){
        return new Promise(function(resovle, reject){
            resovle(cachedata['demos']);
        });
    },
    getArticalById: function(id){
        var me = this;
        return new Promise(function(resovle, reject){
            this.demos.child(id).once('value', function(data){
                resovle(data.val());
            }, reject)
        });
    }
};
module.exports = DemoStore;