$(document).scroll(function () {
  var scroll = $(window).scrollTop();
  var amount = -160 + scroll * 0.8;
  if (amount < 10) {
    $(".betuk").css({ left: amount + "px" });
  }
});
