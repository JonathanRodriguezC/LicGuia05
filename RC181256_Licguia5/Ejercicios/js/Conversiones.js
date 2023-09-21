document.addEventListener("DOMContentLoaded",function(){
    const metrosAPiesBtn = document.getElementById("idM_P");
    const metrosAYardasBtn = document.getElementById("idM_Y");
    const metrosAPulgadasBtn = document.getElementById("idM_Pulg");
    metrosAPiesBtn.addEventListener("click", metrosAPies);
    metrosAYardasBtn.addEventListener("click", metrosAYardas);
    metrosAPulgadasBtn.addEventListener("click", metrosAPulgadas);
    const resultadoParrafo = document.getElementById("idParrafo");
    
    function metrosAPies() {
        const metros = parseFloat(prompt("Ingrese la longitud en metros:"));
        
        const pies = metros * 3.28084;
        resultadoParrafo.innerHTML = `${metros} metros son aproximadamente ${pies} pies.`;
        
    }
    function metrosAYardas() {
        const metros = parseFloat(prompt("Ingrese la longitud en metros:"));
        
        const yardas = metros * 1.09361;
        resultadoParrafo.innerHTML = `${metros} metros son aproximadamente ${yardas} yardas.`;
    }
    function metrosAPulgadas() {
        const metros = parseFloat(prompt("Ingrese la longitud en metros:"));
        
            const pulgadas = metros * 39.3701;
            resultadoParrafo.innerHTML = `${metros} metros son aproximadamente ${pulgadas} pulgadas.`;
        
           
       
    }
    
           
        






});