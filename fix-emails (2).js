// Fix Cloudflare-obfuscated email links
document.querySelectorAll('a[href*="cdn-cgi/l/email-protection"]').forEach(function(a) {
  a.href = 'mailto:chair.urc@gmail.com';
});

// Fix any footer email icon that has broken/missing href
document.querySelectorAll('a[aria-label="Email"]').forEach(function(a) {
  if (!a.href || a.href.indexOf('mailto') === -1) {
    a.href = 'mailto:chair.urc@gmail.com';
  }
});
