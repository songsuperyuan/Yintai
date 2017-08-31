/**
 * Created by Administrator on 2017/8/29 0029.
 */


$(function(){
    $.get("../data/data.json",function(data){
        var html = template("goods",data);
        $(".list-nav").html(html);
    })


    /*var $oul = $("#list-nav");
    $.get("../data/data.json", function(data) {
        var html = "";
        for(var i in data) {
            html += "<div class='goods-part'><img src='+ data[i].imgUrl +'/> <p>￥'+ data[i].price +'</p><p><a href='goods.html?id="+ i +"'>{{value1.title}}</a></p></div>";
        }
        $oul.html(html);
    })*/

})


