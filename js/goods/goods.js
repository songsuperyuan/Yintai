/**
 * Created by Administrator on 2017/8/26 0026.
 */

let oLargeBox  = $("#pic-large")[0],
    oMiddleBox = $("#pic-middle")[0],
    oSmallBox = $("#pic-small")[0],
    oShadow = $("#shadow")[0],
    oBox = $("#info-part1")[0],
    oLargeImg = $("#large-img")[0],
    oGoods = $("#good-info")[0],
    aLargeList = Array.from(oLargeBox.getElementsByTagName("li")),
    aMiddleList = Array.from(oMiddleBox.getElementsByTagName("li")),
    aSmallList = Array.from(oSmallBox.getElementsByTagName("li"));


// 选项卡效果
aSmallList.forEach(function(v,k){
    v.onmouseenter = function(){
        aSmallList.forEach((n)=>n.className="");
        this.className = "active-small";

        aMiddleList.forEach((n)=>n.className="");
        aMiddleList[k].className = "active-middle";

        aLargeList.forEach((n)=>n.className="");
        aLargeList[k].className = "active-large";
    }
})


// 放大镜效果
let
    iMaxL = oMiddleBox.offsetWidth - oShadow.offsetWidth,
    iMaxT = oMiddleBox.offsetHeight - oShadow.offsetHeight,
    iImgMaxL = 0,
    iImgMaxT = 0;

oMiddleBox.onmouseenter = function(){
    oLargeBox.style.display = "block";
    iImgMaxL = oLargeImg.offsetWidth - oLargeBox.offsetWidth;
    iImgMaxT = oLargeImg.offsetHeight - oLargeBox.offsetHeight;
}
oMiddleBox.onmousemove = function(ev){
    // 鼠标移动效果
    let e = ev || window.event;
    let iL = e.pageX - oBox.offsetLeft - oMiddleBox.offsetLeft - oShadow.offsetWidth/2,
        iT = e.pageY - oBox.offsetTop - oMiddleBox.offsetTop - oShadow.offsetHeight/2;
    if(iL < 0) {
        iL = 0;
    }
    if(iT < 0) {
        iT = 0;
    }
    if(iL >= iMaxL) {
        iL = iMaxL;
    }
    if(iT >= iMaxT) {
        iT = iMaxT;
    }
    oShadow.style.left = iL + "px";
    oShadow.style.top  = iT + "px";

    // large图片的移动
    // iL / iMaxL = iImgL / iImgMaxL
    let iImgL = iL * iImgMaxL / iMaxL,
        iImgT = iT * iImgMaxT / iMaxT;

    oLargeImg.style.left = iImgL + "px";
    oLargeImg.style.top = iImgT + "px";
};
oMiddleBox.onmouseleave = function(){
    oLargeBox.style.display = "none";
    oShadow.style.left = "-1000px;"
};


$(function(){
    $.get("../data/goods/goods.json",function(data){
        var html = template("aside",data);
        $(".details-aside").html(html);
    })


    var strSearch = location.search;
    var arrSearch = strSearch.split("=");
    var id = arrSearch[1];
    $.get("../data/data.json",function(data){

        var pic1 = "<img src="+ data["goods"][0][id].imgUrl +" />";
        var html = "<h6>"+ data["goods"][0][id].title +"<h6><p>银泰价：<span class='yt-price'>￥"+ data["goods"][0][id].price +"</span></p><p>参考价：<span class='refer-price'>￥"+ data["goods"][0][id].price +"</span></p>";
        var link ="<p data-id='" + id + "'><span>&#xe618;</span>加入购物车</p>";

        $(".goods-data").html(html);
        $(".middle").html(pic1);
        $(".small").html(pic1);
        $(".large").html(pic1);
        $("#btn").html(link);


        $("#btn").on("click",function(){
            var id = $(this).children('p').attr("data-id");
            var num = Number($(this).siblings(".number").children("input").val());
            cookie(id,num,false);
        })

    })
})
