$(document).ready(function () {
  $(".card-header ").on("click", function () {
      if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
              .siblings(".accor-content")
              .slideUp(200);
      } else {
          
          $(".card-header").removeClass("active");
          $(this).addClass("active");
          $(".accor-content").slideUp(200);
          $(this)
              .siblings(".accor-content")
              .slideDown(200);
      }
  });
});