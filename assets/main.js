// Share buttons
document.querySelectorAll('.share-btn[data-share]').forEach(function(btn) {
  var url   = encodeURIComponent(location.href);
  var title = encodeURIComponent(document.title);
  var type  = btn.dataset.share;
  var href;
  if (type === 'x')      href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + title;
  if (type === 'line')   href = 'https://line.me/R/msg/text/?' + title + '%0A' + url;
  if (type === 'hatena') href = 'https://b.hatena.ne.jp/add?mode=confirm&url=' + url + '&title=' + title;
  if (href) { btn.href = href; btn.target = '_blank'; btn.rel = 'noopener noreferrer'; }
});

// Card click
document.querySelectorAll('.product[data-href]').forEach(function(card) {
  card.addEventListener('click', function(e) {
    if (!e.target.closest('a')) {
      window.open(card.dataset.href, '_blank', 'noopener,noreferrer');
    }
  });
});
