angular.module('degreeplanner').component('account', {
    controller: [ACCController],
    bindings: {
        user: "<",
        pass: "<",
        email: "<",
        major: "=",
        possibleMajors: '<'
    },
    templateUrl: "../htmlTemplates/account.html"

});

function ACCController() {
    this.EDITABLE = 1;
    this.PROTECTED = 0;

    this.m = this.PROTECTED;

    logout = function() {
        window.location.href =  window.location.href = '../login';
    };

    saveMajor = function() {


    };

    displayPassword = function() {
        var passLength = "";
        for( var i =0; i < pass.length; i++)
            passLength +="*";
        return passLength;
    };
}