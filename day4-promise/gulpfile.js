const gulp = require('gulp');
const webserver = require('gulp-webserver');
const bodyParser = require('body-parser');
gulp.task('page',()=>{
    return gulp.src('.')
    .pipe(webserver({
        port:8080,
        fallback:'index.html',
        // open:true
    }))
});

gulp.task('data',()=>{
    return gulp.src('.')
    .pipe(webserver({
        port:8081,
        middleware:[bodyParser.urlencoded({extended:false}),(req,res)=>{
            console.log(req.body);
            res.writeHead(200,{
                "Access-Control-Allow-Origin":'*'
            })
            res.end(JSON.stringify([{
                url:"http://172.16.10.119:8080/bwie/images/image/banner1.png",
                title:"a"
            },{
                url:"http://172.16.10.119:8080/bwie/images/image/banner21.png",
                title:"b"
            }]))
        }]
    }))
})

gulp.task('default',gulp.series('page','data'));