$(document).ready(function(){
    //mobile_menu
    $('#m_menu').hide();
    $('.m_gnb>a').click(function(){
        $('#m_menu').slideDown();
    });
    $('#m_menu>ul>li>a').click(function(){
        event.preventDefault();
        $('#m_menu').slideUp();
    });
    //mobile_projects
    $('#projects>.list').slick({
        responsive: [
            {
                breakpoint: 1920,
                settings: "unslick"
            },
            {
                breakpoint: 1024,
                settings: "unslick"
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    arrows: false,
                    centerPadding: '10%',
                }
            }
        ]
    });
    //tools
    $('.tool').css('top','-200px');
    $('#content .list > li').mouseenter(function(){
        $(this).find('.tool').stop().animate({top:'8px'},400);
    });
    $('#content .list > li').mouseleave(function(){
        $(this).find('.tool').stop().animate({top:'-200px'},400);
    });
    //graph
    $('#about #adobe').stop().circleProgress({
        value: 0.85,
        size: 1000,
        lineCap: "round",
        fill: "#F2E085",
        emptyFill: "rgba(0,0,0,0)",
        reverse: true
    });
    $('#about .adobe .btn li:nth-child(1)').click(function(){
        event.preventDefault();
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $('#about #adobe').stop().circleProgress({
        value: 0.85,
        size: 1000,
        lineCap: "round",
        fill: "#F2E085",
        emptyFill: "rgba(0,0,0,0)",
        reverse: true
    });
    });
    $('#about .adobe .btn li:nth-child(2)').click(function(){
        event.preventDefault();
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $('#about #adobe').stop().circleProgress({
        value: 0.75,
        size: 1000,
        lineCap: "round",
        fill: "#F2E085",
        emptyFill: "rgba(0,0,0,0)",
        reverse: true
    });
    });
    $('#about .adobe .btn li:nth-child(3)').click(function(){
        event.preventDefault();
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $('#about #adobe').stop().circleProgress({
        value: 0.75,
        size: 1000,
        lineCap: "round",
        fill: "#F2E085",
        emptyFill: "rgba(0,0,0,0)",
        reverse: true
    });
    });
    
    $('#about #web').stop().circleProgress({
        value: 0.75,
        size: 1000,
        lineCap: "round",
        fill: "#F2E085",
        emptyFill: "rgba(0,0,0,0)",
        reverse: true
    });
    $('#about .web_coding .btn li:nth-child(1)').click(function(){
        event.preventDefault();
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $('#about #web').stop().circleProgress({
        value: 0.75,
        size: 1000,
        lineCap: "round",
        fill: "#F2E085",
        emptyFill: "rgba(0,0,0,0)",
        reverse: true
    });
    });
    $('#about .web_coding .btn li:nth-child(2)').click(function(){
        event.preventDefault();
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $('#about #web').stop().circleProgress({
        value: 0.75,
        size: 1000,
        lineCap: "round",
        fill: "#F2E085",
        emptyFill: "rgba(0,0,0,0)",
        reverse: true
    });
    });
    $('#about .web_coding .btn li:nth-child(3)').click(function(){
        event.preventDefault();
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $('#about #web').stop().circleProgress({
        value: 0.45,
        size: 1000,
        lineCap: "round",
        fill: "#F2E085",
        emptyFill: "rgba(0,0,0,0)",
        reverse: true
    });
    });
    
    $('#about #ms').stop().circleProgress({
        value: 0.85,
        size: 1000,
        lineCap: "round",
        fill: "#F2E085",
        emptyFill: "rgba(0,0,0,0)",
        reverse: true
    });
    $('#about .ms_office .btn li:nth-child(1)').click(function(){
        event.preventDefault();
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $('#about #ms').stop().circleProgress({
        value: 0.85,
        size: 1000,
        lineCap: "round",
        fill: "#F2E085",
        emptyFill: "rgba(0,0,0,0)",
        reverse: true
    });
    });
    $('#about .ms_office .btn li:nth-child(2)').click(function(){
        event.preventDefault();
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $('#about #ms').stop().circleProgress({
        value: 0.85,
        size: 1000,
        lineCap: "round",
        fill: "#F2E085",
        emptyFill: "rgba(0,0,0,0)",
        reverse: true
    });
    });
    $('#about .ms_office .btn li:nth-child(3)').click(function(){
        event.preventDefault();
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $('#about #ms').stop().circleProgress({
        value: 0.35,
        size: 1000,
        lineCap: "round",
        fill: "#F2E085",
        emptyFill: "rgba(0,0,0,0)",
        reverse: true
    });
    });
    
    $('#about>.graph').slick({
        responsive: [
            {
                breakpoint: 1920,
                settings: "unslick"
            },
            {
                breakpoint: 1024,
                settings: "unslick"
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    arrows: false,
                    centerPadding: '10%',
                }
            }
        ]
    });
    
    //content_detail
    $('#content_detail').hide();
    $('#content .list > li').click(function(){
        event.preventDefault();
        $('#content_detail').show();
        $('body').css({"overflow":"hidden", "height":"100%"});
    });
    $('#content .list > li.likonic').click(function(){
        $('#content_detail .project_list li.likonic').addClass('now');
        $('#content_detail .project_list li.likonic').siblings().removeClass('now');
    });
    $('#content .list > li.app').click(function(){
        $('#content_detail .project_list li.app').addClass('now');
        $('#content_detail .project_list li.app').siblings().removeClass('now');
    });
    $('#content .list > li.gunhang').click(function(){
        $('#content_detail .project_list li.gunhang').addClass('now');
        $('#content_detail .project_list li.gunhang').siblings().removeClass('now');
    });
    $('#content_detail img').click(function(){
        $(this).parent('li').scrollTop(0);
    });
    $('#content_detail .right i.close').click(function(){
        $('#content_detail .detail_bg').scrollTop(0);
        $('#content_detail .right .tool li.reference').removeClass('on');
        $('#content_detail .project_list .photo').show();
        $('#content_detail .project_list .refrnce').hide();
        $('#content_detail').hide();
        $('body').css({"overflow-y":"scroll", "height":"auto"});
    });
    
    if ($('#content_detail .project_list li.likonic').hasClass('now')){
        $('#content_detail .right li.link a').attr('href','sub/likonic.html');
    } else if ($('#content_detail .project_list li.app').hasClass('now')){
        $('#content_detail .right li.link a').attr('#');
        $('#content_detail .right li.link').hide();
    } else if ($('#content_detail .project_list li.gunhang').hasClass('now')){
        $('#content_detail .right li.link a').attr('href','sub/gunhangje.html');
    } else if ($('#content_detail .project_list li.blog').hasClass('now')){
        $('#content_detail .right li.link a').attr('href','https://blog.naver.com/spdlqjtoqmffhrm');
    }
    
    $('#content_detail .right li.go_top').click(function(){
        $('#content_detail .detail_bg').scrollTop(0);
    });
    
    $('#content_detail .project_list .refrnce').hide();
    $('#content_detail .right .tool li.reference').click(function(){
        event.preventDefault();
        $(this).toggleClass('on');
        $('#content_detail .project_list .photo').toggle();
        $('#content_detail .project_list .refrnce').toggle();
    });
    
    $('#content_detail .project_list li.likonic .switch li:nth-child(1)').click(function(){
        event.preventDefault();
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $('#content_detail .project_list .photo img.bi_styleguide').addClass('on');
        $('#content_detail .project_list .photo img.bi_styleguide').siblings().removeClass('on');
    });
    $('#content_detail .project_list li.likonic .switch li:nth-child(2)').click(function(){
        event.preventDefault();
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $('#content_detail .project_list .photo img.web_styleguide').addClass('on');
        $('#content_detail .project_list .photo img.web_styleguide').siblings().removeClass('on');
    });
});

