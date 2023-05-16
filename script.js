const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"  */


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    if(textoEncriptado.length !=0){
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        Swal({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }else{
        alert("Debes ingresar un texto");
        
    }
    
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    if(textoDesencriptado !=0){
        mensaje.value = textoDesencriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }else{
        alert("Debes ingresar un texto");
    }


}

function Copiar(){
    
    let copia = document.querySelector(".mensaje");
    if(copia.value.length ==0){
        
        alert("No hay mensaje para copiar.");
    }else{
        copia.select();
        copia.setSelectionRange(0, 99999);//para moviles
        navigator.clipboard.writeText(copia.value);
        textArea.focus();
        
    }
    
    
}

var copiar = document.querySelector("#copiar");

function encriptar(stringEncriptada){
    let texto = stringEncriptada.replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat");  
    return texto;
}

function desencriptar(stringEncriptada){
    let texto = stringEncriptada.replace(/enter/gi,"e")
        .replace(/imes/gi,"i")
        .replace(/ai/gi,"a")
        .replace(/ober/gi,"o")
        .replace(/ufat/gi,"u");  
    return texto;
}

copiar.onclick = Copiar;


