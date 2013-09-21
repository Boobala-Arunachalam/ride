var grunt = require('grunt');

module.exports = {
  options: {
    templateBasePath: /app\/templates\//,
    templateFileExtensions: /\.(hbs|hjs|handlebars)/,
    templateRegistration: function(name, template) {
      return grunt.config.process("define('<%= package.namespace %>/") + name + "', ['exports'], function(__exports__){ __exports__['default'] = " + template + "; });";
    },
      /*
     * Always mention both `templateCompilerPath` and `handlebarsPath` to local files,
     * in order to compile templates against correct verison of ember and handlebars.js
     * that we are using in our app.
     */
    
    templateCompilerPath: 'tmp/javascripts/vendor/ember-template-compiler.js',
    handlebarsPath: 'tmp/javascripts/vendor/handlebars.js'
  },
  debug: {
    options: {
      precompile: false
    },
    src: "app/**/*.{hbs,hjs,handlebars}",
    dest: "tmp/result/assets/templates.js"
  },
  dist: {
    src: "<%= emberTemplates.debug.src %>",
    dest: "<%= emberTemplates.debug.dest %>"
  }
};