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

//MINIFICAR HTML
grunt.loadNpmTasks('grunt-contrib-htmlmin');

//COPIAR ARCHIVOS
grunt.loadNpmTasks('grunt-contrib-copy');

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
        },
        masreduc: {
        	options: {
                optimizationLevel: 7
            },
            files: [{
                expand: true,
                src: ['images/DATAWEB.jpg'],
                dest: 'dist/'
            }]
        }

},
copy: {
  main: {
    files: [
      // includes files within path and its sub-directories 
      {expand: true, src: ['fonts/'], dest: 'dist/'},
      {expand: false, src: ['images/*.svg'], dest: 'dist/'},
    ],
  },
},
htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'index.html',     // 'destination': 'source'
      }
    }
  }

});


grunt.registerTask('default',['clean','uglify','cssmin','imagemin','copy','htmlmin']);

};