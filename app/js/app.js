define( [ 'angularAMD', 'angularRoute', 'whatever' ], function (angularAMD) {
    var app = angular.module("ngreq-app", ['ngRoute']);
    angularAMD.bootstrap(app);
    console.log("Returning APP bootstraped");
    return app;
});
