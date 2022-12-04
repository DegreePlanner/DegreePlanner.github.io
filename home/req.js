angular.module('degreeplanner').component('req', {
    bindings: {
        coursesCompleted: "<",
        major: "<",
        majorReqs: '<',
    },
    controller: ["reqService", ReqController],

    templateUrl: "htmlTemplates/req.html"

});

function ReqController(reqService) {
    this.requirements = null;
    this.majorReqs= null;
    this.genEdReqs=null;

    this.MAXDISPLAY = 10;
    this.getMajorReqs = function() {
        if(this.requirements == null) {
            this.requirements = reqService.getReqs(this.major, this.majorReqs);
            this.majorReqs = this.requirements["majorRq"];
            this.genEdReqs = this.requirements["collegeRq"];
        }
        return this.majorReqs;
    };

    this.getGenEdReqs = function() {
        if(this.requirements == null) {
            this.requirements = reqService.getReqs(this.major, this.majorReqs);
            this.majorReqs = this.requirements["majorRq"];
            this.genEdReqs = this.requirements["collegeRq"];
        }
        return this.genEdReqs;
    };

    this.isTaken = function(course) {
        return reqService.findCourseCodeList(this.coursesCompleted, course.code) !== -1;
    };

    this.isFinished = function(optionGroup) {
        if(optionGroup == null) return null;
        return reqService.coursesStillRequiredCodeList(this.coursesCompleted, optionGroup.courses, optionGroup.Select) <= 0;
    };

    this.getCoursesLeft = function(optionGroup) {
        return reqService.coursesStillRequiredCodeList(this.coursesCompleted, optionGroup.courses, optionGroup.Select);
    }
}