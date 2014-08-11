module.exports = function(grunt) {
  var config = {
    all_js_concat_output: './concat.js'
  };
  
  var compiler = require('superstartup-closure-compiler');

  grunt.initConfig({
    qunit: {
      all: ['test/index.html']
    },
    closureCompiler: {
      options: {
        create_source_map: null,
        compilerFile: compiler.getPath(),
        compilerOpts: {
          externs: grunt.file.expand(['src/lib/externs/**/*.js']),
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
        src: config.all_js_concat_output,
        dest: 'vowelworm-complete.min.js'
      }
    },
    concat: {
      everything: {
        src: [
          'src/vowelworm.js',
          'src/modules/**/*.js',
          'main.js'
        ],
        dest: config.all_js_concat_output
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-closure-tools');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['qunit']);
  grunt.registerTask('compile-all', ['concat:everything','closureCompiler:everything']);
};
