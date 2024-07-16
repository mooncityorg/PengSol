const eggs = document.getElementsByClassName('egg');
const eggs_small = document.getElementsByClassName('egg_s');
for (let i = 0; i < eggs.length; i++) {
  eggs[i].addEventListener('click', function (event) {
    const id = eggs[i].getAttribute('data-id');
    const target = document.getElementById(id);
    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
}
for (let i = 0; i < eggs_small.length; i++) {
  eggs_small[i].addEventListener('click', function (event) {
    const id = eggs[i].getAttribute('data-id');
    const target = document.getElementById(id);
    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
}

$('.accordian').click(function () {
  $(this).find('.accordian_body').toggleClass('active');
  $(this).find('.plusminus').toggleClass('active');
  $(this).find('.accordian_header').toggleClass('active');
  $(this).find('.plusbox').toggleClass('active');
});

function copy() {
  window.navigator.clipboard.writeText($('#numbers').html().trim());
}
