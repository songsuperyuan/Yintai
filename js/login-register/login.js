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

})