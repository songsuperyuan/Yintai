/**
 * Created by Administrator on 2017/8/26 0026.
 */
function $(id) {
    return document.getElementById(id);
}
let oLargeBox  = $("pic-large"),
    oMiddleBox = $("pic-middle"),
    oSmallBox = $("pic-small"),
    oShadow = $("shadow"),
    oBox = $("info-part1"),
    oLargeImg = $("large-img"),
    oGoods = $("good-info"),
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
    let iL = e.clientX - oBox.offsetLeft - oMiddleBox.offsetLeft - oShadow.offsetWidth/2,
        iT = e.clientY - oBox.offsetTop - oMiddleBox.offsetTop - oShadow.offsetHeight/2;
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
}
oMiddleBox.onmouseleave = function(){
    oLargeBox.style.display = "none";
    oShadow.style.left = "-1000px;"
}


$(function(){
    $.get("../data/goods/goods.json",function(data){
        var html = template("aside",data);
        $(".details-aside").html(html);
    })
})




