let texto = "";
let encriptado = "";
let botonencrip = document.querySelector(".encriptar");
let botondesencrip = document.querySelector(".desencriptar");
let textocrip = document.querySelector(".texto");
let mostrar = document.querySelector(".codificado");

let muneco = document.querySelector(".muneco");
let parrafos = document.querySelectorAll("p");
let botonCopiar = document.querySelector(".copiar");
let textoCodificado = document.querySelector(".codificado");

let encriptacion = () =>{
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
// texto.push(textocrip.value); 
muneco.classList.add("ocultar");  
parrafos[1].classList.add("ocultar");  
parrafos[2].classList.add("ocultar");  
botonCopiar.classList.remove("ocultar");  
textoCodificado.classList.remove("ocultar");  

let codex = textocrip.value;
//let codex = "";

// for (let i=0; i < texto.length; i++) {
//     let letra = texto.substring(i, i+1)
//     switch (letra) {
//         case "e":
//             letra = "enter"
//             break;
//         case "i":
//             letra = "imes"
//             break;
//         case "a":
//             letra = "ai"
//             break;
//         case "o":
//             letra = "ober"
//             break;
//         case "u":
//             letra = "ufat"
//             break;
//         default:
//             letra
//     };
//     codex = codex+letra
// };

const dict = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

for (let i in dict){
    codex = codex.replaceAll(dict[i][0], dict[i][1]);
}
//console.dir(codex);
mostrar.textContent = codex;

};

let desencriptar = () =>{

let codex = textocrip.value

const dict = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i in dict){
        codex = codex.replaceAll(dict[i][1], dict[i][0]);
    }
//    console.dir(codex);
    mostrar.textContent = codex;

};

let portapapeles = () => {
    
    clip = navigator.clipboard.writeText(mostrar.value);
    console.log(clip);
/*    const texto_out = document.querySelector("#texto_out");
    navigator.clipboard.writeText(texto_out.value); */    
}

botonencrip.addEventListener("click", encriptacion);
botondesencrip.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", portapapeles);