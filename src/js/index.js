
'user strict'

var page = {
    init: function() {
        this.onload();
        this.bindEvent();
    },
    onload: function() {

        // banner 
        var config = {
            autoplay: 1000,
            speed: 1000,
            
            loop: true,
        
        };
        $(".swiper-container").swiper(config);
    },
    bindEvent: function() {
        
    }
}


$(document).ready(function() {
    page.init();
    $.init();
});