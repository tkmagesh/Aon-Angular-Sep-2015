 var utils = angular.module("utils", []);
        utils.value("defaultTrimTextLength", 20);
        utils.filter("trimText", function(defaultTrimTextLength){
            return function(data, trimLength){
                trimLength = trimLength || defaultTrimTextLength;
                return data.length <= trimLength
                    ? data
                    : data.substr(0,trimLength) + '...';
            };
        });

        utils.filter("toMoment", function(){
            return function(data){
                return moment(data).fromNow();
            };
        });
