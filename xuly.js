
document.getElementById('scroll_to_back').addEventListener('click', function() {
  scrollToTop();
});
window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollPosition > 100) {
      document.getElementById('scroll_to_back').style.display = 'block';
  } else {
      document.getElementById('scroll_to_back').style.display = 'none';
  }
});
function scrollToTop() {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentScroll - (currentScroll / 7)); 
  }
}

