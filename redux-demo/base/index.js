var Wilddog = require('wilddog');
var ref = new Wilddog("https://frontblog.wilddogio.com/");

var BlogStore = require('./blogstore');
var DemoStore = require('./demostore');

var blogstore = new BlogStore(ref);
var demostore = new DemoStore(ref);

exports['blogstore'] = blogstore;
exports['demostore'] = demostore;

