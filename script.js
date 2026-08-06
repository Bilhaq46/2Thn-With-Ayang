/* ==========================================================
        HAPPY 2ND ANNIVERSARY ❤️
        SHINTA x RAFLY
        Premium Script
========================================================== */

"use strict";

/* ===========================================
ELEMENT
=========================================== */

const loader = document.getElementById("loader");
const giftBox = document.querySelector(".gift-box");
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const clickSound = document.getElementById("clickSound");
const openGift = document.getElementById("openGift");
const intro = document.getElementById("intro");

/* ===========================================
LOADER
=========================================== */

window.addEventListener("load", () => {

setTimeout(() => {

if(loader){

loader.style.opacity = "0";

loader.style.visibility = "hidden";

}

},1800);

});

/* ===========================================
OPEN GIFT
=========================================== */

if(giftBox){

giftBox.addEventListener("click",()=>{

if(openGift){

openGift.currentTime=0;

openGift.play();

}

setTimeout(()=>{

if(intro){

intro.style.display="none";

}

window.scrollTo({

top:0,

behavior:"smooth"

});

},1200);

});

}

/* ===========================================
MUSIC
=========================================== */

let playing=false;

if(musicToggle){

musicToggle.addEventListener("click",()=>{

if(clickSound){

clickSound.currentTime=0;

clickSound.play();

}

if(!playing){

bgMusic.play();

playing=true;

musicToggle.innerHTML='<i class="fa-solid fa-pause"></i>';

musicToggle.classList.add("playing");

}else{

bgMusic.pause();

playing=false;

musicToggle.innerHTML='<i class="fa-solid fa-play"></i>';

musicToggle.classList.remove("playing");

}

});

}

/* ===========================================
COUNTER
=========================================== */

const anniversaryDate = new Date("August 24, 2024 00:00:00").getTime();

const dayBox=document.getElementById("days");
const hourBox=document.getElementById("hours");
const minuteBox=document.getElementById("minutes");
const secondBox=document.getElementById("seconds");

function updateCounter(){

const now=new Date().getTime();

const distance=now-anniversaryDate;

const day=Math.floor(distance/(1000*60*60*24));

const hour=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minute=Math.floor((distance%(1000*60*60))/(1000*60));

const second=Math.floor((distance%(1000*60))/1000);

if(dayBox) dayBox.innerHTML=day;
if(hourBox) hourBox.innerHTML=hour;
if(minuteBox) minuteBox.innerHTML=minute;
if(secondBox) secondBox.innerHTML=second;

}

setInterval(updateCounter,1000);

updateCounter();

/* ===========================================
BACK TO TOP
=========================================== */

const backTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.classList.add("show");

}else{

backTop.classList.remove("show");

}

});

if(backTop){

backTop.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

/* ===========================================
SCROLL REVEAL
=========================================== */

const reveal=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveal.forEach(item=>{

const top=item.getBoundingClientRect().top;

const height=window.innerHeight-120;

if(top<height){

item.classList.add("active");

}

});

});

/* ===========================================
CURSOR GLOW
=========================================== */

const glow=document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

if(glow){

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

}

});

/* ==========================================================
                SCRIPT.JS PART 2
        MEMORY SLIDER • GALLERY • LOVE NOTES
========================================================== */

/* ===========================================
MEMORY SLIDER
=========================================== */

const memoryPhotos = document.querySelectorAll(".memory-photo");
const currentSlideNumber =
document.getElementById("currentSlideNumber");

const totalSlideNumber =
document.getElementById("totalSlideNumber");


if(totalSlideNumber){

totalSlideNumber.innerHTML =
String(memoryPhotos.length).padStart(2,"0");

}
const memoryCaption = document.getElementById("memoryCaption");
const nextBtn = document.querySelector(".memory-next");
const prevBtn = document.querySelector(".memory-prev");

