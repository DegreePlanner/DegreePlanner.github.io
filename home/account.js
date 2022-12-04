angular.module('degreeplanner').component('account', {
    controller: ACCController,
    bindings: {
        user: "<",
        pass: "<",
        email: "<",
        major: "=",
        possibleMajors: '<'
    },
    templateUrl: "htmlTemplates/account.html"

});

function ACCController() {
    this.EDITABLE = 1;
    this.PROTECTED = 0;
    this.m = this.PROTECTED;

    this.selected = this.major;

    this.logout = function() {
        window.location.href =  '../login';
    };

    this.saveMajor = function() {
        this.major = this.selected;
        this.m=this.PROTECTED;
    };

    this.displayPassword = function() {
        var passLength = "";
        for( var i =0; i < this.pass.length; i++)
            passLength +="*";
        return passLength;
    };

   this.resetSelected = function() {
        this.selected = this.major;
    }

// Close the dropdown menu if the user clicks outside of it

}
