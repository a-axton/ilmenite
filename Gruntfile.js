module.exports = function(grunt) {
  grunt.initConfig({
    titaniumifier: {
      "module": {
        options: {
          bundle: true,
          module: true
        },
        files: [{
          src: ['./'],
          dest: 'dist'
        }]
      }
    },
    watch: {
      ilmenite: {
        files: ["src/**"],
        tasks: ['build'],
        options: {
          spawn: false
        }
      },
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', 'build');
  grunt.registerTask('build', 'titaniumifier');
  grunt.registerTask('dev', ['build', 'watch']);
};
