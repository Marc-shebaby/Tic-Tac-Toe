
  let po 
   
function aniM(e){
    const x=e.target.id;
    const nm=document.getElementById(x);
    console.log(x);
    let coor=nm.getBoundingClientRect();
    console.log(coor["y"]);
    console.log(nm.getBoundingClientRect());
    if(e.target.className.includes("mid")){
        const coin= document.getElementsByClassName("out2");
        let coor2= coin[e.target.className[4]].getBoundingClientRect();
       
        console.log(coor2["y"]);
        
        let fcs=coor2["y"]+coor["y"];

        
        coin[e.target.className[4]].style.transition=".40s ease-out 0s"; 
       var trans ="translate3d(" + 0 +"px,"+ -coor2["y"] +"px, 0)"; 
        coin[e.target.className[4]].style.transform=trans
        

    
    }
    else if(e.target.className.includes("first")){
        const coin= document.getElementsByClassName("out1");
        coin[e.target.className[4]].style.transition=".40s ease-out 0s"; 
        var trans ="translate3d(" + 0 +"px,"+ -1300 +"px, 0)";
        coin[e.target.className[4]].style.transform=trans;
        

    
    }
    else{
        const coin= document.getElementsByClassName("out3");
        coin[e.target.className[4]].style.transition=".40s ease-out 0s"; 
        var trans ="translate3d(" + 0 +"px,"+ -800 +"px, 0)";
        coin[e.target.className[4]].style.transform=trans;

    }

  
    

}
const mid= document.querySelectorAll(".mid");
   for (var i=0; i<mid.length; i++){
    mid[i].addEventListener("click",aniM);

   }
const left= document.querySelectorAll(".left");
   for (var i=0; i<left.length; i++){
    left[i].addEventListener("click",aniM);

   }
const right= document.querySelectorAll(".right");
   for (var i=0; i<right.length; i++){
    right[i].addEventListener("click",aniM);

   }