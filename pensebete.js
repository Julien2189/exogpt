/*
====================================================
PENSE-BÊTE JAVASCRIPT
TRI DES TABLEAUX D'OBJETS AVEC .sort()
====================================================

Rappel important :

.sort() modifie le tableau original.

Pour éviter ça, on fait une copie :

const copie = [...tableau];

====================================================
*/

const produits = [
  { nom: "Clavier", prix: 49, stock: 12, categorie: "informatique" },
  { nom: "Souris", prix: 25, stock: 30, categorie: "informatique" },
  { nom: "Écran", prix: 199, stock: 5, categorie: "informatique" },
  { nom: "Chaise", prix: 89, stock: 8, categorie: "bureau" },
  { nom: "Bureau", prix: 249, stock: 3, categorie: "bureau" },
  { nom: "Lampe", prix: 35, stock: 15, categorie: "bureau" }
];

/*
====================================================
EXERCICE 1
Trier par prix croissant
Du moins cher au plus cher
====================================================
*/

const prixCroissant = [...produits].sort((a, b) => a.prix - b.prix);

console.log("Prix croissant :", prixCroissant);

/*
Méthode à retenir :

a.prix - b.prix

Nombre croissant :
a - b
*/


/*
====================================================
EXERCICE 2
Trier par prix décroissant
Du plus cher au moins cher
====================================================
*/

const prixDecroissant = [...produits].sort((a, b) => b.prix - a.prix);

console.log("Prix décroissant :", prixDecroissant);

/*
Méthode à retenir :

b.prix - a.prix

Nombre décroissant :
b - a
*/


/*
====================================================
EXERCICE 3
Trier par stock croissant
Du plus petit stock au plus grand stock
====================================================
*/

const stockCroissant = [...produits].sort((a, b) => a.stock - b.stock);

console.log("Stock croissant :", stockCroissant);

/*
Méthode à retenir :

a.stock - b.stock
*/


/*
====================================================
EXERCICE 4
Trier par stock décroissant
Du plus grand stock au plus petit stock
====================================================
*/

const stockDecroissant = [...produits].sort((a, b) => b.stock - a.stock);

console.log("Stock décroissant :", stockDecroissant);

/*
Méthode à retenir :

b.stock - a.stock
*/


/*
====================================================
EXERCICE 5
Trier par nom inverse
Ordre alphabétique inversé : Z vers A
====================================================
*/

const nomInverse = [...produits].sort((a, b) => b.nom.localeCompare(a.nom));

console.log("Nom inverse Z-A :", nomInverse);

/*
Méthode à retenir :

b.nom.localeCompare(a.nom)

Texte Z vers A
*/


/*
====================================================
BONUS UTILE
Trier par nom alphabétique
Ordre A vers Z
====================================================
*/

const nomAlphabetique = [...produits].sort((a, b) => a.nom.localeCompare(b.nom));

console.log("Nom alphabétique A-Z :", nomAlphabetique);

/*
Méthode à retenir :

a.nom.localeCompare(b.nom)

Texte A vers Z
*/


/*
====================================================
EXERCICE 6
Filtrer les produits informatiques
Puis les trier par prix croissant
====================================================
*/

// Méthode avec forEach, if et push

let informatique = [];

produits.forEach(produit => {
  if (produit.categorie === "informatique") {
    informatique.push(produit);
  }
});

informatique.sort((a, b) => a.prix - b.prix);

console.log("Informatique trié par prix :", informatique);

/*
Méthode à retenir :

1. Créer un tableau vide
2. Parcourir le tableau avec forEach()
3. Vérifier une condition avec if
4. Ajouter avec push()
5. Trier avec sort()
*/


// Même exercice avec filter

const informatiqueAvecFilter = produits
  .filter(produit => produit.categorie === "informatique")
  .sort((a, b) => a.prix - b.prix);

console.log("Informatique avec filter :", informatiqueAvecFilter);

/*
Méthode à retenir :

.filter() garde uniquement les éléments qui respectent une condition.
*/


/*
====================================================
EXERCICE 7
Trier par valeur totale du stock
Formule : prix * stock
====================================================
*/

// Du plus petit total au plus grand total

const valeurTotaleCroissante = [...produits].sort((a, b) => {
  return a.prix * a.stock - b.prix * b.stock;
});

console.log("Valeur totale croissante :", valeurTotaleCroissante);

/*
Exemples :

Lampe   : 35 * 15  = 525
Clavier : 49 * 12  = 588
Chaise  : 89 * 8   = 712
Bureau  : 249 * 3  = 747
Souris  : 25 * 30  = 750
Écran   : 199 * 5  = 995
*/


