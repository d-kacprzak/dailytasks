$(() => {
  $('.tabs-container').addClass('js');

  $('.tabs').each(function () {
    const $a = $(this).find('a');

    $a.on('click', function (e) {
      const $this = $(this);

      const href = $this.attr('href');

      const $target = $(href);

      if ($target.length) {
        e.preventDefault();

        $this.siblings('a').removeClass('active');
        $this.addClass('active');

        $target.siblings('.tab-content').removeClass('active');
        $target.addClass('active');
      }
    });
  });
});
