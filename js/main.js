const currentTheme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : null;
$(document).ready(function() {
  $('.navbar-toggler').click(function() {
    $(this).toggleClass('open');
  });

  $('#customSwitch1').click(e => {
    if (e.target.checked) {
      document.documentElement.setAttribute('dark-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('dark-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
});

if (currentTheme) {
  document.documentElement.setAttribute('dark-theme', currentTheme);
  if (currentTheme === 'light') {
    // document.querySelector('input[type="checkbox"]').checked = true;
    $('input[type="checkbox"]').prop('checked', true);
  }
}
$(document).ready(function() {
  const checkMe = $('.search');
  checkMe.on('click', '.search__input', e => {
    checkMe
      .parents()
      .parent()
      .addClass('show');

    checkMe
      .children('.search__inputs')
      .find('.search__textInput')
      .focus();
  });
});
$(document).ready(function() {
  const checkMe = $('.search');

  $(checkMe).on('click', '.search__inputs__close', e => {
    checkMe
      .parents()
      .parent()
      .removeClass('show');
    checkMe
      .children('.search__inputs')
      .find('.search__textInput')
      .val('');
  });
  $('.main_container').on('click', e => {
    e.stopPropagation();
    if ($('.navbar').hasClass('show')) {
      checkMe
        .parents()
        .parent()
        .removeClass('show');
      checkMe
        .children('.search__inputs')
        .find('.search__textInput')
        .val('');
    }
  });
  $('.modal-fade,.modal-icon,.main_container').on('click', e => {
    $('#myModal,.modal-fade').addClass('hide_modal');
  });
});
