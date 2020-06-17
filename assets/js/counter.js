$(function(){

    var seconds = 7200;
    var counterDiv = $("div.counter span");

    $.startCounter = function(){
        if(seconds > 1){
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
