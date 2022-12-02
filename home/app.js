var app = angular.module('degreeplanner', []);

app.component('main', {
    controller: MainController,
    templateUrl: "htmlTemplates/app.html"

});

function MainController()
{
    this.user ="";
    this.pass = "";
    this.HOME = 0;
    this.ACCOUNT = 1;
    this.SCHEDULE = 2;
    this.RECOMMENDATIONS = 3;
    this.REQUIREMENTS = 4;
    this.COURSE = 5;

    this.shown = this.HOME;

    GetUserPass = function()
    {
        var user = '', pass = '';
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === "user")
            {
                user = sParameterName[1];
            }
            else if (sParameterName[0] === "pass")
            {
                user = sParameterName[1];
            }
        }
        if(user == null || user === "") {
            user = sampleuser();
            pass = samplepass();
        }
        return {user, pass};
    };

    LoadData = function(user, pass) {

    };

    getFullCourseInfo = function () {

    };

    sampleuser = function () {
        return "sampleUser";
    };

    samplepass = function () {
        return "samplePass";
    };

    var loginInfo = GetUserPass();
    this.user = loginInfo["user"];
    this.pass = loginInfo["pass"];
    LoadData(this.user, this.pass);
    this.couresInfo = getFullCourseInfo();
}

