
const titre = document.getElementById('titre');
titre.textContent = "Nouveau titre";

const nomDepense = document.getElementById('nomDepense');
const montantDepense = document.getElementById('montantDepense');
const btn = document.getElementById('ajouterDepense');
const messageErreur = document.getElementById('messageErreur');
const listeDepenses = document.getElementById('listeDepenses');
const totalDepenses = document.getElementById('totalDepenses');

let depenses = JSON.parse(localStorage.getItem('depenses')) || [];

function sauvegarder() {
   localStorage.setItem('depenses', JSON.stringify(depenses));
}

function calculTotal() {
   let total = 0;

   depenses.forEach(depense => {
      total += depense.montant;
   });

   return total;
}

function afficherDepenses() {
   listeDepenses.innerHTML = "";

   depenses.forEach((depense, index) => {
      const li = document.createElement('li');
      const supprimer = document.createElement('button');

      li.textContent = `${depense.nom} - ${depense.montant} € `;
      supprimer.textContent = 'X';

      li.appendChild(supprimer);
      listeDepenses.appendChild(li);

      supprimer.addEventListener('click', () => {
         depenses.splice(index, 1);
         sauvegarder();
         afficherDepenses();
      });
   });

   totalDepenses.textContent = calculTotal();
}

btn.addEventListener('click', () => {
   const nom = nomDepense.value.trim();
   const montant = montantDepense.value.trim();

   if (nom === "" || montant === "") {
      messageErreur.textContent = "Saisie incorrecte";
      return;
   }

   const nouvelleDepense = {
      nom: nom,
      montant: Number(montant)
   };

   depenses.push(nouvelleDepense);

   sauvegarder();
   afficherDepenses();

   nomDepense.value = "";
   montantDepense.value = "";
   messageErreur.textContent = "";

   nomDepense.focus();
});

afficherDepenses();
