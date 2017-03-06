const gulp = require('gulp')
const eslint = require('gulp-eslint')
const friendlyFormatter = require('eslint-friendly-formatter')
const browserSync = require('browser-sync').create()

gulp.task('ESlint', function () {
  return gulp.src(['src/**/*.js', 'src/**/*.html', '!node_modules/**'])
    .pipe(eslint({configFile: './.eslintrc.js'}))
    .pipe(eslint.format(friendlyFormatter))
    // .pipe(eslint.failAfterError())
    .pipe(eslint.results(results => {
      // Called once for all ESLint results.
      console.log(`- Total Results: ${results.length}`)
      console.log(`- Total Warnings: ${results.warningCount}`)
      console.log(`- Total Errors: ${results.errorCount}`)
      browserSync.reload()
    }))
})

gulp.task('ESlint_S', ['ESlint'], function () {
  // 静态服务器
  browserSync.init({
    server: {
      baseDir: './src'
    }
  })

  gulp.watch('src/**/*.html', ['ESlint'])
  gulp.watch('src/**/*.js', ['ESlint'])
  gulp.watch('src/**/*.css', ['ESlint'])
})

gulp.task('default', ['ESlint', 'ESlint_S'], function () {
  // console.log('ESlin检查完成')
})
