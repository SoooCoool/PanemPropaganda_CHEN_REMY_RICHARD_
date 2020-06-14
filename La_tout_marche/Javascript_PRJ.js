/******************* REBELLES *******************/
function play()
{
    var audio = new Audio("Page des rebelles/hanging_tree.mp3");
    audio.play();
}

function cool_button()
{
    var audio = new Audio("hanging_tree.mp3");
    audio.play();
    window.open("Page des rebelles/Page_rebelles.html");
    document.getElementById("ans_").innerHTML = "";
    document.getElementById("button_d").innerHTML = " ";
}
/*********************************************************/
/******************* VIDEO YT CAPITOLTV *******************/
var Hymne = new Audio("img/HymneCapitol.mp3")

Hymne.oncanplaythrough = function()
{
    Hymne.play();
}
Hymne.loop = false;
Hymne.autoplay = true;

/*********************************************************/
var HymneCapitol=document.createElement('HymneCapitol');
    HymneCapitol.setAttribute('src','img/HymneCapitol.mp3');
    HymneCapitol.play();