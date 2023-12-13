var compteur = 0;
var compteur2 = 0;

var Madiv = document.getElementById("Methode2");
Madiv.addEventListener("click", UneProcedureQuiChangeLetext);

Madiv = document.getElementById("Methode3");
Madiv.addEventListener("mouseover", UneProcedureQuiSurvole);

Madiv = document.getElementById("Methode4");
Madiv.addEventListener("keydown", UneProcedureQuiEcrit);

function UneProcedureQuiEcrit(evenement) {
    evenement.target.innerHTML = "On a appuyé sur : " + evenement.key;
}

function UneProcedureQuiChangeLetext(evenement) {
    compteur++;
    evenement.target.innerHTML = "On m'a cliqué dessus " + compteur + " fois";
}

function UneProcedureQuiSurvole(evenement) {
    compteur2++;
    evenement.target.innerHTML = "On m'a survolé " + compteur2 + " fois";
}

var monDiv = document.getElementById("monDiv");

monDiv.addEventListener("click", function() {
    monDiv.className = "nouvelleClasse";
});

function changerVisibilite(visible) {
    var div = document.getElementById("monDiv2");
    if (visible) {
        div.style.visibility = "visible";
    } else {
        div.style.visibility = "hidden";
    }
}






