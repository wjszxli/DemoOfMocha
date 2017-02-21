//test/lib/sum.js
var sum = require('../../lib/sum')
var assert = require('assert')

describe('和函数的测试',function () {
    it('1加1应该等于2',function () {
        var expect=2;
        assert.equal(sum(1,1),expect);
    })
})