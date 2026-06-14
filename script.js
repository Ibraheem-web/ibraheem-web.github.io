/* ============================================================
   MI. — Portfolio
   Editor navigation: scroll-spy + click-to-scroll for the
   sidebar tree items and the editor tabs.
   ============================================================ */
(function () {
  'use strict';

  var FILES = ['hero', 'skills', 'projects', 'process', 'contact'];
  var SPY_OFFSET = 140; // px into the viewport that counts as "current"

  var scroller = document.getElementById('editor-scroll');
  if (!scroller) return;

  // Every clickable nav element (tabs, tree items, hero buttons) carries
  // data-target="<file id>".
  var navItems = document.querySelectorAll('[data-target]');
  // Only the persistent nav (tabs + tree) gets the active-state highlight.
  var highlightItems = document.querySelectorAll('.tab[data-target], .tree-item[data-target]');

  var activeId = null;
  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function scrollToFile(id) {
    var el = document.getElementById('file-' + id);
    if (el) {
      scroller.scrollTo({
        top: Math.max(0, el.offsetTop - 6),
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    }
  }

  function setActive(id) {
    if (id === activeId) return;
    activeId = id;
    highlightItems.forEach(function (item) {
      var isActive = item.getAttribute('data-target') === id;
      item.classList.toggle('is-active', isActive);
      if (isActive) {
        item.setAttribute('aria-current', 'true');
      } else {
        item.removeAttribute('aria-current');
      }
    });
  }

  // Scroll-spy: the last section whose top has passed the offset is "current".
  function spy() {
    var y = scroller.scrollTop + SPY_OFFSET;
    var current = FILES[0];
    for (var i = 0; i < FILES.length; i++) {
      var el = document.getElementById('file-' + FILES[i]);
      if (el && el.offsetTop <= y) current = FILES[i];
    }
    setActive(current);
  }

  // Wire up clicks.
  navItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      scrollToFile(item.getAttribute('data-target'));
    });
  });

  // Throttle scroll handling to one update per animation frame.
  var ticking = false;
  scroller.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      spy();
      ticking = false;
    });
  }, { passive: true });

  spy(); // set initial active state
})();
