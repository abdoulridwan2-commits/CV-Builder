const nomInput = document.getElementById("nom");
const previewNom = document.getElementById("previewNom");

nomInput.addEventListener("input", function () {
  previewNom.textContent = nomInput.value || "Votre nom";
});

const emailInput = document.getElementById("email");
const previewEmail = document.getElementById("previewEmail");

emailInput.addEventListener("input", function () {
  previewEmail.textContent = emailInput.value || "Votre email";
});

const telephoneInput = document.getElementById("telephone");
const previewTelephone = document.getElementById("previewTelephone");

telephoneInput.addEventListener("input", function () {
  previewTelephone.textContent = telephoneInput.value || "Votre téléphone";
});

const profilInput = document.getElementById("profil");
const previewProfil = document.getElementById("previewProfil");

profilInput.addEventListener("input", function () {
  previewProfil.textContent = profilInput.value || "Votre profil professionnel";
});
