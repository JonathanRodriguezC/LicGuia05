function CalcularTemp(){
    let mensaje;
    const parrafo=document.querySelector("#idParrafo");
    let Celsius=parseFloat(prompt("Ingrese la Temperatura en Celsius"));
    const fahren=(Celsius*(9/5))+32;
    mensaje=`El valor de la temperatura ${Celsius} C° es igual a ${fahren} F°`;
    parrafo.innerHTML=mensaje;
}