window.addEventListener('DOMContentLoaded', () => {
    let background = document.getElementById("main");
    let width = document.querySelector(".main");
    let line = document.querySelector(".line");
    let winner = document.querySelector(".winner__title");
    let winnerPopUp = document.querySelector(".winner");
    let character = document.querySelector(".character");
    let btn = document.querySelector(".btn");
    
    let item = 0;
    let WhoWin = "";
    let column = [{
    
    }]
    
    
    let characters = [
        {
            quote: "Ты станешь королем пиратов",
            name: "Mugivara",
            url: './img/characters/luffy.png'
        },
        {
            quote: "Ладно, не буду писать твое имя",
            name: "Kira",
            url: './img/characters/Kira.png'
        },
        {
            quote: "Ты станешь хокаге",
            name: "Naruto",
            url: './img/characters/Naruto.png'
        },
        {
            quote: "О, повезло, повезло",
            name: "Povezlo",
            url: './img/characters/povezlo.png'
        },
        
    
    ]
    alert
    let output = 0;
    let num = 2;
    let increment = 0;
    let Player1 = [];
    let Player2 = [];
    function init() {
        for(let i = 1; i < 10; i++) {
            let div = document.createElement('div');
            div.className = "block " + i.toString();
            background.append(div);
        }
    }
    init();
    background.addEventListener('click', (e) => {
        if(e.target.classList.contains('block')) {
                if((!e.target.classList.contains('null')) && (!e.target.classList.contains('cross'))) {
                     if(num % 2 == 0) {
                        e.target.classList.add('cross');
                         let index = e.target.className.split(' ')[1];
                        column[0][index] = 'x';   
                        increment++;
                        num++;
                        item++;
                     }
                }
                if((!e.target.classList.contains('null')) && (!e.target.classList.contains('cross'))) {
                    if(num % 2 == 1) {
                       e.target.classList.add('null');
                        let index = e.target.className.split(' ')[1];
                       column[0][index] = 'o';   
                       increment++;
                       num++;
                       item++;
                    }
                }
        }
        check();
    })
    const char = () => {
        let random = Math.floor(Math.random() * (characters.length - 0) + 0);
        character.style.backgroundImage = 'url('+characters[random].url+')';
        winner.innerHTML = WhoWin + " Красавчик. " + characters[random].quote;
    }
    function check() {
        if((column[0]['1'] == 'x' && column[0]['2'] == 'x' && column[0]['3'] == 'x') || (column[0]['4']  == 'x' && column[0]['5']  == 'x' && column[0]['6'] == 'x') || (column[0]['7'] == 'x' && column[0]['8'] == 'x' && column[0]['9'] == 'x')) {
            WhoWin = "X";
        } 
         if((column[0]['1']  == 'o' && column[0]['2']  == 'o' && column[0]['3']  == 'o') || (column[0]['4']  == 'o' && column[0]['5']  == 'o' && column[0]['6'] == 'o') || (column[0]['7']  == 'o' && column[0]['8']  == 'o' && column[0]['9'] == 'o')) {
            WhoWin = "0";
        }
        if((column[0]['1'] == 'x' && column[0]['4'] == 'x' && column[0]['7'] == 'x') || (column[0]['2']  == 'x' && column[0]['5']  == 'x' && column[0]['8'] == 'x') || (column[0]['3'] == 'x' && column[0]['6'] == 'x' && column[0]['9'] == 'x')) {
            WhoWin = "X";
        } 
        if((column[0]['1']  == 'o' && column[0]['4']  == 'o' && column[0]['7']  == 'o') || (column[0]['2']  == 'o' && column[0]['5']  == 'o' && column[0]['8'] == 'o') || (column[0]['3']  == 'o' && column[0]['6']  == 'o' && column[0]['9'] == 'o')) {
            WhoWin = "0";
        }
        if((column[0]['1'] == 'x' && column[0]['5'] == 'x' && column[0]['9'] == 'x') || (column[0]['3'] == 'x' && column[0]['5'] == 'x' && column[0]['7'] == 'x')) {
            WhoWin = "X";
        } else if((column[0]['3']  == 'o' && column[0]['5']  == 'o' && column[0]['7']  == 'o') || (column[0]['1']  == 'o' && column[0]['5']  == 'o' && column[0]['9']  == 'o')) {
            WhoWin = "0";
        }
        if(WhoWin != '') {
            char();
            width.classList.toggle('main-blur');
            winnerPopUp.classList.toggle('anim');
        }
        if(item == 9 && WhoWin == '') {
            winner.innerHTML = "РќРёРєС‚Рѕ РЅРµ РїРѕР±РµРґРёР»";
            character.style.backgroundImage = " url('./img/characters/ooo.jpg') ";
            width.classList.toggle('main-blur');
            winnerPopUp.classList.toggle('anim');
        }
    }
     btn.addEventListener('click', () => {
         location.reload();
     })
    
    let video;
    video = document.querySelectorAll(".video");
    
    window.addEventListener('click', () => {
        video.forEach(item => {
            if(item.paused) {
                item.play();
            }
        })
    })
    
    })