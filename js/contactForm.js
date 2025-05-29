document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // sayfanın yenilenmesini engelle

  fetch(this.action, {
    method: 'POST',
    body: new FormData(this),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      // Başarılıysa istediğin yere yönlendir:
      setTimeout(() => {
      window.location.reload();
      this.reset();
      }, 5000);
    } else {
      alert('Form gönderimi başarısız oldu.');
    }
  }).catch(() => {
    alert('Form gönderimi başarısız oldu.');
  });
});
