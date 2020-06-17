$(function(){

    var saniye = 7200;
    var sayacYeri = $("div.sayac span");

    $.sayimiBaslat = function(){
        if(saniye > 1){
            saniye--;
            sayacYeri.text(saniye);
            console.log(saniye);
        }
    }
    sayacYeri.text(saniye);
    setInterval("$.sayimiBaslat()", 1000);

});
