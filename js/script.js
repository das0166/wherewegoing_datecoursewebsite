$(document).ready( function() {
    $(".course-select-box h3").click(function(){
        $(".course-select-box h3, .course-select-box .check, .course-select-box ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("div").addClass("on");
        $(".on").next("ul").addClass("on");
    });
    $(".theme .theme_list>div").click(function(){
        $(".theme .theme_list>div, .theme .theme_list ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });
    $(".review_all .review").eq(0).click(function(){
        $(".modal").fadeIn();
    });
    $(".btn").click(function(){
        $(".modal").fadeOut();
    });
    
});