function enterInvitation(){

    document.getElementById("intro").style.display="none";

    document.getElementById("invitation")
    .classList.remove("hidden");

    let music=document.getElementById("music");

    music.play().catch(()=>{});

}


function toggleMusic(){

    let music=document.getElementById("music");

    if(music.paused){
        music.play();
    }else{
        music.pause();
    }

}



let weddingDate = new Date("August 21, 2026 19:00:00").getTime();


function countdown(){

    let now = new Date().getTime();

    let distance = weddingDate - now;


    if(distance < 0){
        document.getElementById("timer").innerHTML="تم بحمد الله 🤍";
        return;
    }


    let days=Math.floor(distance/(1000*60*60*24));

    let hours=Math.floor(
    (distance%(1000*60*60*24))/(1000*60*60)
    );

    let minutes=Math.floor(
    (distance%(1000*60*60))/(1000*60)
    );

    let seconds=Math.floor(
    (distance%(1000*60))/1000
    );


    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

}


setInterval(countdown,1000);
countdown();
