// ==============================
// NOM
// ==============================

const nomInput = document.getElementById("nom");
const previewNom = document.getElementById("previewNom");

nomInput.addEventListener("input", function () {
  previewNom.textContent = nomInput.value || "Votre nom";
});

// ==============================
// EMAIL
// ==============================

const emailInput = document.getElementById("email");
const previewEmail = document.getElementById("previewEmail");

emailInput.addEventListener("input", function () {
  previewEmail.textContent = emailInput.value || "Votre email";
});

// ==============================
// TÉLÉPHONE
// ==============================

const telephoneInput = document.getElementById("telephone");
const previewTelephone = document.getElementById("previewTelephone");

telephoneInput.addEventListener("input", function () {
  previewTelephone.textContent = telephoneInput.value || "Votre téléphone";
});

// ==============================
// PROFIL
// ==============================

const profilInput = document.getElementById("profil");
const previewProfil = document.getElementById("previewProfil");

profilInput.addEventListener("input", function () {
  previewProfil.textContent = profilInput.value || "Votre profil professionnel";
});

// ==============================
// FORMATION
// ==============================

const formationInput = document.getElementById("formation");
const previewFormation = document.getElementById("previewFormation");

formationInput.addEventListener("input", function () {
  previewFormation.textContent = formationInput.value || "Votre formation";
});

// ==============================
// ÉTABLISSEMENT
// ==============================

const ecoleInput = document.getElementById("ecole");
const previewEcole = document.getElementById("previewEcole");

ecoleInput.addEventListener("input", function () {
  previewEcole.textContent = ecoleInput.value || "Votre établissement";
});

// ==============================
// COMPÉTENCES
// ==============================

const competencesInput = document.getElementById("competences");

const previewCompetences = document.getElementById("previewCompetences");

competencesInput.addEventListener("input", function () {
  const competences = competencesInput.value.split(",");

  previewCompetences.innerHTML = "";

  competences.forEach(function (competence) {
    const texte = competence.trim();

    if (texte !== "") {
      const badge = document.createElement("span");

      badge.textContent = texte;

      badge.classList.add("badge");

      previewCompetences.appendChild(badge);
    }
  });

  if (previewCompetences.innerHTML === "") {
    previewCompetences.textContent = "Vos compétences";
  }
});

// ==============================
// EXPÉRIENCES PROFESSIONNELLES
// ==============================

const experiencesContainer = document.getElementById("experiencesContainer");

const ajouterExperience = document.getElementById("ajouterExperience");

const previewExperience = document.getElementById("previewExperience");

// Fonction qui met à jour l'aperçu
function afficherExperiences() {
  const experiences = document.querySelectorAll(".experience-form");

  previewExperience.innerHTML = "";

  experiences.forEach(function (experience, index) {
    const poste = experience.querySelector(".poste").value.trim();

    const entreprise = experience.querySelector(".entreprise").value.trim();

    const periode = experience.querySelector(".periode").value.trim();

    const description = experience.querySelector(".description").value.trim();

    // Si l'expérience est complètement vide
    if (
      poste === "" &&
      entreprise === "" &&
      periode === "" &&
      description === ""
    ) {
      return;
    }

    const experienceElement = document.createElement("div");

    experienceElement.classList.add("experience-preview");

    experienceElement.innerHTML = `

      <strong>${poste || "Poste occupé"}</strong>

      <br>

      ${entreprise || "Entreprise / Organisation"}

      <br>

      ${periode || "Période"}

      <br><br>

      ${description || "Description de l'expérience"}

      <br><br>

    `;

    previewExperience.appendChild(experienceElement);
  });

  // Si aucune expérience n'est remplie
  if (previewExperience.innerHTML === "") {
    previewExperience.textContent = "Votre expérience professionnelle";
  }
}

// Écouter les changements dans les expériences
function activerExperience(experienceForm) {
  const champs = experienceForm.querySelectorAll("input, textarea");

  champs.forEach(function (champ) {
    champ.addEventListener("input", afficherExperiences);
  });
}

// Activer la première expérience
const premiereExperience = document.querySelector(".experience-form");

activerExperience(premiereExperience);

// ==============================
// AJOUTER UNE NOUVELLE EXPÉRIENCE
// ==============================

ajouterExperience.addEventListener("click", function () {
  const nouvelleExperience = document.createElement("div");

  nouvelleExperience.classList.add("experience-form");

  nouvelleExperience.innerHTML = `

      <hr>

      <h4>Nouvelle expérience</h4>

      <label>Poste occupé</label>

      <input
        type="text"
        class="poste"
        placeholder="Ex : Assistant développeur"
      />


      <label>Entreprise / Organisation</label>

      <input
        type="text"
        class="entreprise"
        placeholder="Ex : XYZ Company"
      />


      <label>Période</label>

      <input
        type="text"
        class="periode"
        placeholder="Ex : 2024 - 2025"
      />


      <label>Description</label>

      <textarea
        class="description"
        placeholder="Décrivez vos missions et réalisations..."
      ></textarea>

    `;

  experiencesContainer.appendChild(nouvelleExperience);

  // Activer les champs de la nouvelle expérience
  activerExperience(nouvelleExperience);
});

// ==============================
// PHOTO
// ==============================

// ==============================
// PHOTO
// ==============================

const photoInput = document.getElementById("photo");

const previewPhoto = document.getElementById("previewPhoto");

photoInput.addEventListener("change", function () {
  const fichier = photoInput.files[0];

  if (fichier) {
    previewPhoto.src = URL.createObjectURL(fichier);

    previewPhoto.style.display = "block";
  }
});

// ==============================
// GÉNÉRER LE CV
// ==============================

const boutonGenerer = document.querySelector(
  ".formulaire button:not(#ajouterExperience):not(#imprimerCV):not(#resetCV)",
);

boutonGenerer.addEventListener("click", function () {
  if (nomInput.value.trim() === "") {
    alert("Veuillez entrer votre nom.");

    nomInput.focus();

    return;
  }

  if (emailInput.value.trim() === "") {
    alert("Veuillez entrer votre email.");

    emailInput.focus();

    return;
  }

  alert("Votre CV a été généré avec succès !");
});

// ==============================
// IMPRIMER / PDF
// ==============================

const boutonImprimer = document.getElementById("imprimerCV");

boutonImprimer.addEventListener("click", function () {
  window.print();
});

// ==============================
// RÉINITIALISER
// ==============================

const boutonReset = document.getElementById("resetCV");

boutonReset.addEventListener("click", function () {
  // Vider tous les champs
  document
    .querySelectorAll(".formulaire input, .formulaire textarea")
    .forEach(function (champ) {
      champ.value = "";
    });

  // Supprimer les expériences supplémentaires
  const experiences = document.querySelectorAll(".experience-form");

  experiences.forEach(function (experience, index) {
    if (index > 0) {
      experience.remove();
    }
  });

  // Réinitialiser l'aperçu
  previewNom.textContent = "Votre nom";

  previewEmail.textContent = "Votre email";

  previewTelephone.textContent = "Votre téléphone";

  previewProfil.textContent = "Votre profil professionnel";

  previewFormation.textContent = "Votre formation";

  previewEcole.textContent = "Votre établissement";

  previewCompetences.textContent = "Vos compétences";

  previewExperience.textContent = "Votre expérience professionnelle";

  previewPhoto.src = "";
  previewPhoto.style.display = "none";
});