// Du plus grand total au plus petit total

const valeurTotaleDecroissante = [...produits].sort((a, b) => {
  return b.prix * b.stock - a.prix * a.stock;
});

console.log("Valeur totale décroissante :", valeurTotaleDecroissante);

/*
Méthode à retenir :

Croissant :
a.prix * a.stock - b.prix * b.stock

Décroissant :
b.prix * b.stock - a.prix * a.stock
*/


/*
====================================================
EXERCICE 8
Afficher le produit le plus cher
====================================================
*/

const produitLePlusCher = [...produits].sort((a, b) => b.prix - a.prix)[0];

console.log("Produit le plus cher :", produitLePlusCher);

/*
Méthode à retenir :

1. Trier par prix décroissant
2. Récupérer le premier élément avec [0]
*/


/*
====================================================
EXERCICE 9
Ne pas modifier le tableau original
====================================================
*/

const produitsTriesSansModifierOriginal = [...produits].sort((a, b) => b.prix - a.prix);

console.log("Tableau original :", produits);
console.log("Tableau trié :", produitsTriesSansModifierOriginal);

/*
Méthode à retenir :

const copie = [...produits];

ou directement :

const copieTriee = [...produits].sort(...);

Pourquoi ?
Parce que sort() modifie le tableau original.
*/


/*
====================================================
EXERCICE 10
Trier un tableau de dépenses
====================================================
*/

const depenses = [
  { nom: "Courses", montant: 80, date: "2026-04-10" },
  { nom: "Essence", montant: 50, date: "2026-04-08" },
  { nom: "Internet", montant: 30, date: "2026-04-01" },
  { nom: "Restaurant", montant: 45, date: "2026-04-12" }
];

/*
------------------------------
1. Trier par montant croissant
------------------------------
*/

const montantCroissant = [...depenses].sort((a, b) => a.montant - b.montant);

console.log("Montant croissant :", montantCroissant);

/*
Résultat :
Internet    30
Restaurant 45
Essence    50
Courses    80
*/


/*
------------------------------
2. Trier par montant décroissant
------------------------------
*/

const montantDecroissant = [...depenses].sort((a, b) => b.montant - a.montant);

console.log("Montant décroissant :", montantDecroissant);

/*
Résultat :
Courses    80
Essence    50
Restaurant 45
Internet   30
*/


/*
------------------------------
3. Trier par date ancienne vers récente
------------------------------
*/

const dateAncienneVersRecente = [...depenses].sort((a, b) => {
  return new Date(a.date) - new Date(b.date);
});

console.log("Date ancienne vers récente :", dateAncienneVersRecente);

/*
Résultat :
Internet   2026-04-01
Essence    2026-04-08
Courses    2026-04-10
Restaurant 2026-04-12
*/


/*
------------------------------
4. Trier par date récente vers ancienne
------------------------------
*/

const dateRecenteVersAncienne = [...depenses].sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

console.log("Date récente vers ancienne :", dateRecenteVersAncienne);

/*
Résultat :
Restaurant 2026-04-12
Courses    2026-04-10
Essence    2026-04-08
Internet   2026-04-01
*/


/*
------------------------------
5. Trier par nom alphabétique
------------------------------
*/

const depensesNomAlphabetique = [...depenses].sort((a, b) => {
  return a.nom.localeCompare(b.nom);
});

console.log("Dépenses par nom A-Z :", depensesNomAlphabetique);

/*
Résultat :
Courses
Essence
Internet
Restaurant
*/


/*
====================================================
RÉSUMÉ DES MÉTHODES À MÉMORISER
====================================================

Nombre croissant :
tableau.sort((a, b) => a.nombre - b.nombre);

Nombre décroissant :
tableau.sort((a, b) => b.nombre - a.nombre);

Texte A vers Z :
tableau.sort((a, b) => a.nom.localeCompare(b.nom));

Texte Z vers A :
tableau.sort((a, b) => b.nom.localeCompare(a.nom));

Date ancienne vers récente :
tableau.sort((a, b) => new Date(a.date) - new Date(b.date));

Date récente vers ancienne :
tableau.sort((a, b) => new Date(b.date) - new Date(a.date));

Filtrer puis trier :
tableau
  .filter(element => element.categorie === "informatique")
  .sort((a, b) => a.prix - b.prix);

Copier avant de trier :
const copieTriee = [...tableau].sort((a, b) => a.prix - b.prix);

Récupérer le premier élément après un tri :
const premier = tableauTrie[0];

====================================================
*/