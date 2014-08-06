module.exports = function(grunt) {
  
  var compiler = require('superstartup-closure-compiler');

  grunt.initConfig({
    qunit: {
      all: ['test/index.html']
    },
    closureCompiler: {
      options: {
        create_source_map: true,
        compilerFile: compiler.getPath(),
        compilerOpts: {
          //externs: grunt.file.expand(['src/lib/**/*.js']),
          compilation_level: 'ADVANCED_OPTIMIZATIONS',
          warning_level: 'verbose',
          output_wrapper: '"(function(){%output%}).call(this);"',
          jscomp_off: ['nonStandardJsDocs']
        },
        execOpts: {
          maxBuffer: 5000 * 1024
        },
        TieredCompilation: true,
      },
      everything: {
        src: [
          'src/vowelworm.js',
          'src/modules/**/*.js',
          'main.js'
        ],
        dest: 'vowelworm-complete.min.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-closure-tools');

  grunt.registerTask('test', ['qunit']);
  grunt.registerTask('compile-all', ['closureCompiler:everything']);
};
