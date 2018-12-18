/* ------- GLOBAL variables ---------*/
var header = document.querySelector('.header'),
    navToggler = document.querySelector('.nav-toggle'),
    navbar = document.querySelector('.navbar');


/* ------- GLOBAL functions ---------*/

// debouncing on scroll funcitons

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

/* ----- Navigation ----- */

// navigation toggling on mobile

function toggleNav() {
    navToggler.classList.toggle('open');
    navbar.classList.toggle('open');
}

// document.addEventListener('click', function (e) {
//     console.log(navToggler.classList.contains('open'));
//     // e.stopPropagation();
//     if (navbar.classList.contains('open')) {
//         if (e.target !== navbar && navToggler.classList.contains('open')) {
//             navToggler.classList.remove('open');
//             navbar.classList.remove('open');
//             alert();
//         }
//     }
// });

navToggler.addEventListener('click', toggleNav);

// navigation sticky on desktop
function stickNavbar() {
    var headerHeight = header.offsetHeight;
    var scrolledTop = window.scrollY;

    if (scrolledTop >= headerHeight) {
        navbar.classList.add('js-sticky');
    } else {
        navbar.classList.remove('js-sticky');
    }
};

window.addEventListener('scroll', debounce(stickNavbar, 15));

/* ----------------------------------*/
/* ---- HEADER opacity on scroll ----*/
/* ----------------------------------*/

function headerFade() {
    var headerHeight = header.offsetHeight;
    var scrolledTop = window.scrollY;
    var opacityPercentage = 1 - scrolledTop / headerHeight;

    header.style.opacity = opacityPercentage;
};

// window.addEventListener('scroll', debounce(headerFade, 10));



/* ----- FAQ accordion ---- */

function toggleFAQs(e) {
    if (e.target.tagName === 'BUTTON') {
        document.querySelectorAll('.faq__button').forEach(function (btn) {
            btn.classList.add('collapsed');
            btn.textContent = '+';
        });
        e.target.classList.remove('collapsed');
        e.target.textContent = '-';
    }
}

document.querySelector('.faq').addEventListener('click', toggleFAQs);






/* --------- Code below needs to be refactored ---------*/

/* section PLANS scritp START */

// let date = new Date();
// let month = date.getMonth();
// let dayOfMonth = date.getDate();
// let fullYear = date.getFullYear();

// let daysLeft = 0;

// function setLastMinuteTime() {

//     if ((month + 1) % 2 === 0 && (month + 1) !== 2) {
//         daysLeft = 31 - dayOfMonth;
//         return daysLeft;
//     } else if ((month + 1) % 2 === 1) {
//         daysLeft = 30 - dayOfMonth;
//         return daysLeft;
//     } else {

//         if ((fullYear % 4 == 0) && (fullYear % 100 != 0) || (fullYear % 400 == 0)) {
//             daysLeft = 29 - dayOfMonth;
//             return daysLeft;
//         } else {
//             daysLeft = 28 - dayOfMonth;
//             return daysLeft;
//         }
//     }
// }


// function printDaysLeft() {
//     const daysLeft = setLastMinuteTime();
//     document.querySelector('.last-minute-timer span').textContent = daysLeft;
// }

// printDaysLeft();


// -----------------------------


// Section Gallery ----> image preview functionality 

const galleryBoxes = document.querySelectorAll('.gallery-box'); // grab a collection of Gallery boxes.

var image = function (e) {

    const previewBox = document.querySelector('.gallery-preview-box'); // grab the preview div
    const previewBoxImg = previewBox.firstElementChild;  // grab the img inside the div

    if (e.target.tagName === 'SPAN') {   // check what was clicked and... 

        var img = e.target.nextElementSibling; // ...go to the img directly
        previewBoxImg.setAttribute('src', img.getAttribute('src')); // then set SRC to SRC of clicked img

    } else {
        var img = e.target.parentNode.nextElementSibling;
        previewBoxImg.setAttribute('src', img.getAttribute('src'));
    }


    previewBox.classList.add('show');  // change display property of PREVIEW BOX by adding .show class

    previewBox.addEventListener('click', () => {
        previewBox.classList.remove('show');    // remove .show class 
    });
    return img;
};

// alert(image);

//
//document.querySelector('.prev-foto').addEventListener('click', prev);
//document.querySelector('.next-foto').addEventListener('click', next);



galleryBoxes.forEach((box) => box.addEventListener('click', image)); //loop through the gallery and attach event listeners to each gallery item







// BENEFITS section change script below 


const benefitsParent = document.querySelector('.benefits-buttons');
const benefitsButtons = document.querySelectorAll('.benefits-btn');
const benefitsContentDivs = document.querySelectorAll('.benefits-content');


function changeBenefit(e) {
    const clickedBtn = e.target;
    const clickedBtnData = clickedBtn.dataset.target;


    for (let i = 0; i < benefitsButtons.length; i++) {

        if (benefitsButtons[i].className === "benefits-btn active") {
            benefitsButtons[i].classList.remove('active');
            benefitsContentDivs[i].classList.remove('active');
        }

        if (clickedBtnData === benefitsContentDivs[i].dataset.target) {
            benefitsContentDivs[i].classList.add('active');
        } else {
            benefitsContentDivs[i].classList.remove('active');
        }
    }
    clickedBtn.classList.add('active');
};

benefitsButtons.forEach((button) => button.addEventListener('click', changeBenefit));




/* section PLANS scritp END */






var $about = $(".section-about");


$(document).ready(function () {




    // ARROW - slide down behavior below...

    $('#arrow-down').click(function () {
        $('body,html').animate({
            scrollTop: $about.offset().top
        }, 1000, function () { })
    });


    // Menu item animation after click below...    

    $('li.about').click(function () {
        $('body,html').animate({
            scrollTop: $about.offset().top
        }, 1000, function () { })
    });




    // Animations on scroll 

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    },
        {
            offset: '70%'
        });


    //$('.best-offer').on(
    //    "click",
    //    function () {
    //      if ($('.show', this).text() === "+") {
    //        console.log("+");
    //        $('.photo-box', this).addClass('js-open')
    //        $('div.js-open + article', this).slideDown();
    //        $('.show', this).text("-");
    //      } else if ($('.show', this).text() === "-") {
    //        console.log("-");
    //        $('.photo-box', this).removeClass('js-open')
    //        $('article', this).slideUp();
    //        $('.show', this).text("+");
    //      }
    //
    //    });  // BEST jQuery script 


    // Navigation on mobile behavior below...

    // $('.nav-toggle').click(function () {
    //     $(this).toggleClass('open');
    //     $('nav.mobile').toggleClass('nav-active');
    //     $('nav.mobile').click(function () {
    //         $('nav.mobile').removeClass('nav-active');
    //         $('.nav-toggle').removeClass('open');
    //     });

    //     return false;
    // });

    // Google Maps settings below

    const map = new GMaps({
        div: '#map',
        lat: 50.0301489,
        lng: 19.918081,
        zoom: 12
    });

    map.addMarker({
        lat: 50.0301489,
        lng: 19.918081,
        title: 'Our main office',
        infoWindow: {
            content: '<p>Our main office</p>'
        }
    });


    // POPUP show

    //    setTimeout(function() {
    //        $('.newsletter-popup').fadeIn().css('display', 'flex');
    //    }, 4000);
    //    
    //    // popup listener 
    //    $('.submit-btn, .popup-close').on('click', function(e) {
    //        e.preventDefault();
    //        $('.newsletter-popup').fadeOut();
    //    });
    //    
});




// lightgallery PLUGIN


lightGallery(document.getElementById('lightgallery'));







