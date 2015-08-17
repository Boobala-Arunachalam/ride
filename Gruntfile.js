module.exports = function(grunt) {
	var Helpers = require('./tasks/helpers'),
      filterAvailable = Helpers.filterAvailableTasks,
      _ = grunt.util._,
      path = require('path');

  Helpers.pkg = require("./package.json");

  if (Helpers.isPackageAvailable("time-grunt")) {
    require("time-grunt")(grunt);
  }

  // Loads task options from `tasks/options/` and `tasks/custom-options`
  // and loads tasks defined in `package.json`
  var config = _.extend({},
    require('load-grunt-config')(grunt, {
        configPath: path.join('tasks/options'),
        loadGruntTasks: false,
        init: false
      }),
    require('load-grunt-config')(grunt, { // Custom options have precedence
        configPath: path.join('tasks/custom-options'),
        init: false
      })
  );
  
  grunt.loadTasks('tasks'); // Loads tasks in `tasks/` folder

  config.env = process.env;

  require('load-grunt-tasks')(grunt);
  grunt.loadTasks('tasks');
	
	grunt.registerTask('setup', ['copy'])
	
	  grunt.registerTask('default', filterAvailable([
												'jshint',
												'copy:appTmp',
												'copy:vendorTmp',
												'transpile:ride',
												'emberTemplates:dist',
      									'less:compile',
      									'concat:rideCSS',
											 	'concat:ride',
											 	'concat:vendor',
											 	'copy:dist',
											 	'copy:asset'
											 ]));
	grunt.initConfig(config);
}