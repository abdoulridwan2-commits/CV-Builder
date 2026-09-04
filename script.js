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
  /*
      Récupérer les compétences.

      Exemple :

      HTML, CSS, JavaScript

      devient :

      ["HTML", " CSS", " JavaScript"]
    */

  const competences = competencesInput.value.split(",");

  /*
      Vider l'ancien aperçu.
    */

  previewCompetences.innerHTML = "";

  /*
      Parcourir les compétences.
    */

  competences.forEach(function (competence) {
    const texte = competence.trim();

    /*
          Vérifier que la compétence
          n'est pas vide.
        */

    if (texte !== "") {
      /*
            Créer le badge.
          */

      const badge = document.createElement("span");

      /*
            Ajouter le texte.
          */

      badge.textContent = texte;

      /*
            Ajouter la classe CSS.
          */

      badge.classList.add("badge");

      /*
            Ajouter le badge au CV.
          */

      previewCompetences.appendChild(badge);
    }
  });

  /*
      Si aucune compétence
      n'est renseignée.
    */

  if (previewCompetences.innerHTML === "") {
    previewCompetences.innerHTML = `

        <span class="texte-vide">
          Vos compétences
        </span>

      `;
  }
});

// ==============================
// EXPÉRIENCES
// ==============================

const experiencesContainer = document.getElementById("experiencesContainer");

const ajouterExperience = document.getElementById("ajouterExperience");

const previewExperience = document.getElementById("previewExperience");

// ==============================
// AFFICHER LES EXPÉRIENCES
// ==============================

function afficherExperiences() {
  /*
    Récupérer toutes les expériences.
  */

  const experiences = document.querySelectorAll(".experience-form");

  /*
    Nettoyer l'ancien aperçu.
  */

  previewExperience.innerHTML = "";

  /*
    Parcourir les expériences.
  */

  experiences.forEach(function (experience) {
    /*
        Récupérer le poste.
      */

    const poste = experience.querySelector(".poste").value.trim();

    /*
        Récupérer l'entreprise.
      */

    const entreprise = experience.querySelector(".entreprise").value.trim();

    /*
        Récupérer la période.
      */

    const periode = experience.querySelector(".periode").value.trim();

    /*
        Récupérer la description.
      */

    const description = experience.querySelector(".description").value.trim();

    /*
        Si tout est vide,
        on ignore cette expérience.
      */

    if (
      poste === "" &&
      entreprise === "" &&
      periode === "" &&
      description === ""
    ) {
      return;
    }

    /*
        Créer le bloc HTML.
      */

    const experienceElement = document.createElement("div");

    /*
        Ajouter la classe CSS.
      */

    experienceElement.classList.add("experience-preview");

    /*
        Ajouter les informations.
      */

    experienceElement.innerHTML = `

        <strong>
          ${poste || "Poste occupé"}
        </strong>

        <div class="entreprise-preview">
          ${entreprise || "Entreprise / Organisation"}
        </div>

        <div class="periode-preview">
          ${periode || "Période"}
        </div>

        <div class="description-preview">
          ${description || "Description de l'expérience"}
        </div>

      `;

    /*
        Ajouter au CV.
      */

    previewExperience.appendChild(experienceElement);
  });

  /*
    Texte par défaut.
  */

  if (previewExperience.innerHTML === "") {
    previewExperience.innerHTML = `

      <p class="texte-vide">
        Votre expérience professionnelle
      </p>

    `;
  }
}

// ==============================
// ACTIVER UNE EXPÉRIENCE
// ==============================

function activerExperience(experienceForm) {
  /*
    Récupérer les champs.
  */

  const champs = experienceForm.querySelectorAll("input, textarea");

  /*
    Ajouter l'événement input
    à chaque champ.
  */

  champs.forEach(function (champ) {
    champ.addEventListener("input", afficherExperiences);
  });
}

// ==============================
// PREMIÈRE EXPÉRIENCE
// ==============================

const premiereExperience = document.querySelector(".experience-form");

activerExperience(premiereExperience);

// ==============================
// AJOUTER UNE EXPÉRIENCE
// ==============================

