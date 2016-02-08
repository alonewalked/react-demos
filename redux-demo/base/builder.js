/*builder*/
var HOST_PATH = 'http://localhost:3300'
var path = require('path');
var fs = require('fs');

var Promise = require('es6-promise').Promise;

function Compile() {}

Compile.prototype = {
    building: function(){
        var str = `<html>
        <body>
            <p>this is test</p>
        </body>
        <script>console.log('this is test 2')</script>
        </html>
        `;
        var _path = path.join(__dirname, '../public/tmp/test.html');

        fs.writeFileSync(_path, str);
    }
}

var compile = new Compile();

module.exports = {
    build: function(options){
        return new Promise(function(resovle, reject){
            compile.building();
            resovle({
                link: HOST_PATH+'/tmp/test.html'
            });
        });
    }
}