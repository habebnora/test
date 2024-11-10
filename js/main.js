(function ($) {

  'use strict';

  // bootstrap dropdown hover

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();


  $('nav .dropdown').hover(function () {
    var $this = $(this);
    $this.addClass('show');
    $this.find('> a').attr('aria-expanded', true);
    $this.find('.dropdown-menu').addClass('show');
  }, function () {
    var $this = $(this);
    $this.removeClass('show');
    $this.find('> a').attr('aria-expanded', false);
    $this.find('.dropdown-menu').removeClass('show');
  });


  $('#dropdown04').on('show.bs.dropdown', function () {
    console.log('show');
  });

  // home slider
  $('.home-slider').owlCarousel({
    rewind: true,
    autoplay: true,
    margin: 0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 1,
    dragTouch: false,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
  });

  $('.nonloop-block-11').owlCarousel({
    center: false,
    items: 1,
    loop: false,
    stagePadding: 20,
    margin: 50,
    nav: true,
    smartSpeed: 1000,
    navText: ['<span class="ion-chevron-left">', '<span class="ion-chevron-right">'],
    responsive: {
      600: {
        stagePadding: 20,
        items: 1
      },
      800: {
        stagePadding: 20,
        items: 1
      },
      1000: {
        // stagePadding: 200,
        items: 1
      }
    }
  });

  // owl-carousel
  var majorCarousel = $('.js-carousel-1');
  majorCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });

  // owl carousel
  var major2Carousel = $('.js-carousel-2');
  major2Carousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  });


  var contentWayPoint = function () {
    var i = 0;
    $('.element-animate').waypoint(function (direction) {

      if (direction === 'down' && !$(this.element).hasClass('element-animated')) {

        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function () {

          $('body .element-animate.item-animate').each(function (k) {
            var el = $(this);
            setTimeout(function () {
              var effect = el.data('animate-effect');
              if (effect === 'fadeIn') {
                el.addClass('fadeIn element-animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft element-animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight element-animated');
              } else {
                el.addClass('fadeInUp element-animated');
              }
              el.removeClass('item-animate');
            }, k * 100);
          });

        }, 100);

      }

    }, { offset: '95%' });
  };
  contentWayPoint();

  $('.navbar .dropdown > a').click(function () {
    location.href = this.href;
  });



})(jQuery);


async function loadTranslations(language) {
  let data = '';
  try {
    const response = await fetch(`/i18next/${language}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load ${language} translations`);
    }
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}


function updateContent() {
  const elements = [
    'home', 'about', 'products', 'contact', 'dropdown04', 'why', 'Quality',
    'description1', 'Leadership', 'description2', 'Credibility', 'description3',
    'about2', 'about2_description', 'titelh5', 'America', 'America_desc', 'Africa',
    'Africa_desc', 'AsiaArab', 'AsiaArab_desc', 'Europe', 'Europe_desc',
    'Our_Products', 'Happy Clients', 'name1', 'Companies_Client1', 'quot1',
    'name2', 'Companies_Client2', 'quot2', 'name3', 'Companies_Client3', 'quot3','Company_Profile', 'Download_Now',
    'About_Us', 'aboutdetalis', 'About_Us2', 'Address', 'Addressdetalis',
    'Telephone', 'Email_footer', 'Contact Info', 'Quick Links', 'Facebookfoter',
    'Addressdetalis2', '.id-slider1', '.id_slider1-content', '.id-slider2',
    '.id_slider2-content', '.id-slider3', '.id_slider3-content', 'calcium1', 'calcium2', 'calcium3','calcium4','calcium5', 'Contact2','Contact3', 'bord', 'ste', 'ste-n',
    'ste2', 'ste-n2','ste3', 'ste-n3','ourproducts1','products_head','contactus4','contactus4-d'
  ];

  elements.forEach(id => {
    const el = document.getElementById(id) || document.querySelector(id);
    if (el) {
      el.innerHTML = i18next.t(id);
    }
  });
}

// دالة لتغيير اللغة
function changeLanguage(lng) {
  i18next.changeLanguage(lng, () => {
    updateContent(); // تحديث المحتوى بعد التبديل
    // document.dir = (lng === 'ar') ? 'rtl' : 'ltr'; // تغيير اتجاه النص
  });
}

// دالة لتهيئة i18next وتحميل الترجمات
async function initI18next() {
  const [enTranslations, arTranslations] = await Promise.all([
    loadTranslations('en'),
    loadTranslations('ar')
  ]);

  i18next.init({
    lng: 'en', // اللغة الافتراضية
    debug: true, // تفعيل التصحيح
    resources: {
      en: { translation: enTranslations },
      ar: { translation: arTranslations }
    }
  }, () => {
    updateContent(); // تحديث المحتوى بعد تهيئة i18next
  });
}

// أحداث التبديل بين اللغات
document.querySelector("#ar").addEventListener("click", () => changeLanguage('ar'));
document.querySelector("#en").addEventListener("click", () => changeLanguage('en'));

// تهيئة i18next عند تحميل الصفحة
initI18next();
document.querySelector("#ar").addEventListener("click", () => {
  // document.dir='rtl';
  changeLanguage('ar')
})
document.querySelector("#en").addEventListener("click", () => {
  // document.dir='ltr';
  changeLanguage('en');
})


window.addEventListener('scroll', function () {
  var navbarCollapse = document.querySelector('#navbarsExample05');
  var toggler = document.querySelector('.navbar-toggler');

  if (navbarCollapse.classList.contains('show')) {
    toggler.click(); // يقوم بإغلاق القائمة
  }
});

document.getElementById("contactForm").addEventListener("submit", async function(event) {
  event.preventDefault(); // منع الإرسال الافتراضي للفورم
  
  const formData = new FormData(this);
  
  try {
    const response = await fetch('send_email.php', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      document.getElementById("responseMessage").innerText = "تم الإرسال بنجاح!";
      document.getElementById("responseMessage").style.color = "green";
    } else {
      document.getElementById("responseMessage").innerText = "حدث خطأ أثناء الإرسال.";
      document.getElementById("responseMessage").style.color = "red";
    }
  } catch (error) {
    console.error('Error:', error);
    document.getElementById("responseMessage").innerText = "تعذر الاتصال بالخادم.";
    document.getElementById("responseMessage").style.color = "red";
  }
});



