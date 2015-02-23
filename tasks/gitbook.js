module.exports = function(grunt) {
    var gitbook = require('gitbook');

    grunt.registerMultiTask('gitbook', 'gitbook builder', function() {
        var config = this.data;
        var done = this.async();
        
        gitbook.generate.folder(config)
        .then(function() {
            done();
        }, done);
    });
};
