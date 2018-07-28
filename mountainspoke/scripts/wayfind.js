var wayfind = document.getElementById('nav').getElementsByTagName('a');
for (i = 0; i < wayfind.length; i++) {
  if (document.location.href.indexOf(wayfind[i].href) >= 0) {
    wayfind[i].className = 'active';
  }
}
