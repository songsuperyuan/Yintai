/**
 * Created by Administrator on 2017/8/24 0024.
 */

$(function(){

    /*--------------------切换窗口---------------------*/
    $('.slide-box-nav').children().on('mouseover',function(){
        var index = $(this).index();
        // 划过时字体样式
        $(this).css({"font-weight":"bold","border-color":"#d90048"}).siblings().css({"font-weight":"normal","border-color":"#333"});
        $(this).children().css({"display":"block"}).end().siblings().children().css({"display":"none"});
        // 显示对应的ul
        $(this).parent().parent().children('ul').eq(index).css({"display":"block","z-index":1});
        $(this).parent().parent().children('ul').eq(index).siblings().css({"z-index":0});
        })
    // 划过ul时对应导航样式
    $('.slide-box').children('ul').on('mouseover',function(){
        var index = $(this).index();
        $('.slide-box-nav').children().eq(index).css({"display":"block","z-index":1});
        $('.slide-box-nav').children().eq(index).siblings().css({"z-index":0});
    })

})
