/**
 * Created by Administrator on 2017/8/26 0026.
 */
$(function(){

    $(".login-tit").on("click","li",function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        var index = $(this).index();
        if(index !== 2){
            $(".login-input").show();
            $(".login-code").hide();
            if(index === 0){
                $(".passport-text").show();
                $(".passport-password").show();
                $(".account-text").hide();
                $(".account-password").hide();
            }else{
                $(".account-text").show();
                $(".account-password").show();
                $(".passport-text").hide();
                $(".passport-password").hide();
            }
        }
        else{
            $(".login-code").show();
            $(".login-input").hide();
        }
    })

    $("#login-btn").on("click",function(){
        var sCookie = getCookie('user');
        var aCookie = sCookie ? JSON.parse(sCookie) : [];
        for(var i = 0; i < aCookie.length; i++) {
            console.log(aCookie[i]);
            if( (($("#passport").val() == aCookie[i].id) && ($("#passportPass").val() == aCookie[i].password)) || (($("#cell").val() == aCookie[i].id) &&  ($("#cellPass").val() == aCookie[i].password)) ){
                window.location.href="../index.html?id="+$("#passport").val();
            }else{
                $(".warn").show();
            }
        }
    })

})



