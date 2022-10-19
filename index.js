let computerGuess;
let userGuess = []
let userGuessUpdate = document.getElementById('textOutput');
let userNumberUpdate = document.getElementById('inputbox');
let audio = new Audio('used.wav');
let audio1 = new Audio('lost.wav');
let audio2 = new Audio('win.wav');


const init = () =>{
    computerGuess = Math.floor(Math.random()*100);
    document.getElementById("gameArea").style.display="none";
    document.getElementById("newgameButton").style.display="none";
    
};

const easymode = () =>{
    audio.play();
    maxguess = 10;
    startgame();
    
};
const hardmode = () =>{
    audio.play();
    maxguess = 5;
    startgame();
};
const startgame = () =>{
    
   
    document.getElementById('gameArea').style.display='block';  
    document.getElementById('nameofscreen').style.display='none';  
    
};

//start new game

const startnewgame = () =>{
    
    document.getElementById("newgameButton").style.display="inline";
    userNumberUpdate.setAttribute('disabled',true);
    
}

const newgameButton = () =>{
    audio.play();
}
//reload the page
const newgamebegin = () =>{
    window.location.reload();
    // audio2.play();
};

const compareguess = () =>{
    audio.play();
    const userNumber = Number(document.getElementById('inputbox').value)
    userGuess = [...userGuess,userNumber];
    document.getElementById('guesses').innerHTML=userGuess;

    // check the value low or high
    if(userGuess.length <= maxguess)
    {

    
    if(userNumber > computerGuess){
        userGuessUpdate.innerHTML =  "Your guess is High 🤩";
        userNumberUpdate.value="";
    }
    else if(userNumber < computerGuess)
    {
        userGuessUpdate.innerHTML =  "Your guess is low 😢";
        userNumberUpdate.value="";
        
    }
    else 
    {
        userGuessUpdate.innerHTML =  "Its correct 🥳";
        userNumberUpdate.value="";
        audio2.play();

        startnewgame();
         

    }
}
else 
{
    userGuessUpdate.innerHTML = 'You have lost !!!  😭'
    startnewgame();
    audio1.play();

}

    document.getElementById('attempts').innerHTML= userGuess.length - 1;
};

