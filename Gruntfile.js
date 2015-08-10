module.exports = function (grunt) {
  'use strict';
  
  // Force UNIX line endings
  grunt.util.linefeed = '\n';
  
  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-jekyll');
  
  // Configure Grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    clean: {
      site: '_site/'
    },
    
    jekyll: {
      options: {
        config: '_config.yml'
      },
      site: {}
    }
  });
  
  grunt.registerTask('clean-house', ['site']);
  
  grunt.registerTask('default', ['jekyll']);
}