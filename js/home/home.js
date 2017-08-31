/**
 * Created by Administrator on 2017/8/24 0024.
 */

$(function(){

    var strSearch1 = location.search;
    var arrSearch1 = strSearch1.split("=");
    var id1 = arrSearch1[1];
    $("#username").html(id1).css("color","#d6014b");

    /*--------------------切换窗口---------------------*/
    $('.slide-box-nav').children().on('mouseover',function(){
        var index = $(this).index();
        // 划过时字体样式
        $(this).css({"font-weight":"bold","border-color":"#d90048"}).siblings().css({"font-weight":"normal","border-color":"#333"});
        $(this).children().css({"display":"block"}).end().siblings().children().css({"display":"none"});
        // 显示对应的ul
        $(this).parent().parent().children('ul').eq(index).css({"display":"block","z-index":1});
        $(this).parent().parent().children('ul').eq(index).siblings().css({"z-index":0});
        })
    // 划过ul时对应导航样式
    $('.slide-box').children('ul').on('mouseover',function(){
        var index = $(this).index();
        $('.slide-box-nav').children().eq(index).css({"display":"block","z-index":1});
        $('.slide-box-nav').children().eq(index).siblings().css({"z-index":0});
    })


    /*---------------------轮播----------------------*/
    var oPre  = $('#btn span').eq(0);
    var oNext = $('#btn span').eq(1);
    var oNav  = $('#navList');
    var aNav  = oNav.find('li');
    var oBox  = $("#slider") ;

    oNext.click(function(){
        clearInterval(iTimer);
        if(i == 4){
            i = -1;
        }
        i = i+1;
        move();
    })
    oPre.click(function(){
        clearInterval(iTimer);
        if(i == 0){
            i = 5;
        }
        i = i-1;
        move();
    })

    var i = 0;
    function move(){
        $('#pic-bg li').eq(i).fadeIn().siblings().fadeOut();
        $('#pic li').eq(i).fadeIn().siblings().fadeOut();
        $('#navList li').eq(i).addClass('select').siblings().removeClass('select');
    }

    move();

    var iTimer = setInterval(function(){
        i++;
        // 控制临界值
        if(i == $('#pic li').length){
            i = 0;
        }
        move();
    },3000);

    aNav.hover(function(){
        i = $(this).index();
        move();
        clearInterval(iTimer);
    },function(){
        move();
    })



    /*--------------------左侧菜单栏---------------------*/
    var flag = true;
    $(window).scroll(function(){
        if(flag){
            var $scrollTop = $(document).scrollTop();
            if( $scrollTop >= 1100){
                $('#fixedNav').fadeIn()
            }else{
                $('#fixedNav').fadeOut()
            }

            $('#main .tier').each(function(){
                if($(this).offset().top + $(this).outerHeight()/2 >= $scrollTop){
                    $('#fixedNav li').eq($(this).index()-4).addClass('hover').siblings().removeClass('hover');
                    return false;
                }
            })
        }
    })


    $('#fixedNav li:not(:last)').click(function(){
        flag = false;
        var index = $(this).index();
        //滚动到内容区域对应的offset().top值
        $(this).addClass('hover').siblings().removeClass('hover');
        var $top = $('#main .tier').eq(index).offset().top;
        $('body,html').animate({'scrollTop':$top},500,function(){
            flag = true;
        });
    })

    $('#fixedNav li:last').click(function(){
        flag = false
        $(this).siblings().removeClass('hover');
        $('body,html').animate({'scrollTop':0},500,function(){
            flag = true;
        });
        $('#fixedNav').fadeOut()
    })

})
