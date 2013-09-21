module.exports = {
	ride: {
		src: ["tmp/transpiled/**/*.js"],
		dest: "tmp/result/assets/ride.js",
		options: {
			sourcesContent: true
		},
	},
	
	vendor: {
		src: [
			"tmp/javascripts/vendor/jquery.min.js",
			"tmp/javascripts/vendor/bootstrap.js",
			"tmp/javascripts/vendor/handlebars.js",
			"tmp/javascripts/vendor/ember.js",
			"tmp/javascripts/vendor/loader.js",
			"tmp/javascripts/vendor/resolver.js"
		],
		dest: "tmp/result/assets/vendor.js"
	}
};