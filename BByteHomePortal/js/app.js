window.onload = function () {
    console.log("chạy");
    includeHTML();
    new WOW().init();
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    $(function () {

        if ($('.owl-2').length > 0) {
            $('.owl-2').owlCarousel({
                center: false,
                items: 1,
                loop: true,
                stagePadding: 0,
                margin: 20,
                smartSpeed: 1000,
                autoplay: true,
                nav: false,
                dots: false,
                pauseOnHover: false,
                responsive: {
                    600: {
                        margin: 20,
                        nav: false,
                        items: 2
                    },
                    1000: {
                        margin: 20,
                        stagePadding: 0,
                        nav: false,
                        items: 3
                    }
                }
            });
        }

        countUp('.counter0');
        countUp('.counter1');
        countUp('.counter2');
        countUp('.counter3');

        
        $('.image-link').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom', // this class is for CSS animation below
          
            zoom: {
              enabled: true, // By default it's false, so don't forget to enable it
          
              duration: 300, // duration of the effect, in milliseconds
              easing: 'ease-in-out', // CSS transition easing function
            }
          });

    });


    // Header Sticky
    window.addEventListener("scroll", function () {
        let navbarArea = this.document.getElementById('navbar-area');
        if (window.pageYOffset > 0) {
            navbarArea.classList.add('nav-on-scroll');
        }
        else {
            if(this.document.getElementById('toggle-button').getAttribute('aria-expanded') == 'false') {
                navbarArea.classList.remove('nav-on-scroll');
            }
            else {
                navbarArea.classList.add('nav-on-scroll');
            }
        }
    })

    
}

function showHideMenu(obj) {
       let navbarArea = this.document.getElementById('navbar-area');
    if(obj.getAttribute('aria-expanded') == 'true') {
         obj.innerHTML = '<i class="bi bi-x btn-menu" style="font-size: 2rem !important;"></i>';
         navbarArea.classList.add('nav-on-scroll');
         //onscrolled
    }
    else {
        obj.innerHTML = '<i class="bi bi-list btn-menu" style="font-size: 2rem !important;"></i>';

    }
    if(obj.getAttribute('aria-expanded') == 'false' && window.pageYOffset == 0) {
        setTimeout(function() {
        
            navbarArea.classList.remove('nav-on-scroll');

        }, 250);
    }

 }

 $(window).on('load', function() {
    $('.preloader').addClass('preloader-deactivate');
});
function showDropdownMenu(obj) {
    var dropDownMenu = obj.parentNode.parentNode.lastChild;
    
    if (dropDownMenu.style.display == 'block') {
        dropDownMenu.style.display = 'none';
        obj.classList.remove('fa-minus');
        obj.classList.add('fa-plus');
    }
    else {
        dropDownMenu.style.display = 'block';
        obj.classList.add('fa-minus');
        obj.classList.remove('fa-plus');
    }
    const pmMenus = document.querySelectorAll('.p-m-menu');

    pmMenus.forEach(pmm => {
        if (obj === pmm) {
            
        }
        else {
            var dropMenu = pmm.parentNode.parentNode.lastChild;
            dropMenu.style.display = 'none';
            pmm.classList.remove('fa-minus');
            pmm.classList.add('fa-plus');
        }
    });


    // Button Hover JS
    $(function () {
        $('.default-btn')
            .on('mouseenter', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            })
            .on('mouseout', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            });
    });

    
    
}
window.initializeCarousel = () => {
    

// originally forked from https://codepen.io/kkick/pen/oWZMov

}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var  mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 720 || document.documentElement.scrollTop > 720) {
    mybutton.style.visibility = "visible";
  } else {
    mybutton.style.visibility = "hidden";
  }
}

function scrollToTop() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
}


function countUp(cl) {
    const counterUp = window.counterUp.default

    const callback = entries => {
        entries.forEach(entry => {
            const el = entry.target
            if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                counterUp(el, {
                    duration: 2000,
                    delay: 16,
                })
                el.classList.add('is-visible')
            }
        })
    }

    const IO = new IntersectionObserver(callback, { threshold: 1 })

    const el = document.querySelector(cl)
    IO.observe(el)

    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    $('.dropdown').on('hide.bs.dropdown', function (e) {
        e.preventDefault();
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(400, function () {
            $(this).closest('.dropdown').removeClass('open');
            $(this).closest('.dropdown').find('.dropdown-toggle').attr('aria-expanded', 'false');
        });
    });



}

function showPopupImage(obj) {
    var imgSrc = $(obj).attr('src');
    console.log(imgSrc);
    var popup = document.getElementById("dialog-popup");
    var popupImage = document.getElementById("product-img-popup");
    popup.style.visibility = 'visible';
    popupImage.style.display = 'block';
    popupImage.style.backgroundImage = 'url('+imgSrc+')';
}

function closePopupImage() {
    var popup = document.getElementById("dialog-popup");
    var popupImage = document.getElementById("product-img-popup");
    popupImage.style.display = 'none';
    popup.style.visibility = 'hidden';
}


//Include HTML
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}