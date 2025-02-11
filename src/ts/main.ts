var myModal = document.getElementById('myModal') as HTMLElement;
var myInput = document.getElementById('myInput') as HTMLElement;

myModal.addEventListener('shown.bs.modal', function () {
	myInput.focus();
});
