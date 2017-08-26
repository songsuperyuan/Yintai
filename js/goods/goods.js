/**
 * Created by Administrator on 2017/8/26 0026.
 */
function $(id){
    return document.getElementById("id");
}
let oLargeBox  = $("pic-large"),
    oMiddleBox = $("pic-middle"),
    oSmallBox = $("pic-small"),
    aLargeImg = Array.from(oLargeBox.getElementsByTagName("img")),
    aMiddleImg = Array.from(oMiddleBox.getElementsByTagName("img")),
    aSmallImg = Array.from(oSmallBox.getElementsByTagName("img"));

aSmallImg.forEach(function(v,k){
    v.ommouseenter = function(){

    }




})


/*aSmallImg.forEach(function (v, k) {
    v.onmouseenter = function () {
        // 修改小图片的样式
        aSmallImg.forEach((n) => n.className = '');
        this.className = 'active';

        // 修改中型图片的地址
        var sOldSrc = oMiddleImg.src;
        var sNewSrc = sOldSrc.slice(0, sOldSrc.lastIndexOf('-') + 1) + (k+1) + '.jpg';

        oMiddleImg.src = sNewSrc;

        // 修改大型图片地址
        var sOldSrc = oLargeImg.src;
        var sNewSrc = sOldSrc.slice(0, sOldSrc.lastIndexOf('-') + 1) + (k+1) + '.jpg';
        oLargeImg.src = sNewSrc;
    };
});*/


