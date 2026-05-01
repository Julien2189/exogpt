/*
const produits = [
  { nom: "Clavier", prix: 49, stock: 12, categorie: "informatique" },
  { nom: "Souris", prix: 25, stock: 30, categorie: "informatique" },
  { nom: "Écran", prix: 199, stock: 5, categorie: "informatique" },
  { nom: "Chaise", prix: 89, stock: 8, categorie: "bureau" },
  { nom: "Bureau", prix: 249, stock: 3, categorie: "bureau" },
  { nom: "Lampe", prix: 35, stock: 15, categorie: "bureau" }
];

const produitsTries = [...produits];  
produitsTries.sort((a, b) => b.prix - a.prix);
//console.log(produitsTries[0]);
console.log(produits) ;

console.log(produitsTries);
*/


const depenses = [
  { nom: "Courses", montant: 80, date: "2026-04-10" },
  { nom: "Essence", montant: 50, date: "2026-04-08" },
  { nom: "Internet", montant: 30, date: "2026-04-01" },
  { nom: "Restaurant", montant: 45, date: "2026-04-12" }
];

depenses.sort((a,b)=> a.montant - b.montant) ;
console.log(depenses) ;



depenses.sort((a,b)=> b.montant - a.montant) ;
console.log(depenses) ;

depenses.sort((a,b) => new Date(b.date) - new Date(a.date)) ;
console.log(depenses);

depenses.sort((a,b)=> new Date(a.date) - new Date(b.date)) ;
console.log(depenses);


depenses.sort((a,b) =>(a.nom).localeCompare(b.nom)) ;
console.log(depenses);
