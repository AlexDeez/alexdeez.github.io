function hideMenu(){
    var headerInner = $('.header-inner');
    var burger = $('#openMenu');
    if($(window).outerWidth() < 820){
        headerInner.slideUp();
        headerInner.removeClass('open');
        burger.removeClass('open');
        hideDropdowns();
    }
}
function showMenu(){
    var headerInner = $('.header-inner');
    var burger = $('#openMenu');
    if($(window).outerWidth() < 820){
        headerInner.slideDown();
        headerInner.addClass('open');
        burger.addClass('open');
    }
 
}

function hideSubDropdowns(){
    if($(window).outerWidth() < 820){
        $('.header-menu .nest').removeClass('open');
        $('.header-menu .nest .sub-dropdown').slideUp();
    }
}
function hideDropdowns(){
    if($(window).outerWidth() < 820){
        $('.header-menu .menu-link').removeClass('open');
        $('.header-menu .dropdown').slideUp();
        hideSubDropdowns();
    }
}

function showContactForm(){
    $('.contact-me').addClass('open');
}
function hideContactForm(){
    $('.contact-me').removeClass('open');
}

$(document).click(function(event){
    if( $(window).width() < 820 ){
        if( $(event.target).parents('.header').length < 1 && $('.header-inner').hasClass('open')){
            hideMenu();
        }
    }

    if( $('.contact-me').hasClass('open') && 
        !$(event.target).hasClass('contact-me') && 
        $(event.target).parents('.contact-me').length < 1 && 
        !$(event.target).hasClass('button-contact-me')){
        hideContactForm();
    }
});

$('#openMenu').click(function(){
    if($('.header-inner').hasClass('open')){
        hideMenu();
    }else{
        showMenu();
    }  
});

$('.header-button a').click(function(){
    hideMenu();
});



$('.menu-link').click(function(e){
    if($(window).width() < 820){
        if(!$(this).hasClass('open') && $(this).children('.dropdown').length > 0){
           
            hideDropdowns();
            e.preventDefault();
            $(this).addClass('open'); 
            $(this).find('.dropdown').slideDown();
        }


    }
});
$('.menu-link .nest').click(function(e){
    if($(window).width() < 820){
        if(!$(this).hasClass('open')){
            console.log("Hasn't open sub");
            hideSubDropdowns();
            e.preventDefault();
            $(this).addClass('open'); 
            $(this).find('.sub-dropdown').slideDown();
        }


    }
});

$('.nest').each(function(){
    $(this).find('.sub-dropdown').slideUp();
});



// CONTACT FORM


$('#contactMeButton').click(function(){
    if($('.contact-me').hasClass('open')){
        hideContactForm();
    } else {
        showContactForm();
    }
});

$('#contactMeForm, #contactMePopupForm, #contactsPageForm').on('submit', function(){
    event.preventDefault();
    jQuery.ajax({
        url: $(this).attr('action'),
        type: $(this).attr('method'),
        dataType: "html", 
        data: $(this).serialize(), 
        success: function(response) { 
        	
    	},
    	error: function(response) { 
    		
    	}
     });
    
    hideContactForm();
    $(".success-popup").modal();
});


// MAIN SLIDER 

$('.main-slider').ready(function(){
    $('.main-slider').slick({
        arrows: false,
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 6000
    });
});

// CARD GALLERY
if($('.card-gallery').length > 0){
    // $('.card-gallery .card__img').slick();
    $('.card-gallery .card__img').slickLightbox({
        src: 'src',
        itemSelector: '.card-gallery__item img',
        arrows: false,
    });
}



// TAB

$('.tab.open').find('.tab__list').slideDown();
$('.sub-tab.open').find('.sub-tab__list').slideDown();

$('.tab .tab__title').click(function(){
    if(!$(this).parent().hasClass('open')){
        $(this).next('.tab__list').slideDown();
        $(this).parent().addClass('open');
    } else {
        $(this).next('.tab__list').slideUp();
        $(this).parent().removeClass('open');

    }
});
$('.sub-tab .sub-tab__title').click(function(){
    if(!$(this).parent().hasClass('open')){
        $(this).next('.sub-tab__list').slideDown();
        $(this).parent().addClass('open');
    } else {
        $(this).next('.sub-tab__list').slideUp();
        $(this).parent().removeClass('open');

    }
});

// PALITRA CARDS

$('.pal-card__color').each(function(){
    $(this).css('background-color', $(this).attr('data-color'))
});

// ON WINDOW RESIZE
$(window).resize(function(){
    if( $(this).width() > 820 ){
        console.log($(this).width());
       $('.header-inner').removeAttr('style');
    }

});

$('header.header').ready(function(){
    hideDropdowns();
    hideSubDropdowns();
});


// MAP

if($('#map')){
    var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 50.449967, lng: 30.535065},
          zoom: 10,
          disableDefaultUI: true
        });
        var marker = new google.maps.Marker({position: {lat: 50.449967, lng: 30.535065}, map: map});
      }
}



// GALLERY
if($('.gallery')){
    var gallery_content = $('.gallery').html();
    $('.gallery').html('');
    $('.gallery').append('<div class="slider-for"></div><div class="slider-nav"></div>');
    $('.gallery .slider-for').html(gallery_content);
    $('.gallery .slider-nav').html(gallery_content);

    $('.gallery .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        adaptiveHeight: true
    });

    $('.gallery_big .slider-nav').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        // centerMode: true,
        prevArrow: '<div class="gallery-prev"></div>',
        nextArrow: '<div class="gallery-next"></div>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    $('.gallery .slider-nav').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

}