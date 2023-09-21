document.addEventListener("DOMContentLoaded",function(){
    const azulBtn=document.querySelector("#idAzul");
    const AmarilloBtn=document.querySelector("#idAmarillo");
    const RojoBtn=document.querySelector("#idRojo");
    const VerdeBtn=document.querySelector("#idVerde");

    azulBtn.addEventListener("click",() => cambiar("blue"));
    AmarilloBtn.addEventListener("click",() => cambiar("yellow"));
    RojoBtn.addEventListener("click",() => cambiar("red"));
    VerdeBtn.addEventListener("click",() => cambiar("green"));

    function cambiar(color){
        document.body.style.backgroundColor=color;

    }
});