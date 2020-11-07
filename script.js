console.log("Hello World");

// Challenge 1: Your Age in Days
function getAgeInDays(){
    let bithYear = prompt("What's your birth day?");
    let ageInDays = (2020 - bithYear) * 365;
    let h1 = document.createElement('h1');
    let text = document.createTextNode('You are ' + ageInDays + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(text);
    document.getElementById("flex-box-result").appendChild(h1);
    // document.getElementById("flex-box-result").innerHTML = ageInDays.toString();
}

function reset(){
    console.log('Resetting');
    document.getElementById('ageInDays').remove();
}

function generatePats(){
    let img = document.createElement('img');
    let image = 'images/pats_logo.jpg';
    let height = 100;
    let link = 'https://rfathead-res.cloudinary.com/image/upload/q_auto,f_auto/c_pad,h_900/g_north,c_crop,h_900,w_900/c_pad,h_900,w_900/roomplus/14-14380_nfl_premask_NewEngland_Patriots_Logotype_2015_logo_6628.jpg';
    img.setAttribute('src', image.toString());
    // img.setAttribute('src', link.toString());
    img.setAttribute('height', height.toString());
    img.setAttribute('id', 'patsImg');
    document.getElementById('flex-box-img').appendChild(img);
}
function removePats(){
    document.getElementById('patsImg').remove();
}
function resetPats(){
    let pat;
    while(pat = document.getElementById('patsImg')){
        pat.remove();
    }
}
function rpsGame(choise){
    // console.log('Game Played!');
    let imagesDatabase = {
        'Rock': document.getElementById('Rock'),
        'Paper': document.getElementById('Paper'),
        'Scissors': document.getElementById('Scissors'),
    }
    let items = ['Rock', 'Paper', 'Scissors'];
    ran = Math.floor(Math.random() * 3);
    botChoise = items[ran];
    usrChoise = choise.id;
    console.log('YOU: ', usrChoise);
    console.log('PC: ', botChoise);
    let result = 'Not played';
    result = decideWinner(usrChoise, botChoise);
    console.log(result.res)
    // Save PC choise
    let botImage = imagesDatabase[botChoise];
    let userImage = imagesDatabase[usrChoise];
    console.log(botImage);
    console.log(userImage);
    // Remove all images
    let img;
    for (let i = 0; i < items.length; i++){
        let item = items[i];
        document.getElementById(item).remove();
    }
    // Add user choise
    userDiv = document.createElement('div');
    // userDiv.innerHTML = "<img scr='" + userImage.src + "' height=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'"
    userDiv.setAttribute('id', 'userDiv');
    let newUserImg = document.createElement('img');
    newUserImg.setAttribute('src', userImage.src);
    newUserImg.setAttribute('height', 150);
    newUserImg.style.cssText = 'box-shadow: 0px 10px 50px ' + result.usrColor;
    userDiv.appendChild(newUserImg);
    document.getElementById('flex-box-rps-div').appendChild(userDiv);
    
    // Print Result
    let text = document.createTextNode(result.res);
    let h1 = document.createElement('h1');
    h1.appendChild(text);
    
    textDiv = document.createElement('div');
    textDiv.setAttribute('id', 'textDiv');
    h1.style.cssText = 'color: ' + result.textColor;
    textDiv.appendChild(h1);
    document.getElementById('flex-box-rps-div').appendChild(textDiv);
    
    // Add PC Choise
    botDiv = document.createElement('div');
    botDiv.setAttribute('id', 'botDiv');
    let newBotImage = document.createElement('img');
    newBotImage.setAttribute('src', botImage.src);
    newBotImage.setAttribute('height', 150);
    newBotImage.style.cssText = 'box-shadow: 0px 10px 50px ' + result.botColor;
    botDiv.appendChild(newBotImage);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
function decideWinner(userChoise, botChoise){
    // Rock beats scissors, Paper beats rock, Scissors beats paper
    let result = {'res': '', 'usrColor': '', 'botColor': '', 'textColor': ''};
    if (userChoise == botChoise) result.res = 'Tied!';
    else{
        switch (userChoise){
            case 'Rock':
                if (botChoise === 'Scissors')
                    result.res = 'You won!';
                else if (botChoise === 'Paper')
                    result.res = 'You lost!';
                break;
            case 'Paper':
                if (botChoise === 'Scissors')
                    result.res = 'You lost!';
                else if (botChoise === 'Rock')
                    result.res = 'You won!';
                break;
            case 'Scissors':
                if (botChoise === 'Rock')
                    result.res = 'You lost!';
                else if (botChoise === 'Paper')
                    result.res = 'You won!';
                break;
        }
    }
    if (result.res === 'You won!'){
        result.usrColor = 'blue';
        result.botColor = 'red';
    }
    else if (result.res === 'You lost!') {
        result.usrColor = 'red';
        result.botColor = 'blue';
    }
    else {
        result.usrColor = 'rgb(222, 226, 18)';
        result.botColor = 'rgb(222, 226, 18)';
    }
    result.textColor = result.usrColor;
    console.log(result);
    return result;
}
// function rpsFrontEnd(userImage, botImage, result) {
    
// }


// Challenge 4
let buttonsCopy = document.getElementsByTagName('button');
let buttonColors = []
for (let i = 0; i < buttonsCopy.length; i++){
    buttonColors.push(buttonsCopy[i].className.toString());
}
console.log(buttonColors);

function changeColors(color){
    let buttons = document.getElementsByTagName('button');
    selectedColor = color.options[color.selectedIndex].value;
    console.log(buttonsCopy);
    console.log('Selected Color: ', selectedColor);
    let btnClasses = {
        'red': 'btn btn-danger',
        'blue': 'btn btn-primary',
        'yellow': 'btn btn-warning',
        'green': 'btn btn-success'
    };
    for (let i = 0; i < buttons.length; i++){
        if (selectedColor === 'random'){
            buttons[i].className = btnClasses[getRandomColor()];
        }
        else if (selectedColor === 'reset') {
            buttons[i].className = buttonColors[i];
        }
        else{
            buttons[i].className = btnClasses[selectedColor];
        }
    }
}

function getRandomColor() {
    let colors = ['green', 'blue', 'red', 'yellow'];
    ran = Math.floor(Math.random() * 4);
    return colors[ran];
}

// Challenge 5: Blackjack

let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsmap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const lossSound = new Audio('sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

function blackjackHit(){
    if(!blackjackGame.isStand) {
        let card = getRandomCard();
        showCard(card, YOU);
        // showCard(DEALER);
        updateScore(card, YOU);
        showScore(YOU)
    }
}

function showCard(card, activePlayer) {
    if (activePlayer.score <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = 'images/' + card + '.png';
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal() {
    // showResult(computeWinner());
    if (blackjackGame.turnsOver) {
        let yourCards = document.querySelector(YOU['div']).querySelectorAll('img');
        let dealerCards = document.querySelector(DEALER['div']).querySelectorAll('img');
        for (let i = 0; i < yourCards.length; i++) {
            yourCards[i].remove();
        }
        for (let i = 0; i < dealerCards.length; i++) {
            dealerCards[i].remove();
        }
        YOU.score = 0;
        DEALER.score = 0;
        showScore(YOU);
        showScore(DEALER);
        document.querySelector('#blackjack-result').textContent = "Let's play!";
        document.querySelector('#blackjack-result').style.color = "black";
        blackjackGame.isStand = false;
        blackjackGame.turnsOver = false;
    }
}

function getRandomCard() {
    let num = Math.floor(Math.random() * 13);
    return blackjackGame.cards[num];
}

function updateScore(card, activePlayer) {
    // If adding 11 keeps me below 21, add 11, otherwise add 1.
    if (card == 'A') {
        if (activePlayer['score'] + blackjackGame.cardsmap[card] <= 21) {
            activePlayer['score'] += blackjackGame.cardsmap[card][1];
        }
        else {
            activePlayer['score'] += blackjackGame.cardsmap[card][0];
        }
    }
    else
        activePlayer['score'] += blackjackGame.cardsmap[card];
}

function showScore(activePlayer) {
    if (activePlayer.score > 21) {
        document.querySelector(activePlayer.scoreSpan).textContent = 'BUST!';
        document.querySelector(activePlayer.scoreSpan).style.color = 'red';
    }
    else {
        document.querySelector(activePlayer.scoreSpan).style.color = 'white';
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    if (!blackjackGame.isStand) blackjackGame.isStand = true;
    while (DEALER.score < 15) {
        let card = getRandomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
    blackjackGame.turnsOver = true;
    let winner = computeWinner();
    showResult(winner);
}

function computeWinner() {
    let winner;
    if (YOU.score <= 21) {
        if (YOU.score > DEALER.score || DEALER.score > 21) {
            winner = YOU;
            blackjackGame.wins++;
        }
        else if (YOU.score < DEALER.score) {
            winner = DEALER;
            blackjackGame.losses++;
        }
        else if (YOU.score === DEALER.score) {
            blackjackGame.draws++;
        }
    }
    else if (DEALER.score <= 21) {
        winner = DEALER;
        blackjackGame.losses++;
    }
    else {
        blackjackGame.draws++;
    }
    console.log('winner is: ', winner);
    return winner;
}

function showResult(winner) {
    let message, messageColor;
    if (winner == YOU) {
        document.querySelector('#wins').textContent = blackjackGame.wins;
        message = 'You won!';
        messageColor = 'green';
        winSound.play();
    }
    else if(winner == DEALER){
        document.querySelector('#losses').textContent = blackjackGame.losses;
        message = 'You lost!';
        messageColor = 'red';
        lossSound.play();
    }
    else {
        document.querySelector('#draws').textContent = blackjackGame.draws;
        message = 'You drew!';
        messageColor = 'black';
    }
    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
}