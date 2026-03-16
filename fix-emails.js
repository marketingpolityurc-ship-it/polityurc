// Fix any Cloudflare-obfuscated email links
document.querySelectorAll('a[href*="cdn-cgi/l/email-protection"]').forEach(function(a) {
  a.href = 'mailto:chair.urc@gmail.com';
});
