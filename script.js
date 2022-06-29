function clique(){
   let menu=document.getElementById('sec')
   menu.classList.toggle('active');
   


}

function exect(){
   let result=document.getElementById('conteudo')
   result.innerHTML='Dashboard'

 }
 function exect1(){
   let result=document.getElementById('conteudo')
   result.innerHTML='Pets'

 }
 function exect2(){
   let result=document.getElementById('conteudo')
   result.innerHTML='Clientes'

 }
 function exect3(){
   let result=document.getElementById('conteudo')
   result.innerHTML='Vets'

 }
 function exect4(){
   let result=document.getElementById('conteudo')
   result.innerHTML='Ajustes'

 }

 function sair(){
   alert('Deseja realmente se desconectar?')
 }

 let btn = document.querySelector("#reload")
   btn.addEventListener("click", function() {
   
    location.reload();
});