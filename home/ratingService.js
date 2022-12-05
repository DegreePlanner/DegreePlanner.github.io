angular.module('degreeplanner').service('ratingService', ratingService);

function ratingService() {
    this.courses = [];
    this.courseValue = [];
    this.initCourses = function (allCourses, major, majorsReqs, taken) {
        this.courses = allCourses;
        this.courseValue = [];
        this.makeCourseValue(major, majorsReqs, taken);
        console.log("testTest");
    };
    this.makeCourseValue = function (major, majorsReqs, takenCourses) {
        var rqs = this.getReqs(major, majorsReqs);

        var majorRQS = rqs["majorRq"];
        var majorR = majorRQS.reqcourses;
        var majorO = majorRQS.options;

        var collegeRQS = rqs["collegeRq"];
        var collegeR = collegeRQS.reqcourses;
        var collegeO = collegeRQS.options;

        var initialValues = [this.courses.length];

        for(var i = 0; i < this.courses.length; i++) {
            initialValues[i] = 0;
            this.courseValue[i] = 0;
        }

        for(i = 0; i < majorR.length; i++) {
            var course = majorR[i];
            var courseCode = course.code;
            if(this.findCourseCodeList(takenCourses, courseCode) === -1) {
                var index = this.getIndex(courseCode);
                initialValues[index]+= this.calculateValue(1,1,1);
            }
        }
        for(i = 0; i < majorO.length; i++) {
            var option = majorO[i];
            var needsLeft = this.coursesStillRequired(takenCourses, option.courses, option.Select);
            if(needsLeft > 0) {
                for(var j = 0; j < option.courses.length; j++) {
                    var course = option.courses[i];
                    var courseCode = course.code;
                    if(this.findCourseCodeList(takenCourses, courseCode) === -1) {
                        var index = this.getIndex(courseCode);
                        initialValues[index]+= this.calculateValue(option.courses.length-(option.Select-needsLeft),needsLeft,1);
                    }
                }
            }
        }

        for(i = 0; i < collegeR.length; i++) {
            var course = collegeR[i];
            var courseCode = course.code;
            if(this.findCourseCodeList(takenCourses, courseCode) === -1) {
                var index = this.getIndex(courseCode);
                initialValues[index]+= this.calculateValue(1,1,1);
            }
        }
        for(i = 0; i < collegeO.length; i++) {
            var option = collegeO[i];
            var needsLeft = this.coursesStillRequired(takenCourses, option.courses, option.Select);
            if(needsLeft > 0) {
                for(var j = 0; j < option.courses.length; j++) {
                    var course = option.courses[i];
                    var courseCode = course.code;
                    if(this.findCourseCodeList(takenCourses, courseCode) === -1) {
                        var index = this.getIndex(courseCode);
                        initialValues[index]+= this.calculateValue(option.courses.length-(option.Select-needsLeft),needsLeft,1);
                    }
                }
            }
        }

        for(i = 0; i < this.courses.length; i++) {
            if(initialValues[i] !== 0) {
                var pre = this.getPrereqs(this.courses[i], majorRQS, collegeRQS, takenCourses);
                this.addValueToAllPreReqs(pre, initialValues[i], initialValues, rqs, takenCourses);
            }
        }

        for(i = 0; i < this.courses.length; i++)
            this.courseValue[i] += initialValues[i];
    };
    this.calculateValue = function (options, select, value) {
        return value * select / options;
    };
    this.addValueToAllPreReqs = function(prerequisites, value, initialValues, rqs, takenCourses) {
        if(prerequisites.found  && prerequisites.prereqs !== null) {
            var preR = prerequisites.prereqs.req;
            var preO= prerequisites.prereqs.options;
            if(preR != null)
                this.applyValuePRList(preR, value, initialValues, rqs, takenCourses);
            for(var i = 0; preO != null && i < preO.length; i++) {
                var option = preO[i];
                var stillNeed = this.coursesStillRequired(takenCourses, option.courses, option.Select);
                var optionsRemaining= option.courses.length-(option.Select-stillNeed);
                var newValue = this.calculateValue(optionsRemaining, stillNeed, value);
                this.applyValuePRList(option.courses, newValue, initialValues, rqs, takenCourses);
            }
        }
    };
    this.applyValuePRList = function(list, value, initialValues, rqs, takenCourses) {
        for(var i = 0; i < list.length; i++) {
            var prereqCourse = list[i];
            var prereqCode = prereqCourse.code;
            var prereqIndex = this.getIndex(prereqCode);
            if(initialValues[prereqIndex] !== 0) {
                this.addValueToPreReq(prereqCode, prereqIndex, value, initialValues, rqs, takenCourses);
            }
        }
    };
    this.addValueToPreReq = function (prereq, index, value, initialValues, rqs, takenCourses) {
        if(initialValues[index] !== 0) {
            this.courseValue[index] += value;
            var prerequisites = this.getPrereqs(prereq, rqs["majorRq"], rqs["collegeRq"]);
            this.addValueToAllPreReqs(prerequisites, value, initialValues, rqs, takenCourses);
        }


    };
    this.getIndex = function (course) {
        for (var i = 0; i < this.courses.length; i++) {
            if (course == this.courses[i]) {
                return i;
            }
        }
    };

    this.getReqs = function (major, majorsReqs) {
        for (var i = 0; i < majorsReqs.Majors.length; i++) {
            if (major == majorsReqs.Majors[i].Major) {
                var majorRq = majorsReqs.Majors[i];
                var collegeRq = this.getCollegeReqs(majorsReqs.Majors[i].College, majorsReqs);
                return {majorRq, collegeRq};
            }
        }
    };
    this.getCollegeReqs = function (college, majorsReqs) {
        for (var i = 0; i < majorsReqs.Colleges.length; i++) {
            if (college == majorsReqs.Colleges[i].College) {
                return majorsReqs.Colleges[i];
            }
        }
    };
    this.findCourse = function (list, courseCode) {
        for (var i = 0; i < list.length; i++)
            if (list[i].code == courseCode)
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
    };
    this.coursesStillRequired = function (takenCourses, options, need) {
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