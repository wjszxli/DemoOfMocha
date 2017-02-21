//test/lib/hooks.js
var assert = require('assert')

describe('hook示例', function() {
    var foo = false;

    beforeEach(function() {
        foo = true;
    });

    it('修改foo要成功', function() {
        assert.ok(foo)
    });
});