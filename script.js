// NOM

const nomInput = document.getElementById("nom");
const previewNom = document.getElementById("previewNom");

nomInput.addEventListener("input", function () {
  previewNom.textContent = nomInput.value || "Votre nom";
});

// EMAIL

const emailInput = document.getElementById("email");
const previewEmail = document.getElementById("previewEmail");

emailInput.addEventListener("input", function () {
  previewEmail.textContent = emailInput.value || "Votre email";
});

// TÉLÉPHONE

const telephoneInput = document.getElementById("telephone");
const previewTelephone = document.getElementById("previewTelephone");

telephoneInput.addEventListener("input", function () {
  previewTelephone.textContent = telephoneInput.value || "Votre téléphone";
});

// PROFIL

const profilInput = document.getElementById("profil");
const previewProfil = document.getElementById("previewProfil");

profilInput.addEventListener("input", function () {
  previewProfil.textContent = profilInput.value || "Votre profil professionnel";
});

// FORMATION

const formationInput = document.getElementById("formation");
const previewFormation = document.getElementById("previewFormation");

formationInput.addEventListener("input", function () {
  previewFormation.textContent = formationInput.value || "Votre formation";
});

// ÉTABLISSEMENT

const ecoleInput = document.getElementById("ecole");
const previewEcole = document.getElementById("previewEcole");

ecoleInput.addEventListener("input", function () {
  previewEcole.textContent = ecoleInput.value || "Votre établissement";
});

// COMPÉTENCES

const competencesInput = document.getElementById("competences");
const previewCompetences = document.getElementById("previewCompetences");

competencesInput.addEventListener("input", function () {
  previewCompetences.textContent = competencesInput.value || "Vos compétences";
});

// EXPÉRIENCE

const experienceInput = document.getElementById("experience");
const previewExperience = document.getElementById("previewExperience");

experienceInput.addEventListener("input", function () {
  previewExperience.textContent =
    experienceInput.value || "Votre expérience professionnelle";
});
