let boxes= document.querySelectorAll(".box");
let resetgame = document.querySelector(".resetgame");
let winmsg= document.querySelector(".winmsg");
let msg= document.querySelector("#msg");
let new_btn= document.querySelector("#againbtn");
let turnO =true;
let count=0;
const winning = [
    [0,1,2] ,
    [3,4,5], 
    [6,7,8], 
    [0,3,6], 
    [1,4,7], 
    [2,5,8], 
    [0,4,8], 
    [2,4,6]
];
const reset_game=()=>{
    turnO=true;
    count=0;
    enablegame();
    winmsg.classList.add("hidden");
    msg.innerText="";
}
let disableall = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
let enablegame = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.classList.remove("o","x");
    }
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = 'O';
            box.classList.add("o");
            turnO=false;
        }else{
            box.innerText='X';
            box.classList.add("x");
            turnO=true;
        }
    box.disabled=true;
    count++;
    checkwinner();
    });
     
})

const checkwinner=()=>{
    let winner = false;
    for(let pattern of winning){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                disableall();
                msg.innerText= `Congratulation,winner is ${pos1val}`;
                winmsg.classList.remove("hidden");
                winner=true;
                break;
            }
        }
    }
    if (!winner && count === 9) { 
        disableall(); 
        msg.innerText = `Game Draw!`;
        winmsg.classList.remove("hidden"); 
    }
};


resetgame.addEventListener("click",reset_game);
new_btn.addEventListener("click",reset_game);


