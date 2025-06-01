// Efek pengetikan nama
const namaLengkap = "Muhammad Putra Purwono";
let i = 0;
function ketikNama() {
  if (i < namaLengkap.length) {
    document.getElementById("namaKetik").innerHTML += namaLengkap.charAt(i);
    i++;
    setTimeout(ketikNama, 100);
  }
}
ketikNama();

// Elemen efek
const rainContainer = document.getElementById('rain');
const starsContainer = document.getElementById('stars');

// Fungsi buat hujan
function createRain() {
  rainContainer.innerHTML = '';
  for(let i=0; i<100; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    drop.style.left = Math.random() * 100 + 'vw';
    drop.style.animationDuration = 0.5 + Math.random() * 0.5 + 's';
    drop.style.animationDelay = Math.random() * 1 + 's';
    drop.style.opacity = Math.random() * 0.5 + 0.3;
    rainContainer.appendChild(drop);
  }
}

// Fungsi buat bintang
function createStars() {
  starsContainer.innerHTML = '';
  for(let i=0; i<80; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.width = star.style.height = (Math.random() * 1.5 + 0.5) + 'px';
    star.style.animationDuration = (1 + Math.random()*2) + 's';
    starsContainer.appendChild(star);
  }
  createShootingStar();
}

// Fungsi buat bintang jatuh
function createShootingStar() {
  const shootingStar = document.createElement('div');
  shootingStar.classList.add('star');
  shootingStar.style.width = '3px';
  shootingStar.style.height = '80px';
  shootingStar.style.background = 'linear-gradient(45deg, white, rgba(255,255,255,0))';
  shootingStar.style.borderRadius = '50%';
  shootingStar.style.position = 'absolute';
  shootingStar.style.top = Math.random() * 50 + 'vh';
  shootingStar.style.left = Math.random() * 100 + 'vw';
  shootingStar.style.transform = 'rotate(45deg)';
  shootingStar.style.animation = 'shootingStar 1.5s ease-in forwards';
  starsContainer.appendChild(shootingStar);

  shootingStar.addEventListener('animationend', () => {
    shootingStar.remove();
    setTimeout(createShootingStar, 3000 + Math.random()*4000);
  });
}

// Toggle mode siang/malam
const toggleBtn = document.getElementById('toggleMode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if(document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = 'Mode Malam';
    starsContainer.style.display = 'none';
    rainContainer.style.display = 'block';
    createRain();
  } else {
    toggleBtn.textContent = 'Mode Siang';
    rainContainer.style.display = 'none';
    starsContainer.style.display = 'block';
    createStars();
  }
});

// Inisialisasi saat load
window.onload = () => {
  if(document.body.classList.contains('light-mode')) {
    createRain();
    starsContainer.style.display = 'none';
    rainContainer.style.display = 'block';
    toggleBtn.textContent = 'Mode Malam';
  } else {
    createStars();
    rainContainer.style.display = 'none';
    starsContainer.style.display = 'block';
    toggleBtn.textContent = 'Mode Siang';
  }
};

// Tombol scroll ke atas
const scrollTopBtn = document.getElementById("scrollTop");
window.onscroll = function() {
  scrollTopBtn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none";
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animasi bintang jatuh keyframes
document.head.insertAdjacentHTML("beforeend", `
  <style>
    @keyframes shootingStar {
      0% {
        transform: translateX(0) translateY(0) rotate(45deg);
        opacity: 1;
      }
      100% {
        transform: translateX(-300px) translateY(300px) rotate(45deg);
        opacity: 0;
      }
    }
  </style>
`);

// Fungsi tombol biodata aura
document.getElementById('secretBtn').addEventListener('click', () => {
  const password = "712009"; 
  const input = prompt("Masukkan kata kunci:");
  if (input === null) return; 
  if (input === password) {
    window.location.href = "index2.html"; 
  } else {
    alert("Kata kunci salah! Coba lagi.");
  }
});
