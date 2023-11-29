/*function factoriel(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n + factoriel(n - 1);
  }
}

let nombre = prompt("Veuillez saisir un nombre pour calculer sa factorielle :");


if (!isNaN(nombre)) {
  let n = parseInt(nombre);
  if (n >= 0) {
    let resultat = factoriel(n);
    alert("La factorielle de " + n + " est : " + resultat);
  } else {
    alert("Veuillez saisir un nombre positif pour calculer la factorielle.");
  }
} else {
  alert("Ce n'est pas un nombre valide.");
}*/
var somme =0;
let nombre = prompt("Veuillez saisir un nombre pour calculer sa factorielle :");

for (let i = 1; i <nombre ; i++) {
  //somme =i + somme ;
  somme = addition(i,somme);
  console.log(somme);
  
}




function addition(a,b){
  let c = 0;
  c = a + b
  return c;

}