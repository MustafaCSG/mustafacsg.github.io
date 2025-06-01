export const blogPosts = [
  {
    slug: "yeni-sitem",
    title: "Yeni Sitem 🎉 ",
    date: "01 Haziran 2024",
    image: "images/projects/grafiktasarim-01.jpg",
        image: "images/projects/imza-02-01.jpg", 
    content: `
      <p>Kişisel web siteme bir blog bölümü eklemeye karar verdiğimde, sadece birkaç sabit HTML içeriği göstermek yerine <strong>dinamik olarak yüklenen ve yönetilebilen</strong> bir sistem oluşturmak istedim. Bu süreçte hem yazılım becerilerimi test etme fırsatı buldum hem de gerçek dünyada karşılaşılabilecek birçok hatayla birebir mücadele ettim. Bu yazıda yaşadığım teknik zorlukları, çözüm yollarımı ve neler öğrendiğimi paylaşmak istiyorum.</p>
      <h4>Başlangıç: Blog Verilerimi Yapılandırmak</h4>
      <p>İlk olarak her blog yazısını JS tabanlı bir yapı olan blogData.js dosyasında tutmaya karar verdim. Her yazının başlığı, tarihi, içeriği, etiketleri ve yorumları bu dosyada JSON formatında tanımlanıyor. Bu yöntem sayesinde blog içeriklerimi kod içinde merkezi bir yerde tutmuş oldum.</p>
      <h4>Sayfa Navigasyonu ve UX Sorunları</h4>
      <p>Popüler yazılar bölümünü dinamik olarak oluşturmak istedim. Bu kısımda blog verilerini tarihe göre sıralayıp en güncel olanları göstermek gerekiyordu. Bu işlem sırasında <strong>blogPosts is not defined</strong> gibi hatalar aldım çünkü JS kodu, veri henüz yüklenmeden çalışmaya başlıyordu.
Bunu çözmek için DOMContentLoaded olayında ve veri import işlemi tamamlandıktan sonra popüler yazıları oluşturan fonksiyonu çağırarak asenkron sorunların önüne geçtim.
Ayrıca kullanıcı popüler bir yazıya tıkladığında sayfa aşağıda kalıyor ve içerik görünmüyordu. Bunu çözmek için hash değişiminden sonra küçük bir gecikmeyle sayfayı üste kaydıran bir kod yazdım:</p>
    <p>Bu projeyi geliştirirken sadece <strong>HTML/CSS</strong> değil, <strong>modüler JavaScript, dinamik veri yükleme, localStorage, Supabase REST API kullanımı, fetch hataları ve CORS politikaları</strong> hakkında da çok şey öğrendim. Özellikle tarayıcıların modül yönetimi ve veritabanı iletişiminde güvenlik politikaları gibi konulara daha fazla hakim oldum.
Ayrıca kullanıcı deneyimini düşünerek "scroll to top", yorum sayacı, etiket filtresi gibi detayları da projemde uygulamayı başardım.</p>
      <h4>Son Söz</h4>
      <p>Son Söz
Dinamik blog sistemi geliştirmek başlangıçta karmaşık görünebilir ama sabırla, hata ayıklayarak ve çözüm odaklı yaklaşımla harika sonuçlara ulaşmak mümkün. Umarım bu süreç, benzer projeler geliştirmek isteyenlere ilham verir.</p>
      `,
    tags: [
      '<span class="badge bg-success me-1">HTML</span>',
      '<span class="badge bg-primary me-1">CSS</span>',
      '<span class="badge bg-success me-1">JavaScript</span>',
      '<span class="badge bg-primary me-1">Supabase</span>',
      '<span class="badge bg-success">React</span>'
    ],
    comments: [
      { name: "", text: "", date: "" }
    ]

  },
  {
    slug: "deneme-yazisi-01",
    title: "Deneme Yazısı 01",
    date: "1 Mayıs 2024",
    content: `
      <p>Bu Bir Deneme Yazısıdır.</p>
      <p>DENEME, <strong>deneme</strong></p>
      <h6>Deneme</h6>
    `,
    tags: [
      '<span class="badge bg-info">Deneme</span>'
    ],
     comments: [
      { name: "", text: "", date: "" }
    ]
  }



];
