/**
 * Created by lemon on 2016/8/10.
 */
$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide(2000);
    });
    $("#show").click(function(){
        $("p").show(2000);
    });
    $("#hide_show").click(function(){
        $("p").toggle(2000);
    });
    $(".main>li>a").click(function(){
        alert("我是a");
        $(this).next("ul").slideToggle(1000);
    });
    $(".h_main>li").hover(function(){
        $(this).next("ul").slideDown();

    });
});