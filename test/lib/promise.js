//test/lib/promise.js

var fetch = require('node-fetch');
var http = require('http')
var assert = require('assert')

describe('Promise 异步测试',function () {
    it('异步Promise返回一个对象',function () {
        return fetch('http://localhost:3000/api/test')
            .then(function(res) {
                return res.json();
            }).then(function(json) {
                console.log(json)
                assert.deepEqual(json,{});
            });
    })
})