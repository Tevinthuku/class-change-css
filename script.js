var selector = '#mainmenu li';
$(selector).on('click', function(event) {
    event.preventDefault();
    $(selector).removeClass('active');
    $(this).addClass('active');
});