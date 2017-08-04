module.exports=function(grunt)
{
//ELIMINAR CARPETAS DIST
grunt.loadNpmTasks('grunt-contrib-clean');
//CONCATENA VARIOS ARCHIVOS
grunt.loadNpmTasks('grunt-contrib-concat');
//MINIFICA JAVASCRIPT
grunt.loadNpmTasks('grunt-contrib-uglify');
//MINIFICA CSS
grunt.loadNpmTasks('grunt-contrib-cssmin');
//MINIFICA IMAGENES
const mozjpeg = require('imagemin-mozjpeg');
grunt.loadNpmTasks('grunt-contrib-imagemin');

//INICIO DE GRUNT
grunt.initConfig({
clean: ['dist/*'],
//MINIFICAR JAVASCRIPT
uglify: {
    javascript: {
      files: [{
        expand: true,
        src: 'js/*.js',
        dest: 'dist/'
      }]
    }
},
cssmin: {
  options: {
    mergeIntoShorthands: false,
    roundingPrecision: -1
  },
  target: {
    files: [{
        expand: true,
        src: 'css/*.css',
        dest: 'dist/'
      }]
  }
},
imagemin: {
        dynamic: {
            files: [{
                expand: true,
                src: ['images/*.{png,jpg,gif}'],
                dest: 'dist/'
            }]
        }
    }

});



grunt.registerTask('default',['clean','uglify','cssmin','imagemin']);

};