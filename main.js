function factorielle(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n + factorielle(n - 1);
    }
  }
  
  let nombre = prompt("Veuillez saisir un nombre pour calculer sa factorielle :");
  
  if (!isNaN(nombre)) {
    let n = parseInt(nombre);
    if (n >= 0) {
      let resultat = factorielle(n);
      alert("La factorielle de " + n + " est : " + resultat);
    } else {
      alert("Veuillez saisir un nombre positif pour calculer la factorielle.");
    }
  } else {
    alert("Ce n'est pas un nombre valide.");
  }
  