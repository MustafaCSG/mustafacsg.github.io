document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // sayfanın yenilenmesini engelle

  fetch(this.action, {
    method: 'POST',
    body: new FormData(this),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      // Başarılıysa istediğin yere yönlendir:
      window.location.href = "https://mustafacsg.com/#section_5";
    } else {
      alert('Form gönderimi başarısız oldu.');
    }
  }).catch(() => {
    alert('Form gönderimi başarısız oldu.');
  });
});