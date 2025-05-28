const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mustafa CSG",
    "url": "https://mustafacsg.com",
    "sameAs": [
      "https://github.com/mustafacsg",
      "https://linkedin.com/in/mustafacsg"
    ],
    "jobTitle": "Web Developer & Arduino Enthusiast",
    "description": "Bilgisayar mühendisliği öğrencisi olarak teknolojiyle iç içe projeler üretiyorum."
  };

  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.textContent = JSON.stringify(structuredData);
  document.head.appendChild(scriptTag);