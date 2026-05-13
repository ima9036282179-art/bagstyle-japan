document.querySelectorAll('.product[data-href]').forEach(function(card) {
  card.addEventListener('click', function(e) {
    if (!e.target.closest('a')) {
      window.open(card.dataset.href, '_blank', 'noopener,noreferrer');
    }
  });
});
