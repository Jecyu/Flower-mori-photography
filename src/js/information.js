/**
 * @Author: jecyu
 * @Date: 2017-12-13 4:14:42 pm 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-12-14 4:48:31 pm 
 */

'user strict'

var page = {
    init: function () {
        this.onload();
        this.bindEvent();
    },
    onload: function () {

        // banner 
        this.swiperConfig = {
            
            autoplay: {
                delay: 5000
            },
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            },

        };
   
        $(".swiper-container").each(function (index, element) {
            var $this = $(this);
            $this.addClass("instance-" + index);
            var swiper = new Swiper(".instance-" + index, {
                autoplay: {
                    delay: 5000
                },
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
                },
            });
        });
        

    },
    bindEvent: function () {
        var _this = this;
        // 同一个页面不同tab下swiper的处理
        // 当切换tab时，更新swiper
        for (var i = 1; i < 7; i++) {
            $('#tab' + i).on('show', function () {
                $(this).find('.swiper-container')[0].swiper.update();
                // TODO 处理update之后配置归零
            });
        }
        

        
        // 点击搜索
        // $(document).on('Touchstart', '#search', function(e) {
        //     console.log('test');
        // });
    }
}


$(document).ready(function () {
    $(document).on('pageInit', function() {
        page.init();
    });
    $.init();
});