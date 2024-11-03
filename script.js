document.addEventListener("DOMContentLoaded", function() {
    // Установка первого слайда активным
    showSlide(1);

    // Обработчики изменения ползунков
    const sleepSlider = document.getElementById('sleepHours');
    sleepSlider.addEventListener('input', function() {
        document.getElementById('sleepValue').innerText = sleepSlider.value;
    });

    const qualitySlider = document.getElementById('sleepQuality');
    qualitySlider.addEventListener('input', function() {
        document.getElementById('qualityValue').innerText = qualitySlider.value;
    });
});

// Функция показа слайда
function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex - 1) {
            slide.classList.add('active');
        }
    });
}

// Функция перехода на следующий слайд
function nextSlide(currentSlide) {
    const image = document.getElementById('image');
    const imageSlide2 = document.getElementById('imageSlide2');
    const imageSlide3 = document.getElementById('imageSlide3');

    // Анимация и перемещение изображения
    if (currentSlide === 1) {
        // Перемещение изображения на второй слайд
        image.classList.add('image-move');
        setTimeout(() => {
            imageSlide2.classList.add('image-move');
            image.style.display = 'none'; // Скрываем изображение на первом слайде
        }, 500); // Время соответствует времени анимации
    } else if (currentSlide === 2) {
        // На третьем слайде изображение остается на месте
        imageSlide3.classList.add('stay-center'); // Добавляем фиксированный класс
    }

    if (currentSlide < 5) {
        showSlide(currentSlide + 1);
    }
}

// Функция переключения рамки
function toggleFrame(frame) {
    frame.classList.toggle('active');
}

