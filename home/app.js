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

    this.email = "";
    this.major = "";

    this.GetUserInfo = function()
    {
        var user = '', pass = '';
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === "user")
            {
                user = atob(decodeURIComponent(sParameterName[1]));
            }
            else if (sParameterName[0] === "pass")
            {
                pass = atob(decodeURIComponent(sParameterName[1]));
            }
        }
        if(user == null || user === "") {
            user = this.sampleuser();
            pass = this.samplepass();
        }
        var info = this.LoadData(user, pass);
        var email = info["email"];
        var major = info["major"];
        return {user, pass, email, major};
    };

    this.LoadData = function(user, pass) {
        for (var i = 0; i < userData.length; i++)
            if (userData[i].user === user) {
                if(userData[i].pass === pass) {
                    var email = userData[i].email;
                    var major = userData[i].major;
                    return {email, major};
                }
                else
                {
                    window.alert('System error please login again (your password was corrupted to: ' + pass + ")");
                    window.location.href = '../login';
                }
            }

    };

    this.getFullCourseInfo = function () {

    };

    this.sampleuser = function () {
        return "SampleUser";
    };

    this.samplepass = function () {
        return "SamplePass";
    };

    var userInfo = this.GetUserInfo();
    this.user = userInfo["user"];
    this.pass = userInfo["pass"];
    this.email = userInfo["email"];
    this.major = userInfo["major"];
    this.couresInfo = this.getFullCourseInfo();

    this.logout = function() {
        window.location.href =  '../login';
    };

    this.getPossibleMajors = function () {
        var listM = MajorReqData.Majors;
        var listMajorNames = [MajorReqData.Majors.length];
        for(var i = 0; i < listM.length; i++)
            listMajorNames[i] = listM[i].Major;
        return listMajorNames;
    }

}

