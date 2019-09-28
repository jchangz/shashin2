/*
$(window).scroll(function(){
    if ($(window).scrollTop() >= 180) {
        $('header').addClass('fix-header');
        
    }
    else {
        $('header').removeClass('fix-header');
       
    }
});
*/

$(document).ready(() => {
	$('.main-title').addClass('loaded');
  $('.sub-title-h2').addClass('loaded');
  $('.sub-title-h3').addClass('loaded');
  $('.utsurundesu').addClass('loaded');
});

$(document).on('keyup', function(event) {
  if (event.keyCode == 9){
    $( "#button-return-top, .hamburger" ).css("outline-color", "red");
  }
})

$(function(){
$('.lazy').click(function() { 
  $('html').toggleClass("toggle");
  $('#lightbox-img').attr('src',$(this).prop('currentSrc'));
  $('.lightbox-caption').text($(this).next('figcaption').text());
  $('body').toggleClass("noscroll");
})
});
    
$(function(){                          
$('.lightbox, .lightboxpers').click(function(){
  $('html').removeClass("toggle");
  $('#lightbox-img').attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
  $('body').removeClass("noscroll");
})
});


$(function(){  
$('#button-return-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
})
});

$(function() {
        $('.lazy').Lazy({
          threshold: 50,
          afterLoad: function(element) {
                    element.css("transform", "translateY(0)");
                    element.addClass("opacity");
        },
        });
});

window.onscroll = function() {stickyHeader(); stickyHamburger()};
var header = document.getElementById("sticky");

function stickyHeader(){
  if (window.pageYOffset > 150){
    header.classList.add("header-fix");
  }
  else{
    header.classList.remove("header-fix");
  }
}

function stickyHamburger(){
  if (window.pageYOffset > 120){
    document.getElementById("stickyhamburger").classList.add("hamburger-sticky");
  }
  else{
    document.getElementById("stickyhamburger").classList.remove("hamburger-sticky");
  }
}


function openHamburger() {
document.body.classList.toggle("open")
document.body.classList.toggle("noscroll")}
function openHamburgerdesktop() {
document.body.classList.toggle("open-desktop")
document.body.classList.toggle("noscroll")}

function openmobile() {
  document.body.classList.toggle("open-mobile")
}
$(function(){
$(window).resize(function () {
  $( "body" ).removeClass("open open-desktop noscroll")
})

$('#lightbox-img').bind('touchmove', function(e){e.preventDefault()}); 

$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('.main-title').css("transform", "translateY(10px)");
      $('.hide').css("transform", "scaleX(12)");
        
    }
    else {
        $('.main-title').css("transform", "translateY(-10px)");
       $('.hide').css("transform", "scaleX(1)");
       
    }
  if ($(window).scrollTop() >= 70) {
        $('.sub-title-h2').css("transform", "translateY(10px)");
    $('.sub-title-h3').css("transform", "translateY(10px)");
        
    }
    else {
        $('.sub-title-h2').css("transform", "translateY(-10px)");
      $('.sub-title-h3').css("transform", "translateY(-10px)");
       
    }
  if ($(window).scrollTop() >= 1700) {
        $('#caption-1').css("transform", "translateY(10px)");
        
    }
    else {
        $('#caption-1').css("transform", "translateY(-10px)");
       
    }
  
  if ($(window).scrollTop() >= 10) {
        $('.header-links').css("transform", "translateY(20px)");

        
    }
    else {
        $('.header-links').css("transform", "translateY(0)");
      
       
    }
});

$(function(){ 
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.utsurundesu-hide').css("transform", "scaleX(130)");
      $('.hamburger-normal, .hamburger-normal-mid').css("width", "35px");
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.utsurundesu-hide').css("transform", "scaleX(1)");
           $('.hamburger-normal, .hamburger-normal-mid').css("width", "0")
        }
    }
    
    lastScrollTop = st;
}
})
});