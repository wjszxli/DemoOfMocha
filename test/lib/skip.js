//test/lib/only.js

var sum = require('../../lib/sum')
var assert = require('assert')

describe('和函数的测试',function () {
    it('5加6应该等于11',function () {
        var expect=11;
        assert.equal(sum(5,6),expect);
    })

    it.skip('7加8应该等于15',function () {
        var expect=15;
        assert.equal(sum(7,8),expect);
    })
})