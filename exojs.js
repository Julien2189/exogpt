
/*
//exo 1
const utilisateur = {
    prenom:"julien" , 
    age: 39, 
    email:"julien@email.com" ,
    connect:true 
}

console.log(utilisateur) ;

//exo2 

let compteBancaire = {
    titulaire: "julien" , 
    solde:200 , 

    depose: function(montant) {
        this.solde += Number(montant) ;
        return this.solde ;
    },
    retire: function(montant) {
        this.solde -= Number(montant) 
            return this.solde ;
         
    },
    afficherSolde: function() {
        console.log(this.solde) ; 
    }

}


compteBancaire.depose(200) ;
compteBancaire.afficherSolde();
compteBancaire.retire(50) ; 
compteBancaire.afficherSolde() ;
compteBancaire.retire(300) ;
compteBancaire.afficherSolde() ;

const produits = [
  { nom: "PC", prix: 900, stock: 4 },
  { nom: "Souris", prix: 25, stock: 20 },
  { nom: "Clavier", prix: 70, stock: 10 },
  { nom: "Écran", prix: 180, stock: 6 }
];

//console.log(produits) ;
produits.sort((a, b)=> a.prix - b.prix) ;
let total = 0 ;
let produitChere = [] ;
let lepluschere= produits[produits.length - 1] ; 


//console.log("lepluschere est ="  , lepluschere) ;
for(let i =0 ; i <produits.length ; i++){
    console.log(produits[i]) ;
   
   total += produits[i].prix * produits[i].stock ; 
    if((produits[i].prix < 100)) {
        continue ; 
    }else {
      //  console.log(produits[i]) ;

        produitChere.push(produits[i]) ;
    }
    


}

console.log("stock total = " , total , "euros") ;
console.log('produit chere =' ,produitChere) ;
console.log(lepluschere) ;

//exo 4
class Produits {
    nom ; 
    prix ;
    stock ; 


    constructor(nom , prix ,stock) {
        this.nom = nom  ; 
        this.prix = prix ;
        this.stock = stock ;
    }

    afficherInfo(){
        console.log(`${this.nom} coute ${this.prix} et il en reste ${this.stock} en stock.`);
    } 
}

const p1 = new Produits('pc' , 900 , 4) ;
p1.afficherInfo() ;

//exo 5
class Panier  extends Produits{ 
    produits = [] ;
    

    ajouterProduit(produit) {
        this.produits.push(produit);
        //console.log(this.produits.length);
    }

    calculTotal(){
        let total = 0 ;
        this.produits.forEach(element => {
            console.log(`${element.nom} - ${element.prix}  €`) ;
            total += element.prix;
        });
        return `total :${total}` ;
        }
    
     
}

const panier = new Panier() ;
panier.ajouterProduit({nom : "pc" , prix:900}) ;
panier.ajouterProduit({nom:"souris" ,prix: 25 });
console.log(panier.calculTotal()) ;

//exo6 

const chargeDonnees = new Promise((resolve , reject)=>{
    const ok = true ;
    setTimeout(()=>{
        if(ok ===true) {
            resolve("donnees recues") ;
        }
        else{
            reject(new Error("L'opération a échoué."));
        }
    },2000)
}) ;

chargeDonnees.then((message) =>{
    console.log(message) ;
}) 
.catch((erreur) =>{
    console.error(erreur) ;
});


//exo 7
const serveurDisponible =true ; 

const connexion = new Promise(( resolve , reject)=>{
    setTimeout(() => {
        if(serveurDisponible === true) {
            resolve('Connexion reussie') ;
        }
        else{
            reject(new Error('Erreur serveur')) ;
        }
    }, 2000);
});

connexion
.then((message)=>console.log(message))
.catch((erreur)=>console.log(erreur)) ;
 

//exo 8 

function attendre(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve('fin de l attente') ;
        } ,2000) ;
    });
};

async function lancer(){
   const message =  await attendre() ;
    //console.log(message);
    return message ;
    

   
}
lancer()
.then((message)=>console.log(message));

//exo 9
let serveur = true ;

function connexionUtilisateur(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(serveur === true){
                resolve('utilisateur connecter') ;
            }
            else{
                reject(new Error('connexion refuser')) ;
            }
        },2000) ;

    }) ;
}
async function connexion(){
    try {
        const resultat = await connexionUtilisateur() ;
        console.log(resultat) ;
    }
    catch(erreur) {
        console.log(erreur) ;
    }
}

connexion();
*/


//exo 10 
let serveur = true ; 
function simulationApi(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(serveur === true) {
                resolve([
  { id: 1, nom: "PC", prix: 900 },
  { id: 2, nom: "Souris", prix: 25 },
  { id: 3, nom: "Clavier", prix: 70 }
            ])
            }
else{
    reject(new Error("erreur recuperation donnees ")) ;
}
            },1000)
        })
    }
async function getProduits() {
    console.log('chargement des produits ... ') ;
    try{
        const response = await simulationApi() ;
        console.log(response) ;
        return response ;
    }
    catch(erreur){
        console.error('erreur') ;
    }
}

let produits = await getProduits() ;

let total = 0 ;
produits.forEach(element => {
       console.log(`${element.nom} - ${element.prix}`) ;
       total += element.prix ;
});

console.log(`total : ${total}`) ; 
