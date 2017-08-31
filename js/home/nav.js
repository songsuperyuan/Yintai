/**
 * Created by Administrator on 2017/8/24 0024.
 */
$(function(){

    // 导航部分
    $.get("data/home/nav-list.json",function(data){
        var html = template("nav",data);
        $("#partNav .partAside").html(html);
    })


    $("#partNav .partAside").on("mouseenter","li",function(){
        $(".navConBox").show();
        var index = $(this).index();
        $.get("data/home/nav-slide.json",function(data){
            var html = template("navCon",data);
            $("#partNav .navConBox").html(html);
        })

        $(".navConBox .navAside").eq(index).css("display","block").siblings().css("display","none");
    })


    $("#partNav").on("mouseleave",function(){
        $(".navConBox").hide();
    })



    // 时尚名品
    $.get("data/home/nav-lux.json",function(data){
        var html = template("lux-list-a",data);
        $(".lux-list").html(html);
    })
    $.get("data/home/nav-lux.json",function(data){
        var html = template("lux-pic-a",data);
        $(".lux-pic").html(html);
    })
})
