
var url = require('url');
var template = require('templateConfig');
var main = require('main');

// //模板配置
var tplArr = [];
var indexTpl =require('raw!../template/index.txt');
tplArr['index'] = template.compile(indexTpl.replace(/^\s*|\s*$/g, ""));
 
function Index(){
    _this = this;
    this.main = function(){
        main.event(this,'tap','i-click');
        main.event(this,'change','i-change');
        this.init();
    }
    this.init = function(){
        //this.createCard();
    }
    return this.main();
};
var index = new Index();