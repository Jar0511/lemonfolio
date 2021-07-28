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
    if($(window).width() < 768){
        $('#content .list').bxSlider({
            minSlides: 2,
            maxSlides: 3,
            moveSlides: 1,
            pager: false,
            touchEnabled: (navigator.maxTouchPoints > 0)
        });
    }
    
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
    
    if($(window).width() < 768){
        $('#content .graph').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            pager: true,
            controls: false,
            touchEnabled: (navigator.maxTouchPoints > 0)
        });
    }
    
    //content_detail
    $('#content_detail').hide();
    $('#content .list > li').click(function(){
        event.preventDefault();
        $('#content_detail').show();
        $('body').css({"overflow":"hidden", "height":"100%"});
    });
    $('#content .list > li').on('click', function(){
        $('#content_detail').show();
        $('body').css({"overflow":"hidden", "height":"100%"});
    });
    
    $('#content .list').on('click', '> li', function(){
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
    $('#content .list > li.kpa').click(function(){
        $('#content_detail .project_list li.blog').addClass('now');
        $('#content_detail .project_list li.blog').siblings().removeClass('now');
    });
    $('#content .list > li.plastic').click(function(){
        $('#content_detail .project_list li.plastic').addClass('now');
        $('#content_detail .project_list li.plastic').siblings().removeClass('now');
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
    $('#content_detail .right i.go_top').click(function(){
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

