var MavariableString = "toto";
var MavariableNumerique= 100;
var MavariableTableau = ['Apple', 'Banana'];
var Mavariableobjet = window
alert(MavariableString + MavariableNumerique + MavariableTableau[0]+ 
    Mavariableobjet.location.pathname);

var MavariableTailleFenetre = window.innerWidth;
window.addEventListener('resize', () => {
    alert((MavariableTailleFenetre = window.innerWidth));
});