//Obtener el modal
var modal = document.getElementById('ciclo');

//Cuando el usuario haga clic en cualquier lugar fuera del modal, ciérrelo.
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}