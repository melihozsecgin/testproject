$(function(){

    var seconds = 14400;
    var counterDiv = $("div.counter span");

    $.startCounter = function(){
        if(seconds > 1){
            minute = 14400 / 60;
            seconds--;
            counterDiv.text(seconds);
            console.log(seconds);
            setTitle(seconds + ' seconds left - Home Page');
        }
        else {
            resetTitle();
        }
    }
    counterDiv.text(seconds);
    setInterval("$.startCounter()", 1000);

});

function startTimer(duration, display) {
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt((timer / 60)/60, 10);
        minutes = Math.floor((timer/60) % 60);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 180,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


$(document).ready(function() {
    $("#brand_icon").html();
})