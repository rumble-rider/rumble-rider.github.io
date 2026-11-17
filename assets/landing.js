// Store landing pages (/x, /xp, /th ...).
// Each page sets window.RR_CH = { src, campaign, ct } before loading this file.
// Phones go straight to their store; other devices see two store buttons.
// Add ?stay to the address to show the page without redirecting.
(function () {
  var ch = window.RR_CH || {};
  var PT = '129626418';
  var play = 'https://play.google.com/store/apps/details?id=com.nextmile.rumblerider&referrer=' +
    encodeURIComponent('utm_source=' + ch.src + '&utm_medium=social&utm_campaign=' + ch.campaign);
  var appstore = 'https://apps.apple.com/app/apple-store/id6827044605?pt=' + PT +
    '&ct=' + encodeURIComponent(ch.ct) + '&mt=8';
  window.RR_LINKS = { play: play, appstore: appstore };

  document.addEventListener('DOMContentLoaded', function () {
    var p = document.getElementById('play');
    var a = document.getElementById('appstore');
    if (p) p.href = play;
    if (a) a.href = appstore;
  });

  if (!ch.src || !ch.ct) return;
  if (/[?&]stay(=|&|$)/.test(location.search)) return;
  var ua = navigator.userAgent || '';
  var isIos = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (/Android/i.test(ua)) { location.replace(play); }
  else if (isIos) { location.replace(appstore); }
})();
