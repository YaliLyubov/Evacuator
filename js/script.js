// let itemIndex = 1;
// showSlides(itemIndex);
// // Next/previous controls
// function plusSlides(n) {
//   showSlides(itemIndex += n);
// }
// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(itemIndex = n);
// }

// function showSlides(n) {
//   // let items = document.getElementsByClassName('slide');
//   let items = document.querySelectorAll('.slide');

//   if (n > items.length) {
//     itemIndex = 1;
//   }
//   if (n < 1) {
//     itemIndex = items.length;
//   }
//   for (let i = 0; i < items.length; i++) {
//     items[i].style.display = "none";
//   }
//   items[itemIndex -1].style.display = "block";
// }
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev_slide');
const nextButton = document.querySelector('.next_slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

// function showSlide(n) {
//   slides.forEach(slide => slide.classList.remove('active'));
//   dots.forEach(dot => dot.classList.remove('active'));

//   if (n >= slides.length) {
//     currentSlide = 0;
//   } else if (n < 0) {
//     currentSlide = slides.length - 1;
//   }
//   // slides[n].classList.add('active');
//   slides[currentSlide].classList.add('active');
//   dots[currentSlide].classList.add('active');
// }

// prevButton.addEventListener('click', () => {
//   currentSlide--;
//   showSlide(currentSlide);
// });

// nextButton.addEventListener('click', () => {
//   currentSlide++;
//   showSlide(currentSlide);
// });

// dots.forEach(dot => {
//   dot.addEventListener('click', () => {
//     const slideId = dot.dataset.slide;
//     currentSlide = Array.from(slides).findIndex(slide => slide.id === slideId);
//     showSlide(currentSlide);
//   });
// });
// 


function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentSlide = i;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);

// tabs
const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab_content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.dataset.tab;

    // Убираем активный класс у всех вкладок
    tabs.forEach(tab => tab.classList.remove('active'));
    // Убираем активный класс у всех контентов
    tabContent.forEach(content => content.classList.remove('active'));

    // Добавляем активный класс к выбранной вкладке и ее контенту
    tab.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});
// scroll to Top
document.querySelector('.btn_scroll').addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});