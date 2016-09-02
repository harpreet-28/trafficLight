(function() {
    'use strict';

    var _id = function _id(id) {
        return document['getElementById'](id);
    }

    function queSel(query) {
        return document['querySelector'](query);
    }

    function _queSelAll(query) {
        return document['querySelectorAll'](query);
    }

    var bulbs = _queSelAll('.bulb'),
        buttons = _queSelAll('.button'),
        stop = _id("stopButton"),
        slow = _id("slowButton"),
        go = _id("goButton"),
        red = _id("stopLight"),
        yellow = _id("slowLight"),
        green = _id("goLight");

    var clearAllLights = function clearAllLights() {
        bulbs.forEach(function(bulb) {
            bulb['style']['backgroundColor'] = '#111111';
        });
    };
    var turnOnLight = function turnOnLight() {
        clearAllLights(); // clear all the lights first
        var element = this;
        if (element.id === 'stopButton') {
            red.style.backgroundColor = "red";
        } else if (element.id === 'slowButton') {
            yellow.style.backgroundColor = "yellow";
        } else {
            green.style.backgroundColor = "green";
        }
    };
    buttons.forEach(function(button) {
        button["addEventListener"]('click', turnOnLight, false);
    });

})();
