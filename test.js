let s1 = Symbol("marque") ; 

console.log(typeof s1);
let s2 = s1.toString() ;

console.log(s2) ;

s1 = s2  ; 
console.log(typeof s1);


console.log(s2) ;