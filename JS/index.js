// const form= document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const nombreError= document.querySelector("#nombre-error");
//     nombreError.textContent= " ";
//     let error=false;

//     const nombre = document.querySelector("#nombre");
//     if (nombre.value=="") {
//         error = true;
//         nombreError.textContent = "El nombre es obligatorio";
//     }

//     if (!error){
//         e.target.submit();
//     }
// })

function validarFormulario() {
    var nombre = document.forms[0]["nombre"].value;
    var apellido = document.forms[0]["apellido"].value;
    var email = document.forms[0]["email"].value;
    var mensaje = document.forms[0]["mensaje"].value;

    if (nombre == "" || apellido == "" || email == "" || mensaje == "") {
        alert("Por favor complete todos los campos obligatorios");
        return false;
    } else {
        alert("El formulario se envió correctamente");
        return true;
    }
}
