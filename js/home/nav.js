/**
 * Created by Administrator on 2017/8/24 0024.
 */
$(function(){
    $.get("data/home/nav-lux.json",function(data){
        var html = template("lux-list-a",data);
        $("#lux-list").html(html);
    })
})
