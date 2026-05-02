const titre = document.getElementById('titre'); 
titre.textContent = "Nouveau titre";

const nomDepense = document.getElementById('nomDepense');
const montantDepense = document.getElementById('montantDepense');

const btn = document.getElementById('ajouterDepense');

const messageErreur = document.getElementById('messageErreur');
const listeDepenses = document.getElementById('listeDepenses'); 
const totalDepenses = document.getElementById('totalDepenses');

let total = 0;

btn.addEventListener('click', () => {
   let nom = nomDepense.value.trim();
   let montant = montantDepense.value.trim();

   if (nom === "" || montant === "") {
      alert('Saisie incorrecte'); 
      return; 
   }

   montant = Number(montant);

   const li = document.createElement('li');
   const supprimer = document.createElement('button'); 

   supprimer.textContent = 'X';

   li.textContent = `${nom} - ${montant} € `;
   li.appendChild(supprimer);

   listeDepenses.appendChild(li);

   total += montant;
   totalDepenses.textContent = total;

   supprimer.addEventListener('click', () => {
      li.remove();

      total -= montant;
      totalDepenses.textContent = total;
   });

   montantDepense.value = ""; 
   nomDepense.value = ""; 
});