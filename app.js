let btn = document.querySelector(".btn-grad");
let h2 = document.querySelector("h2");
let allBtn = document.querySelectorAll(".btn");
let body = document.querySelector("body");
let span = document.querySelector("p span");
// variables 

let gameSq = [];
let userSq = [];
let button = ["red", "green", "yellow", "blue"];
let started = false;
let level = 0;
let hightestScore = 0;



btn.addEventListener('click',()=>{
    if(!started){
        started = true;
        setTimeout(levelUp,1000);
    }
})
function levelUp(){
    userSq = [];
    level++;
    h2.innerHTML = `Level ${level}`;

    //random button
    let randomIdx = Math.floor(Math.random()*3);
    let btnColor = button[randomIdx];
    let randomBtn = document.querySelector(`.${btnColor}`);
    gameSq.push(btnColor);
    btnFlash(randomBtn);
    console.log(gameSq);
}
function btnFlash(btn){
    btn.classList.add("blink");
    setTimeout(()=>{
        btn.classList.remove("blink");
    },100);
}

// user Button click
function btnPress(){
    let btn = this;
    console.log(btn);
    let color = btn.getAttribute('id');
    userSq.push(color);
    btnFlash(btn);
    checkBtn(userSq.length-1);
}

for(let btns of allBtn){
    btns.addEventListener("click", btnPress);
}
function checkBtn(i){
    if(userSq[i] === gameSq[i]){
        if(userSq.length == gameSq.length){
           setTimeout(levelUp,1000); 
        }
    }else{
        h2.innerHTML = ` Game Over ! your score was ${level} <br> Press The Button to start again`;
        body.style.backgroundColor = "red";
        setTimeout(()=>{body.style.backgroundColor = "white";},100)
        hightestScore = Math.max(hightestScore,level);
        span.innerHTML = hightestScore;
        restart();
    }
}
function restart(){
    level = 0;
    gameSq = [];
    userSq = [];
    started = false;
}