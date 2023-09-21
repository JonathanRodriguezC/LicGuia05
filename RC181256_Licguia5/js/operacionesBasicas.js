document.addEventListener("DOMContentLoaded",function(){
    const parrafo=document.querySelector("#idParrafo");
    console.log(parrafo);
    
    const btnSumar=document.querySelector("#idBtnSumar");
    const btnRestar=document.querySelector("#idBtnRestar");
    const btnMultiplicar=document.querySelector("#idBtnMultiplicar");
    const btnDividir=document.querySelector("#idBtnDividir");
    
    btnSumar.addEventListener("click",sumar);
    btnRestar.addEventListener("click",restar);
    btnMultiplicar.addEventListener("click",multiplicar);
    btnDividir.addEventListener("click",dividir);
    
    let resultado;
    function sumar(){
        let numero1=prompt("Ingrese el primer numero a sumar");
        let numero2=prompt("Ingrese el segundo numero a sumar");
        resultado= numero1+numero2;
        parrafo.innerHTML=`${numero1}+${numero2}=${resultado}`;
    }
    function restar(){
        let numero1=prompt("Ingrese el primer numero a Restar");
        let numero2=prompt("Ingrese el segundo numero a Restar");
        resultado= numero1-numero2;
        parrafo.innerHTML=`${numero1}-${numero2}=${resultado}`;
    }
    
    function multiplicar(){
        let numero1=prompt("Ingrese el primer numero a Multiplicar");
        let numero2=prompt("Ingrese el segundo numero a Multiplicar");
        resultado= numero1*numero2;
        parrafo.innerHTML=`${numero1}x${numero2}=${resultado}`;
    }
    function dividir(){
        let numero1=prompt("Ingrese el primer numero a Dividir");
        let numero2=prompt("Ingrese el segundo numero a Dividir");
        let mensaje;
        if(numero2!=0){resultado= numero1/numero2;}
        else{mensaje=`EWl valor ${numero1}/${numero2} no se puede dividir`}
        
        parrafo.innerHTML=mensaje;
}
});
