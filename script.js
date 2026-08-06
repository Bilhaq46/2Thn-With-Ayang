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
