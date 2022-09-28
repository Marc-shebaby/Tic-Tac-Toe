
   
   
function aniM(e){
    const x=e.target.id;
    const nm=document.getElementById(x);
    console.log(x);
    let coor=nm.getBoundingClientRect();
    console.log(u['x']);
    console.log(nm.getBoundingClientRect());
  
    

}
const m= document.querySelectorAll(".mid");
   for (var i=0; i<m.length; i++){
    m[i].addEventListener("click",aniM);
console.log("Koo");
   }