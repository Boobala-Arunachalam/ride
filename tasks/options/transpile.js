var grunt = require('grunt');

module.exports = {
  "ride": {
    type: 'amd',
    moduleName: function(path) {
      return grunt.config.process('<%= package.namespace %>/') + path;
    },
    files: [{
      expand: true,
      cwd: 'tmp/javascripts/app/',
      src: '**/*.js',
      dest: 'tmp/transpiled/'
    }]
  }
};
