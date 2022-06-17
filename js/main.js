$(function () {

    $(document).ready(function () {
        $('.exchange__number').click(function (event) {
            $('.exchange__number').not($(this)).removeClass('active');
            $('.exchange__number-list').not($(this).next()).slideUp(200);

            $(this).toggleClass('active').next().slideToggle(200);
        });
    });

    $(document).ready(function () {
        $('.exchange__name').click(function (event) {
            $('.exchange__name').not($(this)).removeClass('active');
            $('.exchange__name-list').not($(this).next()).slideUp(200);

            $(this).toggleClass('active').next().slideToggle(200);
        });
    });

    $(document).ready(function () {
        $('.footer__title').click(function (event) {
            $('.footer__title').not($(this)).removeClass('active');
            $('.footer__list').not($(this).next()).slideUp(200);

            $(this).toggleClass('active').next().slideToggle(200);
        });
    });
});

