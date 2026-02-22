// Salient smooth scroll + header blur (управление цветом шапки при скролле)
(function () {
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(15,15,15,0.98)';
    } else {
      header.style.background = 'rgba(15,15,15,0.92)';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Инициализация Vanilla Tilt для карточек истории
document.addEventListener('DOMContentLoaded', () => {
  // Целевая группа карточек — .story-card
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('.story-card'), {
      max: 12,
      speed: 300,
      glare: true,
      'max-glare': 0.25
    });
  }
});
