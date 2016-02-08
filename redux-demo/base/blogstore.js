/* blog store */
var Promise = require('es6-promise').Promise;

var cachedata = {};

function BlogStore(ref) {
    this.ref = ref;
    this.init(ref);
}

BlogStore.prototype = {
    init: function(ref){
        this.articles = ref.child("article").on("value", function(datasnapshot) {
            cachedata['article'] = (datasnapshot.val());
        });
    },
    getAll: function(){
        return new Promise(function(resovle, reject){
            resovle(cachedata['article']);
        });
    },
    getArticalById: function(id){
        var me = this;
        return new Promise(function(resovle, reject){
            this.articles.child(id).once('value', function(data){
                resovle(data.val());
            }, reject)
        });
    }
};
module.exports = BlogStore;