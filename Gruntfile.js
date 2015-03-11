'use strict';

module.exports = function(grunt) {
	// Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
    	watch: {
    		less: {
    			files: ['less/range-slider.less'],
    			tasks: ['less']
    		}
    	},

    	less: {
    		options: {
    			yuicompress: true
    		},
    		dist: {
    			options: {
    				cleancss: true,
    				report: 'gzip'
    			},
    			files: [{
                    expand: true,
                    cwd: 'less',
                    src: 'range-slider.less',
                    dest: '',
                    ext: '.css'
                }]
    		}
    	}
    });

    grunt.registerTask('default', [
        'less',
    ]);
}