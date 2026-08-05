const button = document.getElementById('startBtn');
const next = document.getElementById('nextSection');

const slide = document.getElementById('slide');
const caption = document.getElementById('caption');

const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

const photos = [
  'assets/photos/1.jpg',
  'assets/photos/2.jpg',
  'assets/photos/3.jpg',
  'assets/photos/4.jpg',
  'assets/photos/5.jpg',
  'assets/photos/6.jpg',
  'assets/photos/7.jpg',
  'assets/photos/8.jpg',
  'assets/photos/9.jpg',
  'assets/photos/10.jpg',
  'assets/photos/11.jpg',
  'assets/photos/12.jpg',
  'assets/photos/13.jpg',
  'assets/photos/14.jpg',
  'assets/photos/15.jpg',
  'assets/photos/16.jpg',
  'assets/photos/17.jpg',
  'assets/photos/18.jpg',
  'assets/photos/19.jpg',
  'assets/photos/20.jpg',
  'assets/photos/21.jpg',
  'assets/photos/22.jpg',
  'assets/photos/23.jpg',
  'assets/photos/24.jpg',
  'assets/photos/25.jpg',
  'assets/photos/26.jpg'
];

const captions = [
  'Awal dari semua cerita kita ❤️',
  'Setiap senyummu adalah bahagiaku 😊',
  'Terima kasih sudah selalu ada 🤍',
  'Bersamamu semua terasa indah 🌹',
  'Menuju selamanya bersama 💍'
];

let current = 0;

button.onclick = async () => {
  next.style.display = 'block';
  next.scrollIntoView({ behavior:'smooth' });

  try{
    await music.play();
  }catch(e){
    console.log(e);
  }

  button.style.display = 'none';
};

musicBtn.onclick = async () => {
  if(music.paused){
    await music.play();
    musicBtn.textContent = '⏸️';
  }else{
    music.pause();
    musicBtn.textContent = '🎵';
  }
};

setInterval(()=>{
  current = (current + 1) % photos.length;

  slide.style.opacity = '0';

  setTimeout(()=>{
    slide.src = photos[current];
    caption.textContent = captions[current % captions.length];
    slide.style.opacity = '1';
  },400);
},3000);

const anniversary = new Date('2024-08-24T00:00:00');

setInterval(()=>{
  const now = new Date();
  const diff = now - anniversary;

  document.getElementById('days').textContent =
    Math.floor(diff / (1000*60*60*24));

  document.getElementById('hours').textContent = now.getHours();
  document.getElementById('minutes').textContent = now.getMinutes();
  document.getElementById('seconds').textContent = now.getSeconds();
},1000);
