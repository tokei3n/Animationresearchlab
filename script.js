const carousel = document.getElementById('carousel');
const dotsContainer = document.getElementById('dots');
const articles = document.querySelectorAll('.sub-article');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;
const total = articles.length;

// ドット生成
for (let i = 0; i < total; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.dataset.index = i;
  dot.addEventListener('click', () => {
    scrollToIndex(i);
  });
  dotsContainer.appendChild(dot);
}

function updateDots(i) {
  document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
  document.querySelectorAll('.dot')[i].classList.add('active');
}

function scrollToIndex(i) {
  const articleWidth = articles[0].offsetWidth + 20; // gap
  carousel.scrollTo({
    left: i * articleWidth,
    behavior: 'smooth'
  });
  index = i;
  updateDots(index);
}

prevBtn.addEventListener('click', () => {
  if (index > 0) scrollToIndex(index - 1);
});

nextBtn.addEventListener('click', () => {
  if (index < total - 1) scrollToIndex(index + 1);
});

// 自動スライド
setInterval(() => {
  index = (index + 1) % total;
  scrollToIndex(index);
}, 5000); // 5秒で次へ

// メニュー toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('active');
});