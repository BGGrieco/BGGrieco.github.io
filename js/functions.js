$(document).ready(function () {

  // Burger menu animations
  $('#navBurger, #sideMenuLinks').click(function () {
    aniMations();
  });

  function aniMations() {
    $('.rotateBurger').toggleClass('rotateAgain');
    $('.burgerTop').toggleClass('arrowTop');
    $('.burgerBot').toggleClass('arrowBot');
    $('#sideMenu').toggleClass('opened closed');
    $('#dimmer').toggleClass('darker lighter');
  };
  // Click out to close menu
  $('#dimmer').click(function(event) {
    var $target = $(event.target);
    console.log($target);
    if(!$target.closest('#sideMenu').length &&
    $('#sideMenu').is(':visible')) {
      aniMations();
    }
  });

  // Scroll animations
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $('#navBar').addClass('navOn');
    }
    if ($(window).scrollTop() > 800) {
      $('.up').addClass('upOn');
    }
    if ($(window).scrollTop() < 500) {
      $('#navBar').removeClass('navOn');
    }
    if ($(window).scrollTop() < 800) {
      $('.up').removeClass('upOn');
    }
  });

  // Ripple effect
  var $window = window;

  function buttonTouchEffect() {
    var $buttonTouchEffect = $('.js-touch-effect');
    // button
    $buttonTouchEffect.on('click', function (e) {
      e.preventDefault();

      $(this).append('<span></span>');
      var $span = $(this).find('span'),
        offSet = $(this).offset(),
        offSetY = event.pageY - offSet.top,
        offSetX = event.pageX - offSet.left;

      console.log(offSetY, offSetX);
      $span.css({
        top: offSetY,
        left: offSetX
      });

      $window.setTimeout(function () {
        $span.remove();
      }, 300);
    });
  }

  buttonTouchEffect();

  // Animated skills section
  $('.pointsL, .pointsR').hover(function () {
    $(this).find('.activate').toggleClass('blink');
  });

  // Top Bar Clock
  startTime();

  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);
    $('.time').html(h + ':' + m);
    var t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {
      i = '0' + i
    };
    return i;
  }

  // Radial Menu Animations
  $('#fab').fadeIn('slow');

  $('#fab').click(function () {
    $('.lighten').toggleClass('darken');
    $('.dot').toggleClass('dotUp dotDown');
    $('.rotate').toggleClass('rotateActive');
    $('.container').toggleClass('containerUp containerDown');
    $('.bigOne').toggleClass('bigOneOn');
    $('.bigTwo').toggleClass('bigTwoOn');
    $('.bigThree').toggleClass('bigThreeOn');
    $('.bigFour').toggleClass('bigFourOn');
    $('.highlighter').hide(0);
  });

  // Nav Menu Animations
  function roundMenu() {
    $('.smlOne').toggleClass('smlOnOne');
    $('.smlTwo').toggleClass('smlOnTwo');
    $('.smlThree').toggleClass('smlOnThree');
    $('.tap').toggleClass('tapOn');
    $('.highlighter').hide(0);
  };

  $('.roundMenu').click(function () {
    roundMenu();
  });

  // Page Icon Change
  $('#homeWrapper').addClass('slideInRight');
  $('#chatWrapper').addClass('slideOutLeft');
  $('#profileWrapper').addClass('slideOutRight');

  var page = 0;
  var whichClass = $('#homeWrapper').hasClass('slideInRight');

  $('#chat').click(function () {
    switch (page) {
      case 0:
        page = 1;
        switch (whichClass) {
          case true:
            $('#homeWrapper').removeClass('slideInRight');
            $('#homeWrapper').addClass('slideOutRight');
            break;
          default:
            console.log('Default');
        }
        $('#chatWrapper').removeClass('slideOutLeft');
        $('#chatWrapper').addClass('slideInLeft');
        break;

      case 2:
        page = 1;
        $('#profileWrapper').removeClass('slideInRight');
        $('#profileWrapper').addClass('slideOutRight');
        $('#chatWrapper').removeClass('slideOutLeft');
        $('#chatWrapper').addClass('slideInLeft');
        break;
      default:
        console.log('Page is: ' + page);
    }
    roundMenu();
  });

  $('#home').click(function () {
    switch (page) {
      case 1:
        page = 0;
        $('#chatWrapper').removeClass('slideInLeft');
        $('#chatWrapper').addClass('slideOutLeft');
        switch (whichClass) {
          case true:
            $('#homeWrapper').removeClass('slideOutRight');
            $('#homeWrapper').addClass('slideInRight');
            break;
          default:
            console.log('Default');
        }
        break;

      case 2:
        page = 0;
        $('#profileWrapper').removeClass('slideInRight');
        $('#profileWrapper').addClass('slideOutRight');
        switch (whichClass) {
          case true:
            $('#homeWrapper').removeClass('slideOutLeft');
            $('#homeWrapper').removeClass('slideOutRight');
            $('#homeWrapper').addClass('slideInLeft');
            break;
          default:
            console.log('Default');
        }
        break;
      default:
        console.log('Page is: ' + page);
    }
    roundMenu();
  });

  $('#profile').click(function () {
    switch (page) {
      case 1:
        page = 2;
        $('#chatWrapper').removeClass('slideInLeft');
        $('#chatWrapper').addClass('slideOutLeft');
        $('#profileWrapper').removeClass('slideOutRight');
        $('#profileWrapper').addClass('slideInRight');
        break;

      case 0:
        page = 2;
        switch (whichClass) {
          case true:
            $('#homeWrapper').removeClass('slideInRight');
            $('#homeWrapper').addClass('slideOutLeft');
            break;
          default:
            console.log('Default');
        }
        $('#profileWrapper').removeClass('slideOutRight');
        $('#profileWrapper').addClass('slideInRight');
        break;
      default:
        console.log('Page is: ' + page);
    }
    roundMenu();
  });

  // Enlarge images on onclick
  $('.enlargeable').click(function () {
      $('#darken').css({'display': 'block'});
      var newsrc = $(this).attr('src');
      console.log(newsrc);
      document.images['pic'].src = newsrc;
  });

  var zoomImage = document.getElementsByClassName('imageContainer');
  for(var i = 0; i < zoomImage.length; i++) {
    (function(index) {
      zoomImage[index].addEventListener('click', function() {
         if($(this).hasClass('zoomed')) {
           $(this).removeClass('zoomed');
         } else {
           $(this).addClass('zoomed');
         }
       })
    })(i);
  }

  // Click out to close zoom
  $('#darken').click(function(event) {
    var $target = $(event.target);
    console.log($target);
    if(!$target.closest('.imageContainer').length &&
    $('.imageContainer').is(':visible')) {
      $('#darken').hide();
    }
  });

  // Fade Content Animation
  setTimeout(function () {
    $('#fader').addClass('fader');
  }, 800);
});
