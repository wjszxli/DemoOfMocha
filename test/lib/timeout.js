//test/lib/timeout.js


var assert = require('assert')

describe('测试应该3000毫秒后结束',function () {
    it('测试应该3000毫秒后结束',function (over) {
        var a=false;
        var b = function () {
            a=true;
            assert.ok(a);
            over();
        };
        setTimeout(b,2500);
    })
})