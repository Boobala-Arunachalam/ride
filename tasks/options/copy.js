module.exports = {
	//Creating dist directory for deployment
	dist: {
		files: [
			{
				expand: true,
				cwd: './tmp/styles/vendor',
				src: '**',
				dest: './tmp/dist/css/'
			},
      {
				expand: true,
				cwd: './tmp/result/assets/css',
				src: '**',
				dest: './tmp/dist/css/'
			},
			{
				expand: true,
				cwd: './tmp/result/assets/js',
				src: '**',
				dest: './tmp/dist/js/'
			},
			{
				expand: true,
				cwd: './tmp',
				src: 'index.html',
				dest: './tmp/dist/'
			}
		]
	},
	
	//Copy all ride in server
	asset: {
		files: [
			{
				expand: true,
				cwd: './tmp/dist/',
				src: '**',
				dest: '../../../../Software/apache-tomcat/webapps/ride/'	
			}
		]
	},
	
	//Copy all files under app js to tmp
	appTmp: {
		files: [
			{
				expand: true,
				cwd: 'app/javascripts/',
				src: '**/*.js', 
				dest: 'tmp/javascripts/app/'
			},
			{
				expand: true,
				cwd: './',
				src: 'index.html',
				dest: 'tmp/'
			}
		]
	},
	
	//Copy all files into tmp
	vendorTmp: {
		files: [
			{
				expand: true,
				cwd: 'app/vendor/javascripts',
				src: '*.js',
				dest: 'tmp/javascripts/vendor/'
			}
		]
	},
	
	setup: {
		files: [
      {
				expand: true,
				cwd: 'node_modules/ember-template-compiler/vendor/',
				src: 'ember-template-compiler.js',
				dest: 'app/vendor/javascripts'
			},
			{
				expand: true,
				cwd: 'bower_components/bootstrap/dist/js/',
				src: 'bootstrap.js',
				dest: 'app/vendor/javascripts'
			},
			{
				expand: true,
				cwd: 'bower_components/ember/',
				src: 'ember.js',
				dest: 'app/vendor/javascripts'
			},
			{
				expand: true,
				cwd: 'bower_components/handlebars/',
				src: 'handlebars.js',
				dest: 'app/vendor/javascripts'
			},
			{
				expand: true,
				cwd: 'bower_components/jquery/',
				src: 'jquery.min.js',
				dest: 'app/vendor/javascripts'
			},
			{
				expand: true,
				cwd: 'bower_components/bootstrap/less/',
				src: '*.less',
				dest: 'app/styles'
			},
		]
	}
};