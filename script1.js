const titre = document.getElementById('titre') ; 
titre.textContent = "nouveau titre"

const nomDepense = document.getElementById('nomDepense') ;
const montantDepense = document.getElementById('montantDepense') ;

const btn = document.getElementById('ajouterDepense') ;

const messageErreur = document.getElementById('messageErreur') ;
const listeDepenses = document.getElementById('listeDepenses') ; 
const totalDepenses = document.getElementById('totalDepenses') ;
let total = [] ; 

//button event
btn.addEventListener('click' , () =>{
   let  nom = nomDepense.value.trim() ;
   let  montant = montantDepense.value.trim() ;
   //verification saisi
   if(nom === "" || montant === "") {
      alert('saisi incorrect') ; 
      return ; 
   }
   
   //affichage console 
   // console.log(total) ;
   console.log(nom) ;
   montant = Number(montant) ;
       total.push(montant) ;

   //console.log(typeof montant) ;

// creation d element li et button
   const li = document.createElement('li') ;
   const supprimer = document.createElement('button') ; 
   supprimer.textContent = 'X' ;
   li.textContent = `${nom} -${montant} €` ;
   li.appendChild(supprimer) ;

   listeDepenses.appendChild(li) ;

  let montantTotal = calculTotal(total) ;
  totalDepenses.textContent = montantTotal ;
      supprimer.addEventListener('click' , () =>{
         li.remove() ;
      })
   montantDepense.value = "" ; 
   nomDepense.value = "" ; 

});

function calculTotal(total) {
      let montantTotal = 0 ;
      total.forEach(element => {
         // console.log(element) ;
          montantTotal  += element ;
      });
      console.log( montantTotal ) ;
      return montantTotal ; 
}