const captions = [

"Setiap foto memiliki cerita indah bersama kamu ❤️",
"Senyummu selalu menjadi alasanku untuk bahagia.",
"Terima kasih sudah selalu menemani setiap langkahku.",
"Semoga semua foto ini terus bertambah setiap tahun.",
"Aku selalu suka setiap momen saat bersamamu.",
"Bersamamu, hal sederhana terasa sangat istimewa.",
"Kamu adalah rumah yang selalu ingin aku pulang.",
"Aku bangga bisa berjalan sejauh ini bersamamu.",
"Semoga kita selalu saling menggenggam tangan.",
"Aku mencintaimu lebih dari kata-kata.",
"Semoga kita selalu diberi kebahagiaan.",
"Terima kasih sudah menerima segala kurangku.",
"Aku ingin terus membuat kenangan baru denganmu.",
"Setiap tatapanmu membuatku merasa tenang.",
"Bahagia itu ternyata sesederhana melihatmu tersenyum.",
"Kamu adalah bagian terbaik dalam hidupku.",
"Aku tidak pernah menyesal memilihmu.",
"Semoga kita terus bertumbuh bersama.",
"Semoga cinta kita semakin dewasa.",
"Terima kasih karena selalu percaya padaku.",
"Aku ingin selalu ada di sampingmu.",
"Perjalanan kita masih panjang, ayo lanjut bersama.",
"Aku berharap kita bisa menua bersama.",
"Happy Anniversary Sayang ❤️",
"I Love You Shinta ❤️",
"Selamanya, jika Tuhan mengizinkan ❤️"

];

let currentSlide = 0;

function showSlide(index){

memoryPhotos.forEach((img)=>{

img.style.display="none";

});

if(currentSlideNumber){

currentSlideNumber.innerHTML =
String(index + 1).padStart(2,"0");

}

if(memoryCaption){

memoryCaption.innerHTML=captions[index];

}

}

showSlide(currentSlide);

function nextSlide(){

currentSlide++;

if(currentSlide>=memoryPhotos.length){

currentSlide=0;

}

showSlide(currentSlide);

}

function prevSlide(){

currentSlide--;

if(currentSlide<0){

currentSlide=memoryPhotos.length-1;

}

showSlide(currentSlide);

}

if(nextBtn){

nextBtn.onclick=nextSlide;

}

if(prevBtn){

prevBtn.onclick=prevSlide;

}

setInterval(nextSlide,5000);

/* ===========================================
SWIPE MOBILE
=========================================== */

let startX=0;

const slider=document.querySelector(".memory-wrapper");

if(slider){

slider.addEventListener("touchstart",(e)=>{

startX=e.touches[0].clientX;

});

slider.addEventListener("touchend",(e)=>{

let endX=e.changedTouches[0].clientX;

if(startX-endX>60){

nextSlide();

}

if(endX-startX>60){

prevSlide();

}

});

}

/* ===========================================
FULL SCREEN GALLERY
=========================================== */

const gallery=document.querySelectorAll(".gallery-grid img");

gallery.forEach(photo=>{

photo.addEventListener("click",()=>{

photo.requestFullscreen?.();

});

});

/* ===========================================
LOVE NOTES
=========================================== */

const noteText=document.getElementById("noteText");

const notes=[

"Terima kasih sudah menjadi rumah ternyaman. ❤️",

"Aku selalu bersyukur dipertemukan denganmu.",

"Kamu adalah alasan kenapa aku tersenyum.",

"Aku bangga memiliki kamu.",

"Semoga kita selalu bersama.",

"Aku mencintaimu hari ini, besok, dan seterusnya."

];

let noteIndex=0;

function changeNote(){

if(noteText){

noteText.innerHTML=notes[noteIndex];

noteIndex++;

if(noteIndex>=notes.length){

noteIndex=0;

}

}

}

setInterval(changeNote,4000);

/* ==========================================================
                SCRIPT.JS PART 3
     GALLERY MODAL • HEARTS • STARS • PETALS
========================================================== */

/* ===========================================
FULLSCREEN GALLERY MODAL
=========================================== */

const imageViewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.getElementById("closeViewer");

gallery.forEach(img=>{

img.addEventListener("click",()=>{

if(imageViewer){

imageViewer.classList.add("show");

viewerImage.src=img.src;

}

});

});

if(closeViewer){

closeViewer.onclick=()=>{

imageViewer.classList.remove("show");

};

}

if(imageViewer){

imageViewer.addEventListener("click",(e)=>{

if(e.target===imageViewer){

imageViewer.classList.remove("show");

}

});

}

/* ===========================================
FLOATING HEARTS
=========================================== */

const heartsContainer=document.getElementById("floating-hearts");

