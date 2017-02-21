
var express = require('express')
var app = express();

app.get('/api/test',function (req,res) {
    res.send({})
})

var port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'test') {
    app.listen(port);
    console.log('start from http://localhost:' + port)
} else {
        module.exports = app;
}