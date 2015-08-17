module.exports = {
	ride: {
		src: ["tmp/transpiled/**/*.js"],
		dest: "tmp/result/assets/js/ride.js",
		options: {
			sourcesContent: true
		},
	},
  rideCSS: {
		src: ["tmp/styles/app/*.css"],
		dest: "tmp/result/assets/css/ride.css",
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
		dest: "tmp/result/assets/js/vendor.js"
	}
};