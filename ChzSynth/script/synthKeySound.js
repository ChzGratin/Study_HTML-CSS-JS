/*================================

작성자: 202035156 박정현
설명: 오디오 리소스 관리부

================================*/

var keySound = {}; //키음을 저장할 딕셔너리

function loadPiano() //피아노 키음 로드
{
    //0 옥타브
    keySound["C0"] = new Audio("resrc/audio/piano/C4.wav");
    keySound["Cs0"] = new Audio("resrc/audio/piano/Cs4.wav");
    keySound["D0"] = new Audio("resrc/audio/piano/D4.wav");
    keySound["Ds0"] = new Audio("resrc/audio/piano/Ds4.wav");
    keySound["E0"] = new Audio("resrc/audio/piano/E4.wav");
    keySound["F0"] = new Audio("resrc/audio/piano/F4.wav");
    keySound["Fs0"] = new Audio("resrc/audio/piano/Fs4.wav");
    keySound["G0"] = new Audio("resrc/audio/piano/G4.wav");
    keySound["Gs0"] = new Audio("resrc/audio/piano/Gs4.wav");
    keySound["A0"] = new Audio("resrc/audio/piano/A4.wav");
    keySound["As0"] = new Audio("resrc/audio/piano/As4.wav");
    keySound["B0"] = new Audio("resrc/audio/piano/B4.wav");
    //1 옥타브
    keySound["C1"] = new Audio("resrc/audio/piano/C5.wav");
    keySound["Cs1"] = new Audio("resrc/audio/piano/Cs5.wav");
    keySound["D1"] = new Audio("resrc/audio/piano/D5.wav");
    keySound["Ds1"] = new Audio("resrc/audio/piano/Ds5.wav");
    keySound["E1"] = new Audio("resrc/audio/piano/E5.wav");
    keySound["F1"] = new Audio("resrc/audio/piano/F5.wav");
    keySound["Fs1"] = new Audio("resrc/audio/piano/Fs5.wav");
    keySound["G1"] = new Audio("resrc/audio/piano/G5.wav");
    keySound["Gs1"] = new Audio("resrc/audio/piano/Gs5.wav");
    keySound["A1"] = new Audio("resrc/audio/piano/A5.wav");
    keySound["As1"] = new Audio("resrc/audio/piano/As5.wav");
    keySound["B1"] = new Audio("resrc/audio/piano/B5.wav");
    //2 옥타브
    keySound["C2"] = new Audio("resrc/audio/piano/C6.wav");
    keySound["Cs2"] = new Audio("resrc/audio/piano/Cs6.wav");
    keySound["D2"] = new Audio("resrc/audio/piano/D6.wav");
    keySound["Ds2"] = new Audio("resrc/audio/piano/Ds6.wav");
    keySound["E2"] = new Audio("resrc/audio/piano/E6.wav");
    keySound["F2"] = new Audio("resrc/audio/piano/F6.wav");
    keySound["Fs2"] = new Audio("resrc/audio/piano/Fs6.wav");
    keySound["G2"] = new Audio("resrc/audio/piano/G6.wav");
}

function loadBandoneon() //반도네온 키음 로드
{
    //0 옥타브
    keySound["C0"] = new Audio("resrc/audio/bandoneon/C4.wav");
    keySound["Cs0"] = new Audio("resrc/audio/bandoneon/Cs4.wav");
    keySound["D0"] = new Audio("resrc/audio/bandoneon/D4.wav");
    keySound["Ds0"] = new Audio("resrc/audio/bandoneon/Ds4.wav");
    keySound["E0"] = new Audio("resrc/audio/bandoneon/E4.wav");
    keySound["F0"] = new Audio("resrc/audio/bandoneon/F4.wav");
    keySound["Fs0"] = new Audio("resrc/audio/bandoneon/Fs4.wav");
    keySound["G0"] = new Audio("resrc/audio/bandoneon/G4.wav");
    keySound["Gs0"] = new Audio("resrc/audio/bandoneon/Gs4.wav");
    keySound["A0"] = new Audio("resrc/audio/bandoneon/A4.wav");
    keySound["As0"] = new Audio("resrc/audio/bandoneon/As4.wav");
    keySound["B0"] = new Audio("resrc/audio/bandoneon/B4.wav");
    //1 옥타브
    keySound["C1"] = new Audio("resrc/audio/bandoneon/C5.wav");
    keySound["Cs1"] = new Audio("resrc/audio/bandoneon/Cs5.wav");
    keySound["D1"] = new Audio("resrc/audio/bandoneon/D5.wav");
    keySound["Ds1"] = new Audio("resrc/audio/bandoneon/Ds5.wav");
    keySound["E1"] = new Audio("resrc/audio/bandoneon/E5.wav");
    keySound["F1"] = new Audio("resrc/audio/bandoneon/F5.wav");
    keySound["Fs1"] = new Audio("resrc/audio/bandoneon/Fs5.wav");
    keySound["G1"] = new Audio("resrc/audio/bandoneon/G5.wav");
    keySound["Gs1"] = new Audio("resrc/audio/bandoneon/Gs5.wav");
    keySound["A1"] = new Audio("resrc/audio/bandoneon/A5.wav");
    keySound["As1"] = new Audio("resrc/audio/bandoneon/As5.wav");
    keySound["B1"] = new Audio("resrc/audio/bandoneon/B5.wav");
    //2 옥타브
    keySound["C2"] = new Audio("resrc/audio/bandoneon/C6.wav");
    keySound["Cs2"] = new Audio("resrc/audio/bandoneon/Cs6.wav");
    keySound["D2"] = new Audio("resrc/audio/bandoneon/D6.wav");
    keySound["Ds2"] = new Audio("resrc/audio/bandoneon/Ds6.wav");
    keySound["E2"] = new Audio("resrc/audio/bandoneon/E6.wav");
    keySound["F2"] = new Audio("resrc/audio/bandoneon/F6.wav");
    keySound["Fs2"] = new Audio("resrc/audio/bandoneon/Fs6.wav");
    keySound["G2"] = new Audio("resrc/audio/bandoneon/G6.wav");
}