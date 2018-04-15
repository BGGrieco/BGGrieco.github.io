$(document).ready(function()
{
  // Animated logo section.
  $("#logo").mouseup(function()
  {
    $(this).css({"animation-play-state": "paused"});
    changeImage();
  });

  var newsrc = 0;

  function changeImage()
  {
    if ( newsrc === 0 )
    {
      $("#logo").css("left", "-10");
      //document.images["pic"].style.bottom = "10px";
      //document.images["pic"].style.left = "-10px";
      document.images["pic"].src = "imgs/materialLogo.png";
      document.images["pic"].width = "70";
      newsrc = 1;
    }
    else if ( newsrc === 1 )
    {
      document.images["pic"].src = "imgs/appleLogo.png";
      document.images["pic"].width = "65";
      document.images["pic"].style.top = "-2px";
      document.images["pic"].style.left = "-2px";
      newsrc = 2;
    }
    else
    {
      document.images["pic"].src = "imgs/logo.png";
      document.images["pic"].width = "60";
      document.images["pic"].style.top = "0px";
      document.images["pic"].style.left = "0px";
      newsrc = 0;
    }
  }

  /*$(window).scroll(function()
  {
    if ($(window).scrollTop() > 500)
    {
      $(".mail").toggleClass(".mailOn");
      $(".civi").toggleClass("civiOn");
      $(".up").toggleClass("upOn");
    }
    if ($(window).scrollTop() < 500)
    {
      $(".mail").toggleClass(".mailBack");
      $(".civi").toggleClass("civiBack");
      $(".up").toggleClass("upBack");
    }
  });*/

  $("#trigger").click(function()
  {
    $("#mail").toggleClass("mailOn");
    $("#civi").toggleClass("civiOn");
    $("#up").toggleClass("upOn");
  });

  // Animated skills section.
  $(".pointsL, .pointsR").hover(function()
  {
    $(this).find(".activate").toggleClass("blink");
  });

  // Top Bar Clock.
  startTime();

  function startTime()
  {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);
    $(".time").html(h + ":" + m);
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i)
  {
    if (i < 10) {i = "0" + i};
    return i;
  }

  // Radial Menu Animations.
  $("#fab").fadeIn("slow");

  $("#fab").click(function()
  {
    $(".plusWhite").toggleClass("plusDark");
    $(".dot").toggleClass("dotUp dotDown");
    $(".rotate").toggleClass("rotateActive");
    $(".container").toggleClass("containerUp containerDown");
    $(".bigOne").toggleClass("bigOneOn");
    $(".bigTwo").toggleClass("bigTwoOn");
    $(".bigThree").toggleClass("bigThreeOn");
    $(".bigFour").toggleClass("bigFourOn");
  });

  // Nav Menu Animations.
  $(".burgerMenu").click(function()
  {
    $(".smlOne").toggleClass("smlOnOne");
    $(".smlTwo").toggleClass("smlOnTwo");
    $(".smlThree").toggleClass("smlOnThree");
    $(".tap").toggleClass("tapOn");
  });
});
