module.exports = function(grunt) {
  var output_dir = './out/';
  var build_dir = output_dir + 'build/';
  var release_dir = output_dir + 'release/';

  var config = {
    all_js_concat_output: build_dir + 'concat.js'
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
        dest: release_dir + 'vowelworm-complete.min.js'
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
    },
    clean: [output_dir]
  });
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-closure-tools');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', 'qunit');
  grunt.registerTask('compile-all', ['concat:everything','closureCompiler:everything']);
};
