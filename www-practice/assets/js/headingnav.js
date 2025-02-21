const headingNav = function () {
    let window_ = $(window)
    let header_ = $('.site-header')
    // let hellowBottom;
    let position = 0;
    
    window_.on('scroll', function() {
        // hellowBottom = $('.hellow').height();
        // if(window_.scrollTop() > hellowBottom) {
        if (position < document.documentElement.scrollTop) {
            header_.addClass('transform');
        } else {
            header_.removeClass('transform');
        }
        position = document.documentElement.scrollTop;
    });
    
    window_.trigger('scroll');    
};

headingNav();
