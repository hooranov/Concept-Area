window.addEventListener('resize', function() {
  var headerHeight = document.getElementById('header').offsetHeight;
  document.getElementById('hero').style.height = `calc(100vh - ${headerHeight}px)`;
});

window.dispatchEvent(new Event('resize'));
