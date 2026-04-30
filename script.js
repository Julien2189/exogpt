/*

const btn = document.getElementById('btn') ;
const message = document.getElementById('message') ; 

btn.addEventListener('click', ()=>{
    alert('bravo julien, tu as cliqué') ; 
}) ;

const input = document.getElementById('prenom') ; 

const valider = document.getElementById('valider') ;

const resultat = document.getElementById('resultat') ;

valider.addEventListener('click' , () =>{

    resultat.textContent= `Bonjour ${input.value}` ;
})

const nombre1 = document.getElementById('nombre1') ;
const nombre2 = document.getElementById('nombre2') ;

const calculer = document.getElementById('calculer') ;
const somme = document.getElementById('somme') ;

calculer.addEventListener('click' , () =>{
    const a = nombre1.value.trim(); 
    const b = nombre2.value.trim(); 
   if(a  === '' || b === '' ) {
    alert('remplir les champs  !')  ;
    return ;
   }
   const c = Number(a) ;
   const d = Number(b) ;
   const result = c  + d
    somme.textContent= result  ;
});

const rouge = document.getElementById('rouge') ;
const bleu = document.getElementById('bleu') ;
const texte = document.getElementById('texte') ;

rouge.addEventListener('click', ()=>{
    texte.style.color ="red" ;
});
bleu.addEventListener('click' , () =>{
    texte.style.color =("blue") ;
});
*/
const ajouter = document.getElementById('ajouter') ;
const liste = document.getElementById('liste') ;
const tache = document.getElementById('tache') ;

ajouter.addEventListener('click' , () =>{
    const input = tache.value.trim() ; 
    if(input === "") {
        alert('saisi vide') ;
        return;
    }
    console.log(input) ;
    const li = document.createElement('li') ;
    const supprimer = document.createElement("button") ;
    supprimer.textContent = "supprimer" ;      
    li.textContent= input ;

    li.appendChild(supprimer) ;
    liste.appendChild(li) ;
    supprimer.addEventListener('click' , () =>{
        li.remove() ;
    })
});

