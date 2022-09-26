window.addEventListener('load',() =>{
    
    const canvas=document.getElementById("canvas");
    const ctx=canvas.getContext("2d");
    canvas.height =window.innerHeight;
    canvas.width =window.innerWidth;
    ctx.font="75px Ariel";
    ctx.fillText("Tic-Tac-Toe Game", (canvas.width/2)-315,75);
    ctx.textAlign="center";
  
   
    
    ctx.lineWidth=10;;
    ctx.lineCap="square";
    ctx.beginPath();
    ctx.moveTo(600,700);
    ctx.lineTo(1370,700);
    
    ctx.moveTo(600,400);
    ctx.lineTo(1370,400);

    ctx.moveTo(850,925);
    ctx.lineTo(850,175);
    ctx.moveTo(1111,925);
    ctx.lineTo(1111,175);
   
    ctx.closePath();
    
    ctx.stroke();
    
});