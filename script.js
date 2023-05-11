$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $('.navbar').addClass('shadow');
  } else {
    $('.navbar').removeClass('shadow');
  }
});

const toggleSidebarBtn = document.getElementById('toggle-sidebar');
const sidebar = document.getElementById('sidebar');

toggleSidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});
