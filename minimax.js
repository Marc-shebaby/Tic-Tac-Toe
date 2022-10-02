let player=1;

let counter=0;
;


function aniM(e){
    const x=e.target.className;
    let pos;
  
    const nm=document.getElementsByClassName(x);
    
    if(nm[0].className.includes("left") && player==1 ){

        let gt_red=document.getElementsByClassName("red 1");
        gt_red[nm[0].className[6]].style.position="relative";
        nm[0].animate([{transform:"translateY(2000px)"},{transform:"translateY(-35px)"}],{duration: 1500,
            easing:"ease-in-out",
        delay:15,
    iterations:1,

});
    
     gt_red[nm[0].className[6]].style.display="block";
     pos=nm[0].className[6]*3;
     
     if(arr[pos]==-9){
     arr[pos]="X";
     player=0;
     }
     
     
}
  
    else if(nm[0].className.includes("right") && player==1 ){
        let gt_red=document.getElementsByClassName("red 2");
        gt_red[nm[0].className[6]].style.position="relative";
        nm[0].animate([{transform:"translateY(2000px)"},{transform:"translateY(-5px)"}],{duration: 1500,
            easing:"ease-in-out",
        delay:15,
    iterations:1,
     });
     gt_red[nm[0].className[6]].style.display="block";
     pos=(nm[0].className[6]*3)+2;
     if(arr[pos]==-9){
        arr[pos]="X";
        player=0;
        }
     removeEventListener(nm[0],aniM);
    }

    else if(nm[0].className.includes("mid") && player==1 ){
        let gt_red=document.getElementsByClassName("red 3");
        gt_red[nm[0].className[6]].style.position="relative";
        nm[0].animate([{transform:"translateY(2000px)"},{transform:"translateY(-5px)"}],{duration: 1500,
            easing:"ease-in-out",
        delay:15,
    iterations:1,
     });
     gt_red[nm[0].className[6]].style.display="block";
     pos=(nm[0].className[6]*3)+1;
     if(arr[pos]==-9){
        arr[pos]="X";
        player=0;
        }
     
     removeEventListener(nm[0],aniM);
    
    }
   counter=0;
    for(let full=0; full<arr.length;full++){
        if (arr[full]==-9){
        
        }
        else{
            counter=counter+1;
        }
        

    }
    
    if(counter==arr.length){
        let over=check_winner();

        if (over==1){
document.getElementsByClassName("over")[0].innerText="X Wins!";

        }
        else if (over==-1){
            document.getElementsByClassName("over")[0].innerText="O Wins!";
        }
        else if(over==0){
            document.getElementsByClassName("over")[0].innerText="It is a Tie!";
        }
    }
    
    
    else if(player==0){
    if(check_winner()==null){
        counter=0;
    bestMove();
    }
    else if(check_winner()==1){
        document.getElementsByClassName("over")[0].innerText="X Wins!";
        counter=0;
       
    }
    else if (check_winner()==0){
        document.getElementsByClassName("over")[0].innerText="It is a Tie!!";
        counter=0;
       
    }
    else if (check_winner()==-1){
        document.getElementsByClassName("over")[0].innerText="O Wins!";
        counter=0;
       
    }

}
}

  function rem(){
    const m=document.querySelectorAll(".mid");
    for (var i=0; i<m.length; i++){
        removeEventListener(m[i],aniM);
       }
    const l= document.querySelectorAll(".left");
   for (var i=0; i<l.length; i++){
    removeEventListener(l[i],aniM);
   }
   const r= document.querySelectorAll(".right");
   for (var i=0; i<r.length; i++){
    removeEventListener(r[i],aniM);
   }
  }
  
    


let mid= document.querySelectorAll(".mid");
   for (var i=0; i<mid.length; i++){
    mid[i].addEventListener("click",aniM);

   }
let left= document.querySelectorAll(".left");
   for (var i=0; i<left.length; i++){
    left[i].addEventListener("click",aniM);

   }
let right= document.querySelectorAll(".right");
   for (var i=0; i<right.length; i++){
    right[i].addEventListener("click",aniM);

   }
