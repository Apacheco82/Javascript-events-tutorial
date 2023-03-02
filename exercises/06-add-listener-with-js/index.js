window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};
const boton = document.getElementById("theGreen")
boton.addEventListener("click", hello);

function hello() {
  alert("wuju")
}
hello()