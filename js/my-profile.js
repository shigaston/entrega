//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

  // Le asigna a la variable el valor que tiene los inputs por id
    function obtenerDatos() {

        let nombre = document.getElementById("nombre1").value;
        let apellido = document.getElementById("apellido1").value;
        let telefono = document.getElementById("telefono1").value;
        let fecha = document.getElementById("fecha1").value;
        let email = document.getElementById("email1").value;

        return { nombre: nombre, apellido: apellido, telefono: telefono, fecha: fecha, email: email};

    }
// Guarda los datos en el localstorage
    function guardarInfo(datos) {
        localStorage.setItem('nombre', datos.nombre)
        localStorage.setItem('apellido', datos.apellido)
        localStorage.setItem('telefono', datos.telefono)
        localStorage.setItem('fecha', datos.fecha)
        localStorage.setItem('email', datos.email)
    }
// Proyecto de funcion para mantener datos en los inputs (pero le faltan cosas)
    function mantenerDatos(){
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("apellido", apeliido);
        localStorage.setItem("telefono", telefono);
        localStorage.setItem("fecha", fecha);
        localStorage.setItem("email", email);

    }
    document.addEventListener("DOMContentLoaded", function () {


        
        // const imageControl = document.getElementById('imageControl');
        // const image = document.getElementById('imageControl');

        // imageControl.onchange = (e) =>{
        //     let avatar = e.target.files[0];
        //     var fr = new FileReader();
        //     fr.onload = function () {
        //         document.getElementById('image').src = fr.result;
        //     }
        //     fr.readAsDataURL(avatar);
        // };

        // image.addEventListener("load", function() {

        //     var imgCanvas = document.createElement("canvas"),
        //         imgContext = imgCanvas.getContext("2d");

        //         imgCanvas.width = image.width;
        //         imgCanvas.height = image.height;

        //         imgContext.drawImage(image, 0, 0, image.width, image.height);


        //     var imgAsDataURL = imgCanvas.toDataURL("image/png");

        //     try {
        //         localStorage.setItem("image", imgAsDataURL);
        //     }

        //     catch (e) {

        //         console.log("Storage failed: " + e);
        //     }

        // })

        // let avatarSource = localStorage.getItem("image");

        // if(avatarSource !== null){
        //     document.getElementById('image').src = avatarSource;
        // };
        
        // Con el evento click del boton de guardar obtiene y almacena los datos 
        document.getElementById('btnguardar').addEventListener('click', function(e){

    
    let datos = obtenerDatos();
    guardarInfo(datos);
    mantenerDatos();
    
}); 

}); 