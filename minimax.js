let player=0;


function aniM(e){
    const x=e.target.className;
    
  
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
     
}
    else if(nm[0].className.includes("left") && player==0 ){
        let gt_red=document.getElementsByClassName("yellow 1");
        gt_red[nm[0].className[6]].style.position="relative";
        nm[0].animate([{transform:"translateY(2000px)"},{transform:"translateY(-5px)"}],{duration: 1500,
            easing:"ease-in-out",
        delay:15,
    iterations:1,
     });
     
     gt_red[nm[0].className[6]].style.display="block";

    }
    else if(nm[0].className.includes("right") && player==0 ){
        let gt_red=document.getElementsByClassName("yellow 2");
        gt_red[nm[0].className[6]].style.position="relative";
        nm[0].animate([{transform:"translateY(2000px)"},{transform:"translateY(-5px)"}],{duration: 1500,
            easing:"ease-in-out",
        delay:15,
    iterations:1,
     });
     gt_red[nm[0].className[6]].style.display="block";
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
    }
    else if(nm[0].className.includes("mid") && player==0 ){
        console.log("ok");
        let gt_red=document.getElementsByClassName("yellow 3");
        gt_red[nm[0].className[6]].style.position="relative";
        nm[0].animate([{transform:"translateY(2000px)"},{transform:"translateY(-5px)"}],{duration: 1500,
            easing:"ease-in-out",
        delay:15,
    iterations:1,
     });
     gt_red[nm[0].className[6]].style.display="block";
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
    }
    if(player==1){
        player=0;
    }
    else{
        player=1;
    }
removeEventListener(nm[0],aniM);
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
let arr=[-9,-9,-9,-9,-9,-9,-9,-9,-9];
function check_winner(arr){
    for (let i=0;i<arr.length-6;i++){
        if (i % 3==0){
            if(arr[i]==arr[i+1]==arr[i+2]=="X"){
                return 1;
            }
            else if (arr[i]==arr[i+1]==arr[i+2]=="O"){
                return -1; /* ai */
            }

        }
        else if(i<3){
            if(arr[i]==arr[i+3]==arr[i+6]=="X"){
                return 1;
            }
            else if (arr[i]==arr[i+3]==arr[i+6]=="O"){
                return -1; /* ai */
            }
        }
        else if (i==0 || i==2){
            if(arr[i]==arr[4]==arr[8-i]=="X"){
                return 1;
            }
            else return -1;
        }
       
    }
    return null;

}
function bestMove(arr) {
    // AI to make its turn
    let bestScore = -Infinity;
    let move;
     
      for (let k = 0; k < arr.length ; k++) {
        // Is the spot available?
        if (arr[k] == -9) {
          arr[k] = "O";
          let score = minimax(board, 0, true);
          arr[k] = -9;
          if (score > bestScore) {
            bestScore = score;
            move = k;
          }
        }
      }
    
    arr[move] = "O";
    player = human;
  }
  
function minimax(arr, depth, isMaximizing) {
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
            let score = minimax(board, depth + 1, false);
            arr[k] = -9;
            bestScore = max(score, bestScore);
          }
        }
      
      return bestScore;
    } else {
      let bestScore = Infinity;
       
        for (let j = 0; j < arr.length; j++) {
          // Is the spot available?
          if (arr[j] == -9) {
            arr[j] = "O";
            let score = minimax(board, depth + 1, true);
            arr[j] = -9;
            bestScore = min(score, bestScore);
          }
        }
      
      return bestScore;
    }
  }