/**
 * Created by Administrator on 2017/8/26 0026.
 */
$(function(){
    var oCode = $("#reg-code");
    var oPopCon = $("#pop-content");
    var oBtn = $("#pop-btn");

    var reg_num = /^1[3|4|5|7|8][0-9][0-9]{8}$/;
    var reg_password = /^[0-9a-zA-Z]{6,12}$/;

    // 关闭弹出层
    oBtn.on("click",function(){
        $("#popbox").hide();
    })

    $("#reg-getcode").on("click",function(){
        var oNum = $("#reg-number").val();
        if(!(reg_num.test(oNum))){
            oPopCon.html("请输入正确的手机号");
            $("#popbox").show();
        }else{
            oCode.val("1111");
        }
    })

    $("#register-btn").on("click",function(){
        var oPassword = $("#reg-password").val();
        var oSure = $("#reg-resure").val();

        if(!($("#reg-number").val()=="" || $("#reg-code").val()=="" || oPassword=="" || oSure=="")){
            if(!(reg_password.test(oPassword))){
                oPopCon.html("请输入6到12位英文+数字的护照密码");
                $("#popbox").show();
            }else{
                if(oPassword === oSure){
                    window.location.href="../index.html";
                }else{
                    oPopCon.html("两次输入的密码不一致");
                    $("#popbox").show();
                }
            }
        }
    })
})