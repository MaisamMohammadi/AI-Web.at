//#region erste Version
/*const assistentButton = document.querySelector('#assistent_button');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';

recognition.onstart = function()
{
    console.log('Voice recognition activated');
}

recognition.onresult = function(event)
{
    var text = event.results[0][0].transcript;
    console.log(text);
    answer(text);
}

function answer(text)
{
    if(text.includes('play'))
    {
        console.log('its done!');
        playMusic();
    }
    else if(text.includes('stop'))
    {
        console.log('its done!');
        stopMusic();
    }
    else if(!isNaN(text))
    {
        console.log('its done!');
        let number = parseInt(text);
        changeTon(number);
    }
}


function playMusic()
{
    var myaudio = document.querySelector('#euphoria');
    myaudio.play();
}

function stopMusic()
{
    var myaudio = document.querySelector('#euphoria');
    myaudio.pause();
}

function changeTon(number){
    var myaudio = document.querySelector('#euphoria');
    myaudio.volume = number / 100;
}*/

//#endregion


//#region Deutsch

const assistentButton = document.querySelector('#assistent_button');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'de';

recognition.onstart = function()
{
    console.log('Voice recognition activated');
}

recognition.onresult = function(event)
{
    var text = event.results[0][0].transcript;
    console.log(text);
    answer(text);
}

function answer(text)
{
    // Hier wird die Bedienungen des Assistenten geschrieben
    if(text.includes('Spiel'))
    {
        console.log('its done!');
        playMusic();
    }
    else if(text.includes('Stopp'))
    {
        console.log('its done!');
        stopMusic();
    }
    else if(!isNaN(text))
    {
        console.log('its done!');
        let number = parseInt(text);
        changeTon(number);
    }
}


function playMusic()
{
    var myaudio = document.querySelector('#euphoria');
    myaudio.play();
}

function stopMusic()
{
    var myaudio = document.querySelector('#euphoria');
    myaudio.pause();
}

function changeTon(number){
    var myaudio = document.querySelector('#euphoria');
    myaudio.volume = number / 100;
}

//#endregion 

