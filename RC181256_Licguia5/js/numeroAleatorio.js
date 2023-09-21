//Generamos un numero aleatorio que se encuentre en el rango del 1 al 25
const numeroAleatorio=Math.floor(Math.random()*25)+1;
// Creamos una contante que permite identificar el maximo de intentos
const numeroIntentos=3;
//Guarda el numero de intentos que realiza el usurio
let intentos=1;
function generarNumeroAleatorio(){
    //Definimos una variable pa ra impresion de mensajes
    let mensaje;
    //Utilizamos el dom para acceder al parrafo creado
    const parrafo= document.querySelector("#idParrafo");
    //Verificamos en que intento esta el usuario
    if (intentos<=numeroIntentos){
        let numero=prompt("¿Que numero se ha generado(Intento"+intentos+")?");
        if(numero==numeroAleatorio){
            mensaje=`¡Es sorprendente, pudiste adivinar el numero oculto(${numeroAleatorio}).
            Refresque la pagina par volver a jugar.`;

        }else if(intentos=numeroIntentos){
            mensaje=`Su numero de intentos ha terminado.
            El numero oculto era: ${numeroAleatorio}. Refresque la pagina para volver a jugar.`;
        }else{
            mensaje=`Vuelve a intentar. Quedan ${numeroIntentos-intentos}
            intentos `;
        }
        intentos++;

    } else{
        mensaje=`Su numero de intentos ha terminado.
        El numero oculto era :${numeroAleatorio}. Refresque la pagina para volver a jugar`
    }
    parrafo.innerHTML=mensaje;
}