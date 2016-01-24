module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            target: {
                files: {
                    "public/css/main.css": "src/less/main.less"
                }
            },
        },
        activejade: {
            target: {
                options: {
                    callback: 'template.add'
                },
                files: {
                    'public/js/view.js': [
                        'src/jade/*/*',
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-activejade');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less', 'activejade']);
};
