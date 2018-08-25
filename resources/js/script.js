

var mainNav = document.querySelector('#navigation');
var toogleIcon = document.getElementById('toogle-icon');
var closeIcon = document.getElementById('close-icon');
var $about = $(".section-about");
var $gallery = $(".section-gallery");

window.onscroll = function () {
    if (document.documentElement.clientWidth >= 769) {
        scrollNav();
    }
    
    };

//  WORKING with GALLERY

const photoGallery = document.querySelector('.photo-gallery');
    photoGallery.addEventListener('click', changeImg, false);
const mainImage = document.getElementById('main-image');

var mainImageTitle = document.getElementById('main-image-title');
var mainImagePrice = document.getElementById('main-image-price');

var timeout, title, price;

    function changeImg(e) {
       
        
        if (e.target !== e.currentTarget) {
            e.preventDefault();
            mainImage.style.animation = "";
            let clickedImg = e.target.getAttribute('src');
//            let mainImageSrc = mainImage.getAttribute('src');
            mainImage.setAttribute('src', clickedImg);
            mainImage.style.animation = "navAnimation 1s";
            title = e.target.getAttribute('alt');
            price = e.target.getAttribute('data-price');
            mainImageTitle.textContent = title;
            mainImagePrice.textContent = price;
            timeout = setTimeout(function() {
                mainImage.style.animation = "";
            }, 1000);
//            e.target.setAttribute('src', mainImageSrc);
            
        }
        e.stopPropagation();
    
    }

// END of GALLERY part // 



// Navigation part //

if (document.documentElement.clientWidth < 769) {
    toogleIcon.style.display = "block";
    toogleIcon.addEventListener('click', function() {
    document.getElementById('navigation').style.display = "flex";
    toogleIcon.style.display = "none";
});

closeIcon.addEventListener('click', function() {
    document.getElementById('navigation').style.display = "none";
    toogleIcon.style.display = "block";
    scrollNav();
});
}




function scrollNav(e) {
    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    
    if (document.body.scrollTop > height || document.documentElement.scrollTop > height ) {
        
        mainNav.style.display = "flex";
        mainNav.classList.add('main-nav-fixed');
        mainNav.removeChild(closeIcon);
    
        
     
       
    } else {
        mainNav.classList.remove('main-nav-fixed');
        mainNav.style.display = "none";
        mainNav.appendChild(closeIcon);
        
    }
}

/* ---- MENU jQuery animations JS ----- */

$('#arrow-down').click(function () {
    $('body,html').animate({
      scrollTop: $about.offset().top
    }, 1000, function () { })
  });



$('li.about').click(function () {
    $('body,html').animate({
      scrollTop: $about.offset().top
    }, 1000, function () { })
  });

$('li.gallery').click(function () {
    $('body,html').animate({
      scrollTop: $gallery.offset().top
    }, 1000, function () { })
  });
