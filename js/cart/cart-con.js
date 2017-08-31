/**
 * Created by Administrator on 2017/8/29 0029.
 */

$(function() {
    $.get("../data/data.json", function(data) {
        var strCookie = $.cookie("cart");
        var objCookie = strCookie ? JSON.parse(strCookie):{};
        console.log(objCookie);
        var html = "";
        for(var attr in objCookie) {
            html +="<div class='cart-det'><img src='" + data["goods"][0][attr].imgUrl + "'><p>" + data["goods"][0][attr].title + "</p><b>￥" + data["goods"][0][attr].price + "</b><div class='goods-number' id ='"+ attr +"'><span id='add'>+</span><input type='text' value='" + objCookie[attr] + "'/><span id='minu'>-</span></div><a class='money' href='#'>" + data["goods"][0][attr].price*attr + "</a></div>";
        }

        $(".cart-list").html(html);

        $(".goods-number").on("click", "#minu", function() {
            var id = $(this).parent().attr("id");
            var num = --objCookie[id];
            if(num <= 1){
                num = 1;
            }
            $(this).siblings("input").val(num);
            cookie(id,num,true);
            return false;
        })
        $(".goods-number").on("click", "#add" ,function() {
            var id = $(this).parent().attr("id");
            var num = ++objCookie[id];
            if(num > 10){
                num = 10;
            }
            $(this).siblings("input").val(num);
            cookie(id,num,true);
            return false;
        })
    })
})



