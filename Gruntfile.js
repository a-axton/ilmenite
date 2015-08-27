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
    copy: {
      main: {
        files: [
          {expand: true, src: ['dist/ilmenite.js'], dest: 'test/ilmenite-test/Resources', filter: 'isFile', flatten: true}
        ]
      } 
    },
    exec: {
      server: {
        cmd: 'tishadow server'
      },
      run: {
        cmd: 'tishadow run',
        cwd: 'test/ilmenite-test'
      },
      test: {
        cmd: 'tishadow spec',
        cwd: 'test/ilmenite-test'
      }
    },
    watch: {
      scripts: {
        files: ['lib/**/*.js','index.js'],
        tasks: ['build','exec:test'],
        options: {
        }
      },
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', 'build');
  grunt.registerTask('build', ['titaniumifier', 'copy']);
  grunt.registerTask('dev', ['build', 'exec:server', 'exec:run', 'watch:scripts']);
};
