$(document).ready(function () {
    let a = 'Text';

    $(window).scroll(function () {
        let top = $(document).scrollTop();

        if(top >= 60){
            $('.menu').addClass('fixed');
        }else{
            $('.menu').removeClass('fixed');
        }
    });

    $('.burger').click(function (e) {
        e.preventDefault();
        $('.menuListTop').addClass('active');
    });

})