let arr=[-9,-9,-9,-9,-9,-9,-9,-9,-9];
function check_winner(){
    for (let i=0;i<arr.length;i++){
        if (i % 3==0){
            if(arr[i]==arr[i+1] && arr[i+1]==arr[i+2] && arr[i]=="X"){
                return 1;
            }
            else if (arr[i]==arr[i+1] && arr[i+1]==arr[i+2] &&arr[i]=="O"){
                return -1; /* ai */
            }

        }
        if(i<3){
            if(arr[i]==arr[i+3] && arr[i+3]==arr[i+6] && arr[i]=="X"){
                return 1;
            }
            else if (arr[i]==arr[i+3] && arr[i+3]==arr[i+6] && arr[i]=="O"){
                return -1; /* ai */
            }
        }
        if (i==0 || i==2){
            if(arr[i]==arr[4] && arr[4]==arr[8-i] && arr[i]=="X"){
                return 1;
            }
            else if(arr[i]==arr[4] && arr[4]==arr[8-i] && arr[i]=="O"){
                return -1;
        }
       
    }
}
counter=0;
for(let full=0; full<arr.length;full++){
    if (arr[full]==-9){
    
    }
    else{
        counter=counter+1;
    }
    }
    if (counter==arr.length){
        
        return 0;
    }
    else{
    
    return null;
    }
    
}

function bestMove() {
    // AI to make its turn
    let bestScore = Infinity;
    let move;
     
      for (let k = 0; k < arr.length ; k++) {
        // Is the spot available?
        if (arr[k] == -9) {
          arr[k] = "O";
          let score = minimax(0, true);
          arr[k] = -9;
          if (score < bestScore) {
            bestScore = score;
            move = k;
          }
        }
      }
    
    arr[move] = "O";
    let doc;
    let gt_yellow;
    let c_div;

    
    if ((move-1)%3==0){
            doc=document.getElementsByClassName("mid")
            gt_yellow=document.getElementsByClassName("yellow 3");
            c_div=(move-1)/3;
            console.log(c_div);
            gt_yellow[doc[c_div].className[6]].style.position="relative";
            doc[c_div].animate([{transform:"translateY(2000px)"},{transform:"translateY(-5px)"}],{duration: 1500,
            easing:"ease-in-out",
        delay:15,
    iterations:1,
     });
     
     gt_yellow[doc[c_div].className[6]].style.display="block";
     
    }
    else if(move%3==0){
        doc=document.getElementsByClassName("left")
        gt_yellow=document.getElementsByClassName("yellow 1");
        c_div=move/3;
        
        gt_yellow[doc[c_div].className[6]].style.position="relative";
        doc[c_div].animate([{transform:"translateY(2000px)"},{transform:"translateY(-5px)"}],{duration: 1500,
        easing:"ease-in-out",
    delay:15,
iterations:1,
 });
 
 gt_yellow[doc[c_div].className[6]].style.display="block";

    }
    else{
        doc=document.getElementsByClassName("right")
        gt_yellow=document.getElementsByClassName("yellow 2");
        c_div=(move-2)/3;
        
        gt_yellow[doc[c_div].className[6]].style.position="relative";
        doc[c_div].animate([{transform:"translateY(2000px)"},{transform:"translateY(-5px)"}],{duration: 1500,
        easing:"ease-in-out",
    delay:15,
iterations:1,
 });
 
 gt_yellow[doc[c_div].className[6]].style.display="block";
 

    }

    if(check_winner()==1){
        document.getElementsByClassName("over")[0].innerText="X Wins!";
        player=0;

    }
    else if(check_winner()==-1){
        document.getElementsByClassName("over")[0].innerText="O Wins!";
        player=0;
    }
    else if(check_winner()==0){
        document.getElementsByClassName("over")[0].innerText="It is a Tie!";
        player=0;
    }
    else{
        player = 1;
    }
      
    
  }
  
function minimax(depth, isMaximizing) {
    let result = check_winner();
    if (result !== null) {
      return result;
    }
  
    if (isMaximizing) {
      let bestScore = -Infinity;
      
      for (let j = 0; j < arr.length; j++) {
          // Is the spot available?
          if (arr[j] == -9) {
            arr[j] = "X";
            let score = minimax(depth + 1, false);
            arr[j] = -9;

            bestScore = Math.max(score, bestScore);
          }
        }
      
      return bestScore;
    } else {
      let bestScore = Infinity;
       
        for (let j = 0; j < arr.length; j++) {
          // Is the spot available?
          if (arr[j] == -9) {
            arr[j] = "O";
            let score = minimax(depth + 1, true);
            arr[j] = -9;
            bestScore = Math.min(score, bestScore);
          }
        }
      
      return bestScore;
    }
  }