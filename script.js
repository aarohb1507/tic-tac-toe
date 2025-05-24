let turn = 'X';
let gameOver = new Audio("gameover.mp3");
let bgm = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let isgameover = 'false';


const changeTurn = ()=>{
  if (turn === 'X'){
    turn = '0';
  }else{
    turn = 'X'; 
  }
}

//check win function

const checkWin = ()=>{
  let boxtexts = document.getElementsByClassName('boxText');
  let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  wins.forEach(e => {
    if(boxtexts[e[0]].innerText === boxtexts[e[1]].innerText && boxtexts[e[1]].innerText === boxtexts[e[2]].innerText && boxtexts[e[0]].innerText !== ""){
      document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " wins! ";
      isgameover = 'true';
      reset();
    }
  })
}

//reset 
const reset = ()=>
{
  let boxtexts = document.getElementsByClassName('boxText');
  Array.from(boxtexts).forEach(e => {
    e.innerText = "";
  })
}
let resetBtn = document.querySelector(".reset");

// Game Logic 

let boxes = document.getElementsByClassName('box');
let infoBox = document.querySelector(".info");

Array.from(boxes).forEach(element =>{
  let boxText = element.querySelector('.boxText');
  element.addEventListener('click',(e)=>{
    
    if(boxText.innerText === ""){
      boxText.innerText = turn;
      ting.play();
      checkWin();
      changeTurn();
      if(isgameover !== "true"){
        infoBox.innerText = `Turn for ${turn}`;
      }
      
    }else if(boxText.innerText !== ""){
      alert("You cannot press twice");
    }
    
  })
})