ajouterExperience.addEventListener("click", function () {
  /*
      Créer un nouveau div.
    */

  const nouvelleExperience = document.createElement("div");

  /*
      Ajouter la classe.
    */

  nouvelleExperience.classList.add("experience-form");

  /*
      Créer les champs.
    */

  nouvelleExperience.innerHTML = `

      <label>
        Poste occupé
      </label>

      <input
        type="text"
        class="poste"
        placeholder="Ex : Assistant développeur"
      />


      <label>
        Entreprise / Organisation
      </label>

      <input
        type="text"
        class="entreprise"
        placeholder="Ex : XYZ Company"
      />


      <label>
        Période
      </label>

      <input
        type="text"
        class="periode"
        placeholder="Ex : 2024 - 2025"
      />


      <label>
        Description
      </label>

      <textarea
        class="description"
        placeholder="Décrivez vos missions et réalisations..."
      ></textarea>

    `;

  /*
      Ajouter l'expérience
      au formulaire.
    */

  experiencesContainer.appendChild(nouvelleExperience);

  /*
      Activer les événements.
    */

  activerExperience(nouvelleExperience);
});

// ==============================
// PHOTO
// ==============================

const photoInput = document.getElementById("photo");

const previewPhoto = document.getElementById("previewPhoto");

photoInput.addEventListener("change", function () {
  /*
      Récupérer le fichier.
    */

  const fichier = photoInput.files[0];

  /*
      Vérifier qu'une photo
      a été sélectionnée.
    */

  if (fichier) {
    /*
        Créer une URL temporaire
        pour afficher la photo.
      */

    previewPhoto.src = URL.createObjectURL(fichier);
  }
});

// ==============================
// GÉNÉRER LE CV
// ==============================

const boutonGenerer = document.getElementById("genererCV");

boutonGenerer.addEventListener("click", function () {
  /*
      Vérifier le nom.
    */

  if (nomInput.value.trim() === "") {
    alert("Veuillez entrer votre nom.");

    nomInput.focus();

    return;
  }

  /*
      Vérifier l'email.
    */

  if (emailInput.value.trim() === "") {
    alert("Veuillez entrer votre email.");

    emailInput.focus();

    return;
  }

  /*
      Message de confirmation.
    */

  alert("Votre CV a été généré avec succès !");
});

// ==============================
// PDF
// ==============================

const boutonImprimer = document.getElementById("imprimerCV");

boutonImprimer.addEventListener("click", function () {
  /*
      Ouvrir la fenêtre
      d'impression du navigateur.
    */

  window.print();
});

// ==============================
// RÉINITIALISER
// ==============================

const boutonReset = document.getElementById("resetCV");

boutonReset.addEventListener("click", function () {
  /*
      Vider les champs.
    */

  document
    .querySelectorAll(".formulaire input:not(#photo), .formulaire textarea")
    .forEach(function (champ) {
      champ.value = "";
    });

  /*
      Réinitialiser la photo.
    */

  photoInput.value = "";

  /*
      Récupérer les expériences.
    */

  const experiences = document.querySelectorAll(".experience-form");

  /*
      Garder uniquement
      la première expérience.
    */

  experiences.forEach(function (experience, index) {
    if (index > 0) {
      experience.remove();
    }
  });

  /*
      Réinitialiser le nom.
    */

  previewNom.textContent = "Votre nom";

  /*
      Réinitialiser l'email.
    */

  previewEmail.textContent = "Votre email";

  /*
      Réinitialiser le téléphone.
    */

  previewTelephone.textContent = "Votre téléphone";

  /*
      Réinitialiser le profil.
    */

  previewProfil.textContent = "Votre profil professionnel";

  /*
      Réinitialiser la formation.
    */

  previewFormation.textContent = "Votre formation";

  /*
      Réinitialiser l'établissement.
    */

  previewEcole.textContent = "Votre établissement";

  /*
      Réinitialiser les compétences.
    */

  previewCompetences.innerHTML = `

      <span class="texte-vide">
        Vos compétences
      </span>

    `;

  /*
      Réinitialiser les expériences.
    */

  previewExperience.innerHTML = `

      <p class="texte-vide">
        Votre expérience professionnelle
      </p>

    `;

  /*
      Supprimer la photo.
    */

  previewPhoto.src = "";
});
