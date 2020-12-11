$(document).ready(function () {
  // Burger menu animations
  $('#navBurger, #sideMenuLinks').click(function () {
    $('.rotateBurger').toggleClass('rotateAgain');
    $('.burgerTop').toggleClass('arrowTop');
    $('.burgerBot').toggleClass('arrowBot');
    $('#sideMenu').toggleClass('opened closed');
  });

  // Animated logo section.
  $('#logo').mouseup(function () {
    $(this).css({
      'animation-play-state': 'paused'
    });
    changeImage();
  });

  var newsrc = 0;

  function changeImage() {
    if (newsrc === 0) {
      $('#logo').css('left', '-10');
      document.images['pic'].style.top = '-3px';
      document.images['pic'].style.left = '-3px';
      document.images['pic'].src = 'imgs/materialLogo.png';
      document.images['pic'].width = '70';
      newsrc = 1;
    } else if (newsrc === 1) {
      document.images['pic'].src = 'imgs/appleLogo.png';
      document.images['pic'].width = '65';
      document.images['pic'].style.top = '-2px';
      document.images['pic'].style.left = '-2px';
      newsrc = 2;
    } else {
      document.images['pic'].src = 'imgs/logo.png';
      document.images['pic'].width = '60';
      document.images['pic'].style.top = '0px';
      document.images['pic'].style.left = '0px';
      newsrc = 0;
    }
  }

  // Scroll animations
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $('#navBar').addClass('navOn');
    }
    if ($(window).scrollTop() > 800) {
      $('.mail').addClass('mailOn');
      $('.civi').addClass('civiOn');
      $('.up').addClass('upOn');
    }
    if ($(window).scrollTop() < 500) {
      $('#navBar').removeClass('navOn');
    }
    if ($(window).scrollTop() < 800) {
      $('.mail').removeClass('mailOn');
      $('.civi').removeClass('civiOn');
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
      }, 400);
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
            $('#homeWrapper').removeClass('slideInLeft');
            $('#homeWrapper').addClass('slideOutLeft');
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
            $('#homeWrapper').removeClass('slideInRight');
            $('#homeWrapper').addClass('slideOutRight');
            break;
          default:
            $('#homeWrapper').removeClass('slideInLeft');
            $('#homeWrapper').addClass('slideOutLeft');
        }
        break;
      case 2:
        page = 0;
        $('#profileWrapper').removeClass('slideInRight');
        $('#profileWrapper').addClass('slideOutRight');
        switch (whichClass) {
          case true:
            $('#homeWrapper').removeClass('slideInRight');
            $('#homeWrapper').addClass('slideOutRight');
            break;
          default:
            $('#homeWrapper').removeClass('slideInLeft');
            $('#homeWrapper').addClass('slideOutLeft');
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
            $('#homeWrapper').addClass('slideOutRight');
            break;
          default:
            $('#homeWrapper').removeClass('slideInLeft');
            $('#homeWrapper').addClass('slideOutLeft');
        }
        $('#profileWrapper').removeClass('slideOutRight');
        $('#profileWrapper').addClass('slideInRight');
        break;
      default:
        console.log('Page is: ' + page);
    }
    roundMenu();
  });

  // Fade Content Animation
  setTimeout(function () {
    $('#fader').addClass('fader');
  }, 800);
});