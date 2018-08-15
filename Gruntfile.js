module.exports = function(grunt) {

    //Configuration.
    grunt.initConfig({
        cssmin: {
            views: {
                files: {
                    'views/css/site.tidy.min.css': ['src/views/css/style.css', 'src/views/css/bootstrap-grid.css'],
                    'css/style.min.css': ['src/css/style.css'],
                    'css/print.min.css': ['src/css/print.css']
                }
            }
        },
        htmlmin: {
            main: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeCommentsFromCDATA: true,
                    minifyJS: true,
                    minifyCSS: true
                },
                files: {
                     //'Destination': 'Source'
                    'index.html': 'index.html',
                    'project-2048.html': 'project-2048.html',
                    'project-mobile.html': 'project-mobile.html',
                    'project-webperf.html': 'project-webperf.html',
                    'views/pizza.html': 'views/pizza.html'
                }
            }
        },
        useminPrepare: {
            html: [
                'src/index.html',
                'src/project-2048.html',
                'src/project-mobile.html',
                'src/project-webperf.html'
            ],
            options: {
                dest: '.'
            }
        },
        usemin: {
            html: [
                'index.html',
                'project-2048.html',
                'project-mobile.html',
                'project-webperf.html'
            ]
        },
        copy: {
            task0: {
                files: [
                    {expand:true, cwd: 'src/img/', src:['**'], dest: 'img/'},
                    {expand:true, cwd: 'src/views/images/', src:['**'], dest: 'views/images/'},
                    {src:'src/index.html', dest:'index.html'},
                    {src:'src/project-2048.html', dest:'project-2048.html'},
                    {src:'src/project-mobile.html', dest:'project-mobile.html'},
                    {src:'src/project-webperf.html', dest:'project-webperf.html'}

                ]
            }
        },
        uglify: {
            js:{
                files: {
                    'js/perfmatters.min.js': ['src/js/perfmatters.js']
                }
            },
            views: {
                files: {
                    'views/js/main.min.js': ['src/views/js/main.js']

                }
            }
        },
        processhtml: {
            views: {
                files: {
                    'views/pizza.html': ['src/views/pizza.html']
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');

    //Build tasks
    grunt.registerTask('build', [
        'copy:task0',
        'useminPrepare',
        'cssmin',
        'uglify',
        'usemin',
        'processhtml',
        'htmlmin',
        'concat'
    ]);

};
