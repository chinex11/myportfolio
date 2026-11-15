(function () {
  var btn = document.querySelector('.menu-btn');
  var list = document.querySelector('.nav ul');
  if (btn && list) {
    btn.addEventListener('click', function () { list.classList.toggle('open'); });
    list.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') list.classList.remove('open');
    });
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
