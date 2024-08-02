const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje-encriptado");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value =textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage ="none";
};


function encriptar(stringEncriptado){
    let matrizCodigo = [["e","entero"],["i","imas"],["a","ou"],["o","ober"],["u","ufatf"]];
    stringEncriptado = stringEncriptado.toLowerCase()//El metodo tolowerCase se utiliza para convertir las letras a minusculas

    for (let i = 0; i < matrizCodigo.length; i++) {
        //length define el tamaño de nuestra matriz
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            //para verificar si las letras estan siendo ingresadas  dentro de este array  se utiliza el metodo includes

            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
                         //El replaceall es un metodo que se  utiliza para sustituir todos los caracteres
        }
    }     
    return stringEncriptado;
};






function btndesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value =textoEncriptado
    textArea.value="";
};



function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","entero"],["i","imas"],["a","ou"],["o","ober"],["u","ufatf"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()//El metodo tolowerCase se utiliza para convertir las letras a minusculas

    for (let i = 0; i < matrizCodigo.length; i++) {
        //length define el tamaño de nuestra matriz
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            //para verificar si las letras estan siendo ingresadas  dentro de este array  se utiliza el metodo includes

            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
                         //El replaceall es un metodo que se  utiliza para sustituir todos los caracteres
        }
    }     
    return stringDesencriptado;
};