angular.module('degreeplanner').service('ratingService', ratingService);

function ratingService() {
    this.courses = [];
    this.courseValue = [];
    this.initCourses = function (allCourses, major, majorsReqs, taken) {
        this.courses = allCourses;
        this.courseValue = [this.courses.length];
        this.makeCourseValue(major, majorsReqs, taken)
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
        }

        for(i = 0; i < majorR.length; i++) {
            var course = majorR[i];
            var courseCode = course.code;
            if(! takenCourses.contains(courseCode)) {
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
                    if(! takenCourses.contains(courseCode)) {
                        var index = this.getIndex(courseCode);
                        initialValues[index]+= this.calculateValue(option.courses.length-(option.Select-needsLeft),needsLeft,1);
                    }
                }
            }
        }

        for(i = 0; i < collegeR.length; i++) {
            var course = collegeR[i];
            var courseCode = course.code;
            if(! takenCourses.contains(courseCode)) {
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
                    if(! takenCourses.contains(courseCode)) {
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
        var preR = prerequisites.req;
        var preO= prerequisites.options;

        this.applyValuePRList(preR, initialValues[i], initialValues, rqs, takenCourses);
        for(var i = 0; i < preO.length; i++) {
            var option = preO[i];
            var stillNeed = this.coursesStillRequired(takenCourses, option.courses, option.Select);
            var optionsRemaining= option.courses.length-(option.Select-stillNeed);
            var newValue = this.calculateValue(optionsRemaining, stillNeed, value);
            this.applyValuePRList(option.courses, newValue, initialValues, rqs, takenCourses);
        }
    };
    this.applyValuePRList = function(list, value, initialValues, rqs, takenCourses) {
        for(var i = 0; o < list.length; j++) {
            var prereqCourse = list[j];
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
            if (course === this.courses[i].code) {
                return i;
            }
        }
    };
}