function createHeart(){

if(!heartsContainer) return;

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(16+Math.random()*20)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heartsContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,800);

/* ===========================================
TWINKLE STARS
=========================================== */

const starsContainer=document.getElementById("stars-container");

function createStar(){

if(!starsContainer) return;

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

starsContainer.appendChild(star);

setTimeout(()=>{

star.remove();

},4000);

}

setInterval(createStar,250);

/* ===========================================
ROSE PETALS
=========================================== */

const petals=document.getElementById("petals");

function createPetal(){

if(!petals) return;

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(6+Math.random()*6)+"s";

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,1800);

/* ===========================================
LOVE POPUP
=========================================== */

const lovePopup=document.getElementById("lovePopup");
const closeLovePopup=document.getElementById("closeLovePopup");

setTimeout(()=>{

if(lovePopup){

lovePopup.classList.add("show");

}

},8000);

if(closeLovePopup){

closeLovePopup.onclick=()=>{

lovePopup.classList.remove("show");

};

}

/* ===========================================
IMAGE PRELOAD
=========================================== */

memoryPhotos.forEach(photo=>{

const preload=new Image();

preload.src=photo.src;

});

/* ===========================================
KEYBOARD SUPPORT
=========================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

nextSlide();

}

if(e.key==="ArrowLeft"){

prevSlide();

}

if(e.key==="Escape" && imageViewer){

imageViewer.classList.remove("show");

}

});

/* ==========================================================
                SCRIPT.JS PART 4
      CONFETTI • CINEMATIC • PATCH UPDATE
========================================================== */

/* ===========================================
MEMORY SLIDER PATCH
=========================================== */

// Pastikan jumlah slide sesuai
if (typeof totalSlideNumber !== "undefined" && totalSlideNumber) {
    totalSlideNumber.textContent = String(memoryPhotos.length).padStart(2, "0");
}

/* ===========================================
PROGRESS BAR MEMORY
=========================================== */

const progressBar = document.getElementById("memoryProgress");

function updateProgress(){

    if(!progressBar || memoryPhotos.length===0) return;

    const percent=((currentSlide+1)/memoryPhotos.length)*100;

    progressBar.style.width=percent+"%";

}

/* update progress ketika slide berubah */

const oldShowSlide=showSlide;

showSlide=function(index){

    oldShowSlide(index);

    updateProgress();

};

updateProgress();

/* ===========================================
CONFETTI
=========================================== */

const finalButton=document.getElementById("finalButton");

if(finalButton){

finalButton.addEventListener("click",()=>{

if(typeof confetti==="function"){

confetti({

particleCount:180,

spread:90,

origin:{y:0.6}

});

}

});

}

/* ===========================================
CINEMATIC END
=========================================== */

const cinematic=document.getElementById("cinematicEnd");

if(finalButton){

finalButton.addEventListener("click",()=>{

setTimeout(()=>{

if(cinematic){

cinematic.classList.add("show");

}

},1200);

});

}

/* ===========================================
AUTO CLOSE CINEMATIC
=========================================== */

if(cinematic){

cinematic.addEventListener("click",()=>{

cinematic

/* ==========================================================
                SCRIPT.JS PART 5 (PATCH)
        BUG FIX • MUSIC • NOTES • SLIDER
========================================================== */

/* ===========================================
LOVE NOTES PATCH
=========================================== */

// Hentikan interval lama jika ada
if(window.noteInterval){
    clearInterval(window.noteInterval);
}

function updateLoveNote(){

    if(!noteText) return;

    noteText.style.transition="opacity .5s";

    noteText.style.opacity="0";

    setTimeout(()=>{

        noteText.innerHTML=notes[noteIndex];

        noteIndex++;

        if(noteIndex>=notes.length){

            noteIndex=0;

        }

        noteText.style.opacity="1";

    },500);

}

window.noteInterval=setInterval(updateLoveNote,5000);

/* ===========================================
MUSIC PATCH
=========================================== */

function updateMusicIcon(){

    if(!musicToggle) return;

    if(bgMusic.paused){

        musicToggle.innerHTML='<i class="fa-solid fa-play"></i>';

        musicToggle.classList.remove("playing");

    }else{

        musicToggle.innerHTML='<i class="fa-solid fa-pause"></i>';

        musicToggle.classList.add("playing");

    }

}

bgMusic.addEventListener("play",updateMusicIcon);

bgMusic.addEventListener("pause",updateMusicIcon);

updateMusicIcon();

/* ===========================================
MEMORY SLIDER PATCH
=========================================== */

function safeShowSlide(index){

    if(memoryPhotos.length===0) return;

    if(index>=memoryPhotos.length){

        currentSlide=0;

    }

    if(index<0){

        currentSlide=memoryPhotos.length-1;

    }

    memoryPhotos.forEach(photo=>{

        photo.style.display="none";

    });

    memoryPhotos[currentSlide].style.display="block";

    if(memoryCaption){

        memoryCaption.innerHTML=captions[currentSlide];

    }

    if(currentSlideNumber){

        currentSlideNumber.textContent=
        String(currentSlide+1).padStart(2,"0");

    }

    if(progressBar){

        progressBar.style.width=
        ((currentSlide+1)/memoryPhotos.length)*100+"%";

    }

}

/* Ganti fungsi lama */

showSlide=safeShowSlide;

showSlide(currentSlide);

/* ===========================================
PLAYLIST PATCH
=========================================== */

if(playlistPlay){

playlistPlay.addEventListener("click",()=>{

setTimeout(updateMusicIcon,100);

});

}

/* ===========================================
POPUP PATCH
=========================================== */

if(lovePopup){

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

lovePopup.classList.remove("show");

}

});

}

/* ===========================================
PRELOAD IMAGE
=========================================== */

memoryPhotos.forEach(img=>{

const image=new Image();

image.src=img.src;

});

/* ===========================================
PATCH COMPLETE
=========================================== */

console.log("Patch Part 5 Loaded ❤️");                           

/* ==========================================================
                SCRIPT.JS PART 6
      TYPING EFFECT • QUOTES • CINEMATIC
========================================================== */

/* ===========================================
TYPING EFFECT
=========================================== */

const typingText = document.getElementById("typingLetter");

const fullLetter = typingText ? typingText.innerHTML : "";

let typingIndex = 0;

function startTyping(){

    if(!typingText) return;

    typingText.innerHTML = "";

    typingIndex = 0;

    const typing = setInterval(()=>{

        typingText.innerHTML += fullLetter.charAt(typingIndex);

        typingIndex++;

        if(typingIndex >= fullLetter.length){

            clearInterval(typing);

        }

    },30);

}

/* ===========================================
AUTO START TYPING
=========================================== */

const letterSection=document.getElementById("letterSection");

let typingStarted=false;

window.addEventListener("scroll",()=>{

    if(!letterSection || typingStarted) return;

    const top=letterSection.getBoundingClientRect().top;

    if(top<window.innerHeight-120){

        typingStarted=true;

        startTyping();

    }

});

/* ===========================================
LOVE QUOTES
=========================================== */

const quoteText=document.getElementById("quoteText");

const quotes=[

"Cinta bukan tentang menemukan seseorang yang sempurna, tetapi belajar mencintai dengan sempurna. ❤️",

"Semoga setiap tahun kita selalu bersama.",

"Terima kasih sudah hadir di hidupku.",

"Kamu adalah hadiah terindah dari Tuhan.",

"Aku akan tetap memilihmu setiap hari."

];

let quoteIndex=0;

function changeQuote(){

    if(!quoteText) return;

    quoteText.style.opacity="0";

    setTimeout(()=>{

        quoteText.innerHTML=quotes[quoteIndex];

        quoteIndex++;

        if(quoteIndex>=quotes.length){

            quoteIndex=0;

        }

        quoteText.style.opacity="1";

    },400);

}

setInterval(changeQuote,7000);

/* ===========================================
CINEMATIC MESSAGE
=========================================== */

const endingMessage=document.getElementById("endingMessage");

function showEnding(){

    if(!endingMessage) return;

    endingMessage.classList.add("show");

}

if(finalButton){

    finalButton.addEventListener("click",()=>{

        setTimeout(showEnding,2500);

    });

}

/* ===========================================
AUTO SCROLL EFFECT
=========================================== */

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

sections.forEach(section=>{

observer.observe(section);

});

/* ===========================================
ENDING
=========================================== */

console.log("Script Part 6 Loaded ❤️");                           
