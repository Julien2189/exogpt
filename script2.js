    const ouvrirModal = document.getElementById('ouvrirModal')
    const listeProduits = document.getElementById('listeProduits') ;
    const modalProduit = document.getElementById('modalProduit') ;
    const nomProduit = document.getElementById('nomProduit') ;
    const prixProduit = document.getElementById('prixProduit') ;
    const erreur = document.getElementById('erreur') ;
    const ajouterProduit = document.getElementById('ajouterProduit') ;
    const annuler = document.getElementById('annuler') ;
    const total = document.getElementById('total') ; 
    let sauvegarde=  [] ; 
    let totalPrix = 0 ; 
    ouvrirModal.addEventListener('click' , () =>{
        modalProduit.style.display = "flex" ;
    });
    annuler.addEventListener(('click'),()=>{
        modalProduit.style.display= "none" ;
    });
    ajouterProduit.addEventListener(('click'),() =>{
        if(nomProduit.value ==="" || prixProduit.value ===""){
            erreur.textContent = "Erreur Saisie" ;
            return ; 
        }

        let nom = nomProduit.value ;
        let prix = prixProduit.value ; 
        prix = Number(prix) ;
        sauvegarde.push({valeur:nom, num:prix}) ;
        
     
        const li = document.createElement('li') ;
        const supprimer = document.createElement('button') ;
        supprimer.textContent = "X" ;
        li.textContent = `${nom} -${prix}` ; 
        
        
        totalPrix += prix ;
        total.textContent = totalPrix;

         li.appendChild(supprimer) ;
        listeProduits.appendChild(li) ;
        supprimer.addEventListener(('click') , () =>{
            totalPrix -= prix ;
            total.textContent = totalPrix;
            li.remove();
               }) ;
    
        modalProduit.style.display= "none" ;
        nomProduit.value = "" ;
        prixProduit.value = "" ; 

     });

     