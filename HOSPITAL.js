$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.nav').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
  
      $('.fa-bars').removeClass('fa-times');
      $('.nav').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 10){
        $('header').addClass('header-active');
      }else{
        $('header').removeClass('header-active');
      }
  
    });
  
    $('.facility').magnificPopup({
      delegate:'a',
      type:'image',
      gallery:{
        enabled:true
      }
    });
  
  });

  
$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
  
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 0){
        $('header').addClass('sticky');
      }else{
        $('header').removeClass('sticky');
      }
  
      if($(window).scrollTop() > 0){
        $('.scroll-top').show();
      }else{
        $('.scroll-top').hide();
      }
  
      
  
      $('section').each(function(){
  
        let top = $(window).scrollTop();
        let offset = $(this).offset().top - 200;
        let id = $(this).attr('id');
        let height = $(this).height();
  
        if(top > offset && top < offset + height){
          $('.navbar a').removeClass('active');
          $('.navbar').find(`[href="#${id}"]`).addClass('active');
        }
  
      });
  
    });
  
   
  
    $('a[href*="#"]').on('click',function(e){
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500,
        'linear'
      );
  
    });
  
  });




  