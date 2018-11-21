function Slide(domId) {
    var _that = this;
    this.items = $(domId).find('.item');
    this.dots  = $(domId).find('.dots a');
    this.current = 0;
    this.next = 0;
    this.interval;
    this.timeout;

    function setTimer() {
        _that.interval = setInterval(function() {
            _that.next == _that.items.length-1 ? _that.next = 0: _that.next ++;
            _that.move();
        }, 5000);
    }

    function init() {

        setTimer();

        _that.dots.each(function(index) {

            $(this).mouseover(function() {
                clearInterval(_that.interval);
                if (_that.current != index) {
                    _that.move(index);
                }
            });

            $(this).mouseout(function() {
                setTimer();
            });

        });

    }

    init();

    this.move = function(index) {
        index != undefined && (_that.next = index);
        $(_that.dots[_that.current]).removeClass('active');
        $(_that.dots[_that.next]).addClass('active');
        $(_that.items[_that.current]).removeClass('active').animate({opacity: 0}, 1000);
        $(_that.items[_that.next]).addClass('active').animate({opacity: 1}, 1000);
        _that.current = _that.next;
    }

}