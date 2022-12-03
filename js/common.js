$(document).ready(function () {
    $(function () {
        $('.btn-gnavi').on('click', function () {
            var rightVal = 0;
            if ($(this).hasClass('hb-open')) {
                rightVal = -770;
                $(this).removeClass('hb-open');
            } else {
                $(this).addClass('hb-open');
            }

            $('.gnav').stop().animate({
                top: rightVal
            }, 200);
        });
    });
});