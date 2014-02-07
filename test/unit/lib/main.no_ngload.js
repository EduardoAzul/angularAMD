console.log("MAIN.noload.js");
/*jslint browser: true, node: true, nomen: true */

require.config({
    // The baseUrl depends on what is defined in karma.unit.js:basePath
    
    // alias libraries paths
    paths: {
        'angular': '/base/bower_components/angular/angular',
        'angularMocks': '/base/bower_components/angular-mocks/angular-mocks',
        'angularRoute': '/base/bower_components/angular-route/angular-route',
        'jQuery': '/base/bower_components/jquery/jquery',
        'angularAMD': '/base/src/angularAMD',
        'ngload': 'src/ngload',
        'whatever': '/base/bower_components/whatever/whatever'
    },

    baseUrl: "/base/app/js",

    shim: {
        'angularAMD': ['angular'],
        'angularRoute': ['angular'],
        'angularMocks': {
            deps:['angular', 'angularRoute'],
            'exports':'angular.mock'
        },
        'whatever': {
            deps: ['jQuery']
        }
    },
    
    // controllerSpec is at the end of dependency tree so kicking it off will start entire test
    deps: ['/base/test/unit/controller.spec.js'],
    
    // start test run, once Require.js is done
    callback: window.__karma__.start
});
