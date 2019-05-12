function toggleMenu(){
    var headerInner = $('.header-inner');
    if($(window).outerWidth() < 820){
        if(headerInner.hasClass('open')){
            headerInner.slideDown();
        } else {
            headerInner.slideUp();
        }
    }else{
        headerInner.slideDown();
    }
}

function hideDropdowns(){
    if($(window).width() < 820){
        $('.header-menu .menu-link').removeClass('open');
        $('.header-menu .dropdown').slideUp();
    }
}
function hideSubDropdowns(){
    if($(window).width() < 820){
        $('.header-menu .nest').removeClass('open');
        $('.header-menu .nest .sub-dropdown').slideUp();
    }
}


$('.header').ready(function(){
    // toggleMenu();

    $('#openMenu').on('click', function(){
        $(this).toggleClass('open');
        $('.header-inner').toggleClass('open');
        toggleMenu();    
    });    
});

$('.menu-link').click(function(e){
    if($(window).width() < 820){
        if(!$(this).hasClass('open') && $(this).children('.dropdown').length > 0){
            console.log("Hasn't open");
            hideDropdowns();
            e.preventDefault();
            $(this).find('.dropdown').slideDown();
            $(this).addClass('open'); 
        }


    }
});
$('.menu-link .nest').click(function(e){
    if($(window).width() < 820){
        if(!$(this).hasClass('open')){
            console.log("Hasn't open sub");
            hideSubDropdowns();
            e.preventDefault();
            $(this).find('.sub-dropdown').slideDown();
            $(this).addClass('open'); 
        }


    }
});

$('.main-slider').ready(function(){
    $('.main-slider').slick({
        arrows: false,
        dots: true
    });
});


// TAB

$('.tab.open').find('.tab__list').slideDown();

$('.tab .tab__title').click(function(){
    if(!$(this).parent().hasClass('open')){
        $(this).next('.tab__list').slideDown();
        $(this).parent().addClass('open');
    } else {
        $(this).next('.tab__list').slideUp();
        $(this).parent().removeClass('open');

    }
});

// PALITRA CARDS

$('.pal-card__color').each(function(){
    $(this).css('background-color', $(this).attr('data-color'))
});

// ON WINDOW RESIZE
$(window).resize(function(){
    toggleMenu();
    hideDropdowns();
    hideSubDropdowns();

});

$('header.header').ready(function(){
    hideDropdowns();
    hideSubDropdowns();
});