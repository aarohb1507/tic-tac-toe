console.log("Welcome to TTT");
let turn = 'X';
let ting = new Audio("ting.mp3");
const changeTurn = ()=>{
  return turn === 'X' ? 0 : 'X';
}

// Game Logic 

let boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach(element =>{
  element.addEventListener('click',(e)=>{
    let boxText = element.querySelector('.boxText');
    if(boxText.innerHTML = " "){
      boxText.innerHTML = turn;
      changeTurn();
      ting.play();
      checkWin();
    }else if(boxText.innerHTML != " "){
      changeTurn();

    }
    
  })
})