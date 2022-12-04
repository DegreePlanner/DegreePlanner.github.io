angular.module('degreeplanner').service('reqService', reqService);

function reqService() {
    this.getReqs = function (major, majorsReqs) {
        for (var i = 0; i < majorsReqs.Majors.length; i++) {
            if (major === majorsReqs.Majors[i].Major) {
                var majorRq = majorsReqs.Majors[i];
                var collegeRq = this.getCollegeReqs(majorsReqs.Majors[i].College, majorsReqs);
                return {majorRq, collegeRq};
            }
        }
    };
    this.getCollegeReqs = function (college, majorsReqs) {
        for (var i = 0; i < majorsReqs.Colleges.length; i++) {
            if (college === majorsReqs.Colleges[i].College) {
                return majorsReqs.Colleges[i];
            }
        }
    };
    this.findCourse = function (list, courseCode) {
        for (var i = 0; i < list.length; i++)
            if (list[i].code === courseCode)
                return i;
        return -1;
    };
    this.getPrereqs = function (courseCode, majorR, collegeR) {
        var majorP = this.getPrereqs(courseCode, majorR);
        if(majorP["found"]) {
            return majorP["prereqs"]
        }
        var collegeP = this.getPrereqs(courseCode, collegeR);
        if(collegeP["found"]) {
            return collegeP["prereqs"]
        }
        return null;
    };
    this.getPrereqs = function(courseCode, reqs) {
        var search;
        if (reqs.reqcourses != null) {
            search = this.findCourse(reqs.reqcourses, courseCode);
            if (search !== -1){
                var found = true;
                var prereqs = reqs.reqcourses[search].prerequisites;
                return {found, prereqs};
            }
        }
        if (reqs.options != null) {
            for (var j = 0; j < reqs.options.length; j++) {
                search = this.findCourse(reqs.options[j].courses, courseCode);
                if (search !== -1) {
                    var found = true;
                    var prereqs = reqs.options[j].courses[search].prerequisites;
                    return {found, prereqs};
                }
            }
        }
        var found = false;
        var prereqs = null;
        return {found, prereqs};
    }
    this.coursesStillRequired = function (takenCourses, options, need) {
        var stillNeed = need;
        for (var i = 0; i < takenCourses.length; i++)
            if (this.findCourse(options, takenCourses[i]) !== -1)
                stillNeed--;
        if (stillNeed <= 0)
            return 0;
        return stillNeed;
    };
    this.coursesStillRequiredCodeList = function (takenCourses, options, need) {
        var stillNeed = need;
        for (var i = 0; i < takenCourses.length; i++)
            if (this.findCourse(options, takenCourses[i]) !== -1)
                stillNeed--;
        if (stillNeed <= 0)
            return 0;
        return stillNeed;
    };
    this.findCourseCodeList = function (list, courseCode) {
        for (var i = 0; i < list.length; i++)
            if (list[i] == courseCode)
                return i;
        return -1;
    };
}