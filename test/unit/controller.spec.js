console.log("Controller Spec");
define(['controller', 'angularAMD', 'angularMocks'], function (app, angularAMD, mocks) {
    console.log("Here in controller spec");
    'use strict';
    describe('Utest Controller', function () {
        //console.log("Running controllerSpec.js");
        var ctrl_name = "HomeController";
        var scope = null;
        var ctrl = null;

        console.log("ALMOST CLOSE TO IJECT WITH angularAMD");

        angularAMD.inject(function ($rootScope, $controller) {
            console.log("SUCCESS INJECTED");
            scope = $rootScope.$new();
            ctrl = $controller(ctrl_name, { $scope: scope });
        });
        console.log("heyou");
        it("service_results should exists.", function () {
            expect(scope.title).toBe("angularAMD");
        });

    });
});
