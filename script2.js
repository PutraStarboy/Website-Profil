 const body = document.body;

    function clearBackground() {
      document.querySelectorAll('.sakura, .star').forEach(el => el.remove());
    }

    function createSakura() {
      for (let i = 0; i < 30; i++) {
        const s = document.createElement('div');
        s.className = 'sakura';
        s.style.left = Math.random() * 100 + 'vw';
        s.style.top = -20 + 'px';
        s.style.animationDuration = 5 + Math.random() * 5 + 's';
        s.style.width = s.style.height = 8 + Math.random() * 6 + 'px';
        document.body.appendChild(s);
      }
    }

    function createStars() {
      for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        document.body.appendChild(star);
      }
    }

    function toggleTheme() {
      const isDay = body.classList.contains('day');
      clearBackground();
      if (isDay) {
        body.classList.remove('day');
        body.classList.add('night');
        createStars();
      } else {
        body.classList.remove('night');
        body.classList.add('day');
        createSakura();
      }
    }

    function goToSecretPage() {
      const password = prompt("Masukkan kata kunci:");
      if (password === "352009") {
        window.location.href = "index.html";
      } else if (password !== null) {
        alert("Kata kunci salah!");
      }
    }

    // Efek awal: siang
    createSakura();
