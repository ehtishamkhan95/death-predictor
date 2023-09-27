const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
'September', 'October', 'November', 'December'];

const deathCause = ['Elephant Attack', 'Road Accident', 'Plane Crash', 'snake bite',
'burned alive', 'fall to death', 'quick sand', 'elevator collapse', 'gas leak explosion',
'crazy clown', 'drowning', 'serial killer', 'slippery floor', 'electrocution'];

let dMonth;
let dDay;
let dYear;
let dAge;
let imgSrc;

let form = document.getElementById('message-form');
let username = document.getElementById('username');
let age = document.getElementById('age');
let message = document.getElementById('death-message');
let enteryMessage = document.getElementById('entry-message');

let image = document.getElementById('gif-image');
let tryAgainBtn = document.getElementById('try-again');
let bgm = document.getElementById('bg-music');
let music = document.getElementById('music');

function deathMonth () {
    let randomMonthNumber = Math.floor(Math.random()*12);
    dMonth = months[randomMonthNumber];
};

function deathDay () {
    let randomDayNumber

    if (dMonth[0] === 'January' || dMonth[0] === 'March' || dMonth[0] === 'May' ||
    dMonth[0] === 'July' || dMonth[0] === 'August' || dMonth[0] === 'October' ||
    dMonth[0] === 'December') {
        randomDayNumber = Math.floor(Math.random()*32);

    } else if (dMonth[0] === 'February') {
        randomDayNumber = Math.floor(Math.random()*29);

    } else {
        randomDayNumber = Math.floor(Math.random()*31);
    }

    dDay= randomDayNumber;
};

function deathAge (age) {
    dAge = Math.floor(Math.random()*41+age);
}

function deathYear (age) {
    let currentYear = new Date().getFullYear();
    dYear = (dAge - age) + currentYear;
}

function cause () {
    let randomCauseNumber = Math.floor(Math.random()*(deathCause.length));
    return deathCause[randomCauseNumber];
}

function selectGif (cause) {
    switch (cause) {
        case deathCause[0]:
            imgSrc = './assets/gifs/elephant-attack.gif';
            break;
        case deathCause[1]:
            imgSrc = './assets/gifs/road-accident.gif';
            break;
        case deathCause[2]:
            imgSrc = './assets/gifs/plane-crash.gif';
            break;
        case deathCause[3]:
            imgSrc = './assets/gifs/snake-venom.gif';
            break;
        case deathCause[4]:
            imgSrc= './assets/gifs/burned-alive.gif';
            break;
        case deathCause[5]:
            imgSrc = './assets/gifs/falling.gif';
            break;
        case deathCause[6]:
            imgSrc = './assets/gifs/quick-sand.gif';
            break;
        case deathCause[7]:
            imgSrc = './assets/gifs/elevator-collapse.gif';
            break;
        case deathCause[8]:
            imgSrc = './assets/gifs/gas-leak-explosion.gif';
            break;
        case deathCause[9]:
            imgSrc = './assets/gifs/crazy-clown.gif';
            break;
        case deathCause[10]:
            imgSrc = './assets/gifs/drowning.gif';
            break;
        case deathCause[11]:
            imgSrc = './assets/gifs/serial-killer.gif';
            break;
        case deathCause[12]:
            imgSrc = './assets/gifs/slippery-floor.gif';
            break;
        case deathCause[13]:
            imgSrc = './assets/gifs/electrocution.gif'
    }
}

function userNameValidation(){
    if(username.value.trim() === '') {
      username.placeholder = 'Give a Name!'
      return false;
    } else {
      return true;
    }
  }

function ageValidation(){
    if(age.value.trim() === '' || isNaN(age.value)) {
      age.placeholder = 'Give Your Age!';
      return false;
    } else {
      return true;
    }
  }

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let userCheck = userNameValidation();
    let ageCheck = ageValidation();

    if (userCheck && ageCheck ){
        deathMonth();
        deathDay();
        deathAge(parseInt(age.value));
        deathYear(parseInt(age.value));

        let dCause = cause();

        

        message.innerHTML = `${username.value}, you will die on <span style="color:#8a0303">${dMonth}, ${dDay} ${dYear}</span> at the age of <span style="color:#8a0303">${dAge}</span>. 
        Cause of your death will be:<br><span style="color:#8a0303;font-size:3rem">${dCause}</span>`;

        selectGif(dCause);

        image.style.visibility = 'visible';
        image.src = imgSrc;

        tryAgainBtn.style.visibility = 'visible';

        form.style.display = 'none';
        enteryMessage.style.display = 'none';

        bgm.src = './assets/music/end.mp3';
        music.load();
        
    }
});
