const menu = document.getElementById('menu');
const mainContent = document.getElementById('mainContent');
const startButton = document.getElementById('startButton');
const menuContent = document.querySelector('.menu-content');

const logo = document.querySelector('.logo');

logo.addEventListener('click', function() {
  location.reload();
});

window.addEventListener('load', () => {
  loadSection('section1');
  mainContent.classList.add('active');
  mainContent.style.filter = 'blur(10px)';
});

startButton.addEventListener('click', () => {
  menuContent.classList.add('fade-out');

  setTimeout(() => {
      document.querySelector('.header-bar').style.filter = 'none';
      mainContent.style.filter = 'none';

      menuContent.innerHTML = `
          <ul class="menu-links">
              <li><a href="#" onclick="loadSection('section1')">Розділ 1</a></li>
              <li><a href="#" onclick="loadSection('section2')">Розділ 2</a></li>
              <li><a href="#" onclick="loadSection('section3')">Розділ 3</a></li>
              <li><a href="#" onclick="loadSection('section4')">Розділ 4</a></li>
              <li><a href="#" onclick="loadSection('section5')">Розділ 5</a></li>
              <li><a href="#" onclick="loadSection('section6')">Розділ 6</a></li>
              <li><a href="#" onclick="loadSection('section7')">Розділ 7</a></li>
              <li><a href="#" onclick="loadSection('section8')">Розділ 8</a></li>
          </ul>
      `;

      menuContent.classList.remove('fade-out');
      menuContent.classList.add('text-top');
      menu.classList.add('menu-left');
  }, 500);

  setTimeout(() => {
      mainContent.style.filter = 'none';
  }, 1000);
});

function loadSection(section) {
  fetch(`sections/${section}.html`)
      .then(response => {
          if (!response.ok) throw new Error('Не вдалося завантажити файл: ' + response.status);
          return response.text();
      })
      .then(data => {
          mainContent.innerHTML = data;
      })
      .catch(() => mainContent.innerHTML = '<p>Не вдалося завантажити вміст. Спробуйте ще раз.</p>');
}