var gulp = require('gulp');
var ts = require('gulp-typescript');
 //保存自动更新浏览器
var browserSync = require('browser-sync').create();
//任务完成后调用reload
var reload      = browserSync.reload;

var path = {
    src: {
        ts:{
            entry: {
                any: './src/ts/**/*.ts'
            },
        }
    },
    dist: {
        ts: {
            output: {
                any: './dist'
            }
        }
    }
};

var tsProject = ts.createProject('tsconfig.json', { 
    noImplicitAny: true
 });
/**
 * any ts will be output
 * daiyunzhou 2019/1/3 22:55
 * last modify: daiyunzhou
 * last modify date: 2019/1/3 22:55
 */
gulp.task('ts',function(){
    return gulp.src(path.src.ts.entry.any)
        .pipe(tsProject())
        .pipe(gulp.dest(path.dist.ts.output.any));
})

gulp.task('taskList',['ts']);

gulp.task("default", ['taskList'],function (){
    browserSync.init({
        server: {
            baseDir: "./",
            port: 8080
        }
    });
    // watch ts
    gulp.watch(path.src.ts.entry.any,['ts']).on('change', reload);
});
