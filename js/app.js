var _id = function _id(id) {
    return document['getElementById'](id);
}
    function queSel(query) {
        return document['querySelector'](query);
    }
    function _queSelAll(query) {
        return document['querySelectorAll'](query);
    }

var bulbs = _queSelAll('.bulb');
var buttons = _queSelAll('.button');
var stop = _id("stopButton");
var slow = _id("slowButton");
var go = _id("goButton");
var red = _id("stopLight");
var yellow = _id("slowLight");
var green = _id("goLight");

var clearAllLights = function clearAllLights() {
    bulbs.forEach(function(bulb) {
        bulb['style']['backgroundColor']= '#111111';
    });
};
var turnOnLight = function turnOnLight() {
    clearAllLights();
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






// var stopLight = function stopLight() {
//     red['style']['backgroundColor'] = "red";
//     green['style']['backgroundColor'] = "";
//     yellow['style']['backgroundColor'] = "";

// }

// var slowLight = function slowLight() {
//     yellow['style']['backgroundColor'] = "yellow";
//     red['style']['backgroundColor'] = "";
//     green['style']['backgroundColor'] = "";

// }

// var goLight = function goLight() {
//     green['style']['backgroundColor'] = "green";
//     yellow['style']['backgroundColor'] = "";
//     red['style']['backgroundColor'] = "";
// }
// stop['addEventListener']("click", stopLight, false);
// pause['addEventListener']("click", slowLight, false);
// go['addEventListener']("click", goLight, false);
