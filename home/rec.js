angular.module('degreeplanner').component('rec', {
    bindings: {
        coursesCompleted: "<",
        major: "<",
        majorReqs: '<',
    },
    controller: ["ratingService", RecController],

    templateUrl: "htmlTemplates/rec.html"

});

function RecController(ratingService) {
    this.getReccomendationsSorted = function() {
        ratingService.initCourses(allcourses, this.major, this.majorReqs, this.coursesCompleted);
        return this.sort(ratingService.courses, ratingService.courseValue);
    };

    this.sort = function(courses, values) {
        var sorted = [];
        for(var i =0; i < courses.length; i++) {
            var greatestIndex = i;
            for(var j=i+1; j < courses.length; j++) {
                if(values[j] > values[greatestIndex])
                    greatestIndex = j;
            }
            if(values[greatestIndex] !== 0) {
                var code = courses[greatestIndex];
                var value = values[greatestIndex];
                sorted[i] = {code, value};

                var tempC = courses[i];
                var tempV = values[i];

                courses[i] = courses[greatestIndex];
                values[i] = values[greatestIndex];

                courses[greatestIndex] = tempC;
                values[greatestIndex] = tempV;
            }
        }
        return sorted;
    }
}