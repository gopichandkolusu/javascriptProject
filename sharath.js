var express = require('express');
var gulp = require('gulp');
var dust = require('gulp-dust');
var fs = require('fs');
var bodyParser = require("body-parser");

var app = express();
app.use('/', express.static('public'));


gulp.task('dust', function() {

    gulp.src('public/js/*.dust')
        .pipe(dust())
        .pipe(gulp.dest('public/js'));
});



gulp.task('express', function() {
    var server = app.listen(3000, function() {
        console.log("Hello, its started");
    });
});

app.get('/customersurl', function(request, response) {
        //response.sendFile(__dirname + "/js/customers.dust");
 response.sendStatus(200);
 })

gulp.task('default', ['dust', 'express']);
