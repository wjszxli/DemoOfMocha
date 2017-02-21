//test/lib/async.js

var http = require('http')
var assert = require('assert')
var request = require('superagent');

describe("测试异步请求",function () {
    it("测试异步请求返回一个对象",function (next) {
        request
            .get('http://localhost:3000/api/test')
            .end(function(err, res){
                assert.deepEqual(res.body,Object)
                next();
            });
    })
})