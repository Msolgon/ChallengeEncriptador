function encriptar() {
    var texto = document.getElementById("inputText").value.toLowerCase("inputText");
    
    var texto = texto.replace(/é/igm,"e");
    var texto = texto.replace(/í/igm,"i");
    var texto = texto.replace(/á/igm,"a");
    var texto = texto.replace(/ó/igm,"o");
    var texto = texto.replace(/ú/igm,"u");
    var texto = texto.replace(/ñ/igm,"n");
    var texto = texto.replace(/[&\/\\#,+()$~%.='"`:*¿?<>{}¡!¬;@]/igm, "");

    var textoCifrado = texto.replace(/e/igm,"enter");
    var textoCifrado = textoCifrado.replace(/i/igm,"imes");
    var textoCifrado = textoCifrado.replace(/a/igm,"ai");
    var textoCifrado = textoCifrado.replace(/o/igm,"ober");
    var textoCifrado = textoCifrado.replace(/u/igm,"ufat");
    
    document.getElementById("imagen").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("text").innerHTML = textoCifrado;
    document.getElementById("boton3").style.display = "show";
    document.getElementById("boton3").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("inputText").value.toLowerCase("inputText");
    
    var texto = texto.replace(/é/igm,"e");
    var texto = texto.replace(/í/igm,"i");
    var texto = texto.replace(/á/igm,"a");
    var texto = texto.replace(/ó/igm,"o");
    var texto = texto.replace(/ú/igm,"u");
    var texto = texto.replace(/ñ/igm,"n");
    var texto = texto.replace(/[&\/\\#,+()$~%.='"`:*¿?<>{}¡!¬;@]/igm, "");
    
    var textoCifrado = texto.replace(/enter/igm,"e");
    var textoCifrado = textoCifrado .replace(/imes/igm,"i");
    var textoCifrado = textoCifrado.replace(/ai/igm,"a");
    var textoCifrado = textoCifrado.replace(/ober/igm,"o");
    var textoCifrado = textoCifrado.replace(/ufat/igm,"u");
   
    document.getElementById("imagen").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("text").innerHTML = textoCifrado;
    document.getElementById("boton3").style.display = "show";
    document.getElementById("boton3").style.display = "inherit";
}

window.onload = function() {
    document.getElementById("boton1").onclick = encriptar;
    boton1.addEventListener("click", encriptar);
    document.getElementById("boton2").onclick = desencriptar;
    boton2.addEventListener("click", desencriptar);
}

const contenido = document.getElementById("text");
    boton3 = document.getElementById("boton3");

boton3.addEventListener("click", e =>  { 
    document.execCommand("copy");
    text.innerHTML = "Copiado!!!"

})
