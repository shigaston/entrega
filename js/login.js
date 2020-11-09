//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


// sencilla funcion de sesion para almacenar los datos del input en localstorage
function session() {
    var usuario = document.getElementById("correo").value;
    localStorage.setItem("login", usuario);


}
// remueve los datos del localstorage cuando se cierra sesion
function cerrarSession() {
    localStorage.removeItem('login');    
    // localStorage.removeItem('nombre');
    // localStorage.removeItem('apellido');
    // localStorage.removeItem('fecha');
    // localStorage.removeItem('telefono');
    // localStorage.removeItem('email');

}
document.addEventListener("DOMContentLoaded", function(e){

   
 

    
  

    

});