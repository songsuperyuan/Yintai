/**
 * Created by Administrator on 2017/8/24 0024.
 */
$(function(){

    $.get("data/home/nav-list.json",function(data){
        var html = template("nav",data);
        $("#partNav ul").html(html);
    })

    $("#partNav ul").on("mouseenter","li",function(){
        $(".navCon").show();
        var index = $(this).index();
        $.get("data/home/nav_slide.json",function(data){
            var html = template("navCon",data[index]);
            $("#partNav .navCon").html(html);
        })
    })

    $("#partNav").on("mouseleave",function(){
        $(".navCon").hide();
    })







    $.get("data/home/nav-lux.json",function(data){
        var html = template("lux-list-a",data);
        $(".lux-list").html(html);
    })
    $.get("data/home/nav-lux.json",function(data){
        var html = template("lux-pic-a",data);
        $(".lux-pic").html(html);
    })
})
