module.exports=function(grunt)
{
//ELIMINAR CARPETAS DIST
grunt.loadNpmTasks('grunt-contrib-clean');
//CONCATENA VARIOS ARCHIVOS
grunt.loadNpmTasks('grunt-contrib-concat');
//MINIFICA JAVASCRIPT
grunt.loadNpmTasks('grunt-contrib-uglify');
//INICIO DE GRUNT
grunt.initConfig({
clean: ['dist/*'],
concat:{
	options:{
		separator:';',
	},
	dist:
	{
	src:['js/*.js'],
	dest:'dist/js/build.js'
	}

}
});



grunt.registerTask('default',['clean','concat']);

};