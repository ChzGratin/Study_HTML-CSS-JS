/*================================

작성자: 202035156 박정현
설명: 키 입력 처리부

================================*/

//키의 상태(Key State)를 나타내는 플래그 선언

//키 그래픽에 사용할 플래그
const KS_UP         = 0b00001; //키를 누르지 않음
const KS_DOWN       = 0b00010; //키를 누름
//키음 재생에 사용할 플래그
const KS_MUTE       = 0b00100; //키음 재생하지 않음
const KS_HIT        = 0b01000; //키음 재생 요청
const KS_SUSTAIN    = 0b10000; //키음 재생중
//마스크
const KS_MASK_KEY   = KS_UP | KS_DOWN;
const KS_MASK_SOUND = KS_MUTE | KS_HIT | KS_SUSTAIN;
//플래그의 초기값
const KS_INIT       = KS_UP | KS_MUTE;

var keyState = {}; //키의 상태를 저장할 딕셔너리
//0 옥타브
keyState["C0"] = KS_INIT;
keyState["Cs0"] = KS_INIT;
keyState["D0"] = KS_INIT;
keyState["Ds0"] = KS_INIT;
keyState["E0"] = KS_INIT;
keyState["F0"] = KS_INIT;
keyState["Fs0"] = KS_INIT;
keyState["G0"] = KS_INIT;
keyState["Gs0"] = KS_INIT;
keyState["A0"] = KS_INIT;
keyState["As0"] = KS_INIT;
keyState["B0"] = KS_INIT;
//1 옥타브
keyState["C1"] = KS_INIT;
keyState["Cs1"] = KS_INIT;
keyState["D1"] = KS_INIT;
keyState["Ds1"] = KS_INIT;
keyState["E1"] = KS_INIT;
keyState["F1"] = KS_INIT;
keyState["Fs1"] = KS_INIT;
keyState["G1"] = KS_INIT;
keyState["Gs1"] = KS_INIT;
keyState["A1"] = KS_INIT;
keyState["As1"] = KS_INIT;
keyState["B1"] = KS_INIT;
//2 옥타브
keyState["C2"] = KS_INIT;
keyState["Cs2"] = KS_INIT;
keyState["D2"] = KS_INIT;
keyState["Ds2"] = KS_INIT;
keyState["E2"] = KS_INIT;
keyState["F2"] = KS_INIT;
keyState["Fs2"] = KS_INIT;
keyState["G2"] = KS_INIT;

//소스테누토 페달 (sostenuto pedal)
PedalState = KS_UP;

Object.seal(keyState); //정말 중요한 부분!! keyState에 새로운 원소를 추가할 수 없도록 봉인(seal)

var keyMap = {}; //입력된 키(KeyboardEvent.code)를 신디사이저의 키에 맵핑
//0 옥타브
keyMap["KeyZ"] = "C0";
keyMap["KeyS"] = "Cs0";
keyMap["KeyX"] = "D0";
keyMap["KeyD"] = "Ds0";
keyMap["KeyC"] = "E0";
keyMap["KeyV"] = "F0";
keyMap["KeyG"] = "Fs0";
keyMap["KeyB"] = "G0";
keyMap["KeyH"] = "Gs0";
keyMap["KeyN"] = "A0";
keyMap["KeyJ"] = "As0";
keyMap["KeyM"] = "B0";
//1 옥타브
keyMap["KeyQ"] = "C1";
keyMap["Digit2"] = "Cs1";
keyMap["KeyW"] = "D1";
keyMap["Digit3"] = "Ds1";
keyMap["KeyE"] = "E1";
keyMap["KeyR"] = "F1";
keyMap["Digit5"] = "Fs1";
keyMap["KeyT"] = "G1";
keyMap["Digit6"] = "Gs1";
keyMap["KeyY"] = "A1";
keyMap["Digit7"] = "As1";
keyMap["KeyU"] = "B1";
//2 옥타브
keyMap["KeyI"] = "C2";
keyMap["Digit9"] = "Cs2";
keyMap["KeyO"] = "D2";
keyMap["Digit0"] = "Ds2";
keyMap["KeyP"] = "E2";
keyMap["BracketLeft"] = "F2";
keyMap["Equal"] = "Fs2";
keyMap["BracketRight"] = "G2";

//1 옥타브 공용 키(',' ~ '/' = 'Q' ~ 'E')
keyMap["Comma"] = "C1";
keyMap["KeyL"] = "Cs1";
keyMap["Period"] = "D1";
keyMap["Semicolon"] = "Ds1";
keyMap["Slash"] = "E1";

//편의성을 위한 공용 키 추가
keyMap["ShiftRight"] = "F1";
keyMap["Enter"] = "Fs1";
keyMap["Tab"] = "B0";
keyMap["Backquote"] = "As0";

Object.seal(keyMap); //정말 중요한 부분!! keyMap에 새로운 원소를 추가할 수 없도록 봉인(seal)

//키를 떼었을 때, keyState를 갱신 (keyup 이벤트)
function getKeyUp(e)
{
    var ks = keyState[keyMap[e.code]];
    keyState[keyMap[e.code]] = KS_UP | (ks & KS_MASK_SOUND);

    //소스테누토 페달
    if(e.code == "Space") { PedalState = KS_UP; }
}
            
//키를 눌렀을 때, keyState를 갱신 (keydown 이벤트)
//keydown 이벤트는 키를 누르는 동안 계속 발생되므로, KS_UP인 키만 (KS_DOWN | (ks & KS_MASK_SOUND) | KS_HIT)으로 갱신할 것!
function getKeyDown(e)
{
    var ks = keyState[keyMap[e.code]];
    if(ks & KS_UP) { keyState[keyMap[e.code]] = KS_DOWN | (ks & KS_MASK_SOUND) | KS_HIT; }

    //소스테누토 페달
    if(e.code == "Space")
    {
        if(PedalState & KS_UP) { PedalState = KS_DOWN; }
        
        e.preventDefault(); //스페이스바에 의한 스크롤 방어
    }

    if(e.code == "Tab") { e.preventDefault(); } //탭키 방어
}