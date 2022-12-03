$(document).ready(function () {
  $('.anchor-right-blk .anchor-btn li a').on('click', function (e) {
      var href = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(href).offset().top
      }, '500');
  });

  $('.l-inner-blk ul li').click(function () {
    $('this').addClass('suncream-btn-active');
  });
})