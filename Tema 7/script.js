document.getElementById("idEmail").addEventListener ("blur", email);
document.getElementById("idEmail").addEventListener ("click", limpiar);
var error =document.getElementById("idEmailError");

 function email(e){
    let formulario = document.forms["formulario"];
    if(this.value==""){
         e.preventDefault(); 
         error.innerHTML="ERROR";
    }else{
        formulario.submit();
    }
 }

 function limpiar(e){
    this.value="";
    error.innerHTML="";
 }