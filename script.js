function openWedding(){

document.getElementById("cover").style.display="none";

document.getElementById("wedding").style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

let music = document.getElementById("music");

music.play().catch(()=>{});

}




function toggleMusic(){

let music = document.getElementById("music");


if(music.paused){

music.play();

}else{

music.pause();

}

}




let weddingDate = new Date("August 21, 2026 19:00:00").getTime();



setInterval(function(){


let now = new Date().getTime();

let distance = weddingDate - now;



if(distance < 0){
return;
}



document.getElementById("days").innerHTML =
Math.floor(distance/(1000*60*60*24));



document.getElementById("hours").innerHTML =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));



document.getElementById("minutes").innerHTML =
Math.floor((distance%(1000*60*60))/(1000*60));



document.getElementById("seconds").innerHTML =
Math.floor((distance%(1000*60))/1000);



},1000);
