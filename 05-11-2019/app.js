(function($){
  $.fn.carousel = function(config) {
    const options = $.extend({
      displayLi      : 3,
      animationTime  : 700,
      pauseTime      : 3000,
      auto            : false,
      onScroll        : function() {}
    }, config);

    return this.each(function() {
      const $t = $(this);

      const $ul = $t.find('ul');
      const $li = $ul.find('li');
      const item_width = $li.first().outerWidth(true);
      const $prev = $t.find('.prev');
      const $next = $t.find('.next');
      const interval = null;

      const scrollPrev = function() {
        if (!$ul.is(':animated')) {
          const $li = $ul.find('li');
          $ul.css('margin-left',-item_width);
          $li.first().before($li.last());
          $ul.animate({'margin-left' : 0}, options.animationTime, function(){
            options.onScroll();
          });

          if (options.auto) {
            clearInterval(interval);
            interval = setTimeout(function() {
              scrollNext()
            }, options.pauseTime);
          }
        }
      }

      const scrollNext = function() {
        if (!$ul.is(':animated')) {
          const $li = $ul.find('li');

          $ul.not(':animated').animate({'margin-left' : -item_width}, options.animationTime, function(){
            $li.last().after($li.first());
            $ul.css({'margin-left' : 0});
            options.onScroll();
          });

          if (options.auto) {
            clearInterval(interval);
            interval = setTimeout(function() {
              scrollNext()
            }, options.pauseTime);
          }
        }
      }

      $prev.bind('click', scrollPrev);
      $next.bind('click', scrollNext);

      if (options.auto) {
        interval = setTimeout(function() {scrollNext()}, options.pauseTime);
      }
    });
  }
})(jQuery);

$(function(){
  $('.carousel').carousel({
    displayLi     : 3,
    animateTime   : 700,
    pauseTime     : 5000,
    auto           : true,
    onScroll       : function() {}
  });
});
