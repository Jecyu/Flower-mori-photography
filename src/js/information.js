/**
 * @Author: jecyu
 * @Date: 2017-12-13 4:14:42 pm 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-12-13 6:46:52 pm 
 */

'user strict'

var page = {
    init: function () {
        this.onload();
        this.bindEvent();
    },
    onload: function () {

        // banner 
        var config = {
            
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
        // 同一个页面不同tab下swiper的处理
        // 当切换tab时，更新swiper
        for (var i = 1; i < 7; i++) {
            $('#tab' + i).on('show', function () {
                $(this).find('.swiper-container')[0].swiper.update();
            });
        }

        
        // TODO 点击搜索
        $('#search').on('click', function() {
            console.log('test');
        });
    }
}


$(document).ready(function () {
    $(document).on('pageInit', '#information',function() {
        page.init();
    });
    $.init();
});