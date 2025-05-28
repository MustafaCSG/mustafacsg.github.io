  const navbarCollapse = document.getElementById('navbarNav');
  const telText = document.querySelector('.tel-text');
  const telIcon = document.querySelector('.tel-icon');

  // Bootstrap'ın collapse event'lerini dinleyerek değişim yapacağız
  navbarCollapse.addEventListener('show.bs.collapse', () => {
    // Menü açılıyor → Yazıyı göster, ikonu gizle
    telText.style.display = 'inline';
    telIcon.style.display = 'none';
  });

  navbarCollapse.addEventListener('hide.bs.collapse', () => {
    // Menü kapanıyor → Yazıyı gizle, ikonu göster
    telText.style.display = 'none';
    telIcon.style.display = 'inline';
  });

  // Sayfa yüklendiğinde: eğer mobil görünümdeyse yazı gizli başlasın
  window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 992) {
      telText.style.display = 'none';
      telIcon.style.display = 'inline';
    }
  });

