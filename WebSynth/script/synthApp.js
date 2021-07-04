/*================================

작성자: 202035156 박정현
설명: 신디사이저 구현부

================================*/

//악기 코드, SetInstrument()에서 사용
const instrumentID_Piano     = "piano";
const instrumentID_Bandoneon = "bandoneon";

//색 문자열 상수, SetInstrument()에서 사용
const color_KeyWhite  = "ivory";
const color_KeyBlack  = "#212121"
const color_KeyDown   = "gold";
const color_Pedal     = "#f2f2f2"; //회색 (95%)
const color_Piano     = "#1a1a1a"; //회색 (10%)
const color_Bandoneon = "maroon"; //적갈색

//global 변수
var isRunning = false; //신디사이저 실행 여부

//DOM 객체
var keyGraphics = {}; //키
var pedalGraphics; //페달
var synthGraphics; //신디사이저
var vol; //볼륨 슬라이더
var inst; //악기 셀렉터

window.addEventListener("load", loadGraphics); //페이지가 로드되면 DOM 객체를 로드
function loadGraphics() //DOM 객체 로드
{
    for(var key in keyState) { keyGraphics[key] = document.getElementById(key); }
    synthGraphics = document.getElementById("synthBody");
    pedalGraphics = document.getElementById("synthPedal");

    vol = document.getElementById("volume");
    inst = document.getElementById("instrument");
}

function Run() //신디사이저 실행
{
    if(!isRunning) //신디사이저를 실행하지 않았다면,
    {
        //키 입력 함수 등록
        document.addEventListener("keyup", getKeyUp);
        document.addEventListener("keydown", getKeyDown);

        SetInstrument(); //키음 로드 (피아노)
        SetVolume(); //볼륨 설정

        setInterval(Update, 1000 / 60); //60 FPS로 처리

        synthGraphics.style.opacity = 1.0;

        isRunning = true;
    }
    else { alert("신디사이저가 이미 실행중입니다!"); } //신디사이저가 이미 실행중이라면,
}

function Update() //신디사이저 프로그램
{
    for(var key in keyState)
    {
        const ks = keyState[key];

        //키 그래픽 처리
        if(ks & KS_UP) { keyGraphics[key].style.backgroundColor = (keyGraphics[key].className == "whiteKey")? color_KeyWhite : color_KeyBlack; }
        else { keyGraphics[key].style.backgroundColor = color_KeyDown; }

        //페달 그래픽 처리
        if(PedalState & KS_UP) { pedalGraphics.style.backgroundColor = color_Pedal; }
        else { pedalGraphics.style.backgroundColor = color_KeyDown; }
        
        //뮤트 처리
        if((PedalState & KS_UP) && (ks & KS_UP)) //페달x, 키를 뗌
        {
            if(!keySound[key].paused) //재생중이라면
            {
                keySound[key].pause();
                keySound[key].currentTime = 0;
            }
            keyState[key] = (ks & KS_MASK_KEY) | KS_MUTE;
        }

        //키음 재생
        if(ks & KS_HIT)
        {
            keySound[key].pause();
            keySound[key].currentTime = 0;
            keySound[key].play();
            keyState[key] = (ks & KS_MASK_KEY) | KS_SUSTAIN;
        }
    }
}

function SetVolume() //볼륨 설정
{
    var newVol = vol.value / vol.max;
    for(var key in keySound) { keySound[key].volume = newVol; }
}

function SetInstrument() //악기 설정, 신디사이저 색 변경
{
    switch(inst.value)
    {
    case instrumentID_Piano:
        loadPiano();
        synthGraphics.style.backgroundColor = color_Piano;
        break;
    case instrumentID_Bandoneon:
        loadBandoneon();
        synthGraphics.style.backgroundColor = color_Bandoneon; //적갈색
        break;
    }
    SetVolume();
}