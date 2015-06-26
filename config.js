require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery',
            ],
            exports: 'Backbone'
        },
        jqueryui: {
            deps : ['jquery']
        },
        bootstrap: {
            deps: ['jquery', 'jqueryui'],
            exports: 'jquery'
        }
    },
    paths: {
        text: '../bower_components/requirejs-text/text',
        jquery: '../bower_components/jquery/jquery',
        jqueryui: '../bower_components/jquery-ui/jquery-ui',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap'
    }
});