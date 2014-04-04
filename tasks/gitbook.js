module.exports = function(grunt) {
    var fs = require('fs'),
            gitbook = require('gitbook'),
            path = require('path');

    grunt.registerMultiTask('gitbook', 'gitbook builder', function() {
        var config = this.data;
        var done = this.async();

        if (!config.dest || !config.input || !config.title || !config.github) {
            return done(new Error("Need options 'dest', 'input', 'title' and 'github'"));
        }

        gitbook.generate.folder(
            config.input,
            config.dest,
            {
                title: config.title,
                description: config.description,
                github: config.github,
                githubHost: config.githubHost,
                templatePath: config.templatePath
            }
        )
        .then(function() {
            done();
        }, done);
    });
};
