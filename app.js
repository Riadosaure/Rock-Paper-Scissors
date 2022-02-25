// Mes interractions avec le DOM
const btn_rock = document.getElementById('rock');
const btn_paper = document.getElementById('paper');
const btn_scissors = document.getElementById('scissors');
const bodyEl = document.querySelector('body');

const pictureChoicePlayerEl = document.getElementById('pictureChoicePlayer');
const pictureChoiceBotEl = document.getElementById('pictureChoiceBot');

const playerScoreEl = document.getElementById('playerScore');
const botScoreEl = document.getElementById('botScore');

const felicitationEl = document.getElementById('felicitation');

//Mes outils algorithmiques
const items = ['rock', 'paper', 'scissors'];
let choiceBot = "";
let choicePlayer = "";
let scorePlayer = 0;
let scoreBot = 0;

//Mes fonctions algorithmiques
function createRandomNumber()
{
    return (Math.floor(Math.random() * 3));
};

function compareChoices(choicePlayer, choiceBot)
{
    if((choicePlayer === 'rock' && choiceBot === 'paper') || (choicePlayer === 'scissors' && choiceBot === 'rock') || (choicePlayer === 'paper' && choiceBot == 'scissors'))
    {
        scoreBot++;
        botScoreEl.value = scoreBot;
        felicitationEl.innerText = 'Ouch! try again...';
        bodyEl.style.backgroundColor = 'red';
        setTimeout(()=>bodyEl.style.backgroundColor = 'white', 100);       
    }
    else if((choicePlayer === 'paper' && choiceBot === 'rock') || (choicePlayer === 'rock' && choiceBot === 'scissors') || (choicePlayer === 'scissors' && choiceBot == 'paper'))
    {
        scorePlayer++;
        playerScoreEl.value = scorePlayer;
        felicitationEl.innerText = 'Good choice! One more time...';
        felicitationEl.style.color = 'lime';
        setTimeout(()=>felicitationEl.style.color = 'black', 700);
    }
    else
    {
        felicitationEl.innerText = 'It\'s a tie!';
        felicitationEl.style.color = 'black';
    }
};

function finishTheGame(scorePlayer, scoreBot)
{
    if(scorePlayer === 3)
    {
        felicitationEl.innerText = 'Royal Victory for Player';
        felicitationEl.style.color = 'lime';
        // window.setTimeout( ()=>{
        //     window.document.href="index.html";
        // }, 5000);        
        setTimeout(reload, 5000);
    }
    else if (scoreBot === 3)
    {
        felicitationEl.innerText = 'Royal Victory for Bot';
        felicitationEl.style.color = 'red';
        //location.reload();
        // window.setTimeout( ()=>{
        //     window.document.href="index.html";
        // }, 5000);
        setTimeout(reload, 5000);
    } 
};

function reload()
{
    return location.reload();
}


function resetScores(scorePlayer, scoreBot)
{
    scoreBot = 0;
    scorePlayer = 0;
    botScoreEl.value = 0;
    playerScoreEl.value = 0;
    felicitationEl.innerText = '';
};



// Mes Evenements au 'click'
btn_rock.addEventListener('click', function(){
    choiceBot = items[createRandomNumber()];
    choicePlayer = items[0];
    pictureChoiceBotEl.src= 'image/'+choiceBot+'.png';
    pictureChoicePlayerEl.src = 'image/rock.png';
    compareChoices(choicePlayer, choiceBot);
    finishTheGame(scorePlayer, scoreBot);
});

btn_paper.addEventListener('click', function(){
    choiceBot = items[createRandomNumber()];
    choicePlayer = items[1];
    pictureChoicePlayerEl.src = 'image/paper.png';
    pictureChoiceBotEl.src= 'image/'+choiceBot+'.png';
    compareChoices(choicePlayer, choiceBot);
    finishTheGame(scorePlayer, scoreBot);
});

btn_scissors.addEventListener('click', function(){
    choiceBot = items[createRandomNumber()];
    choicePlayer = items[2];
    pictureChoicePlayerEl.src = 'image/scissors.png';
    pictureChoiceBotEl.src= 'image/'+choiceBot+'.png';
    compareChoices(choicePlayer, choiceBot);
    finishTheGame(scorePlayer, scoreBot);
});





