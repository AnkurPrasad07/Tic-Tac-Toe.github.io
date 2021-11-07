
let turn = "X"
let isgameover = false;
const info = document.querySelector('.info');
const restart = document.querySelector('.restart')

//for the background turn span elem
const bgTurn = document.querySelector('.bg-turn');

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){

            info.innerHTML = ` player <span>${boxtext[e[0]].innerText}'s </span> Won the Game!`;
            document.querySelector(".mainGame").style.pointerEvents = "none";
            isgameover = true;
            
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("boxes");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();

            if (!isgameover){
                document.querySelector(".bg-turn").innerText  = `${turn}'s Turn`;
            } 
        }

        
    })
})

// Add onclick listener to reset button



restart.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".mainGame").style.pointerEvents = "inherit";
    document.querySelector(".bg-turn").innerHTML = "";
})

