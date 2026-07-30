const opening = document.getElementById("opening");
const mainWedding = document.getElementById("mainWedding");
const music = document.getElementById("music");



function openInvitation(){


opening.style.transition="1s";

opening.style.opacity="0";


setTimeout(()=>{


opening.style.display="none";


mainWedding.style.display="block";


window.scrollTo({

top:0,
behavior:"smooth"

});


music.play().catch(()=>{});


},1000);



}





function toggleMusic(){


if(music.paused){

music.play();

}else{

music.pause();

}


}







const weddingDate = new Date(
"August 21, 2026 19:00:00"
).getTime();




function updateCountdown(){


const now = new Date().getTime();


const distance = weddingDate - now;



if(distance <= 0){

return;

}



const days = Math.floor(
distance /
(1000*60*60*24)
);



const hours = Math.floor(
(distance %
(1000*60*60*24))
/
(1000*60*60)
);



const minutes = Math.floor(
(distance %
(1000*60*60))
/
(1000*60)
);



const seconds = Math.floor(
(distance %
(1000*60))
/
1000
);




document.getElementById("days").innerHTML =
days.toString().padStart(2,"0");

document.getElementById("hours").innerHTML =
hours.toString().padStart(2,"0");

document.getElementById("minutes").innerHTML =
minutes.toString().padStart(2,"0");

document.getElementById("seconds").innerHTML =
seconds.toString().padStart(2,"0");



}



setInterval(updateCountdown,1000);

updateCountdown();






// ظهور العناصر عند النزول


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{
threshold:.2

});



document.querySelectorAll(".reveal")
.forEach((element)=>{

observer.observe(element);

});
