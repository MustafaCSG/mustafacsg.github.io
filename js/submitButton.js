var btn = document.getElementById("submit-btn");
var btnText = document.getElementById("submit-btnText");

btn.onclick = function() {
  btnText.innerHTML = "İletildi";
  btn.classList.add("submitactive");
}


  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submit-btn');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  function checkFormValidity() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const isValid = name !== "" && email !== "" && message !== "" && emailInput.checkValidity();
    submitBtn.disabled = !isValid;
  }

  // Her input değiştiğinde kontrol et
  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('input', checkFormValidity);
  });

