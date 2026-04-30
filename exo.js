//exo1 

let prenom = "julien" ; 
console.log(`bonjour ${prenom}`) ; 

//exo 2 

let a  = 10 ; 
let b = 5 ; 

console.log(a + b) ; 

 //exo 3

let age = 10  ;

if(age >= 18) {
    console.log("majeur") ;
}
else {
    console.log("mineur") ;
}

//exo 4 

let  nombre = 11 ; 
if(nombre % 2 == 0) {
    console.log("pair") ;
}
else{
    console.log("impair") ;
}

//exo 5 

for(let i = 0 ; i <10 ;i++) {
    console.log(i+1) ;
}

//exo 6 

let fruits = ["pomme" ,"banane" , "orange"] ;

fruits.forEach((fruit) => console.log(fruit)) ;

 
//exo 7

let nombre1 =  5 ; 

function carre(nb) {
    console.log(nb * nb) ;
 }

 carre(5);

 //exo 8 

 function addition(a , b) {
    return a + b ;
 }

 let resultat = addition(4,7) ;

 console.log(resultat) ;


 //exo 9

 let x = 12  ; 
 let y = 20 ; 

 function affiche(x , y) {
    if(x < y) {
        return y ; 
     }
     else{
        return x ;
     }
   
 }
console.log(affiche(x,y)) ;

//exo 10 

let mot = "javascript" ; 

console.log(mot.length) ;

//bonus 

let nombre2 = [2,5,8,10,3] ;
let result  = 0 ;
for(let i = 0 ; i < nombre2.length ; i++) {
    result += nombre2[i] ;
        console.log(nombre2[i]) ;

}
console.log(result) ;