document.addEventListener('DOMContentLoaded', function () {
    showSlides(1, 'mySlides');
    showSlides(1, 'slide2');
});

// Birinci slayt seti için ileri/geri fonksiyonları
function plusSlides1(n) {
    showSlides(slideIndex1 += n, 'mySlides');
}

function currentSlide1(n) {
    showSlides(slideIndex1 = n, 'mySlides');
}

// İkinci slayt seti için ileri/geri fonksiyonları
function plusSlides2(n) {
    showSlides(slideIndex2 += n, 'slide2');
}

function currentSlide2(n) {
    showSlides(slideIndex2 = n, 'slide2');
}

// Genel slayt gösterme fonksiyonu
function showSlides(n, className) {
    let i;
    let slides = document.getElementsByClassName(className);

    if (!slides || slides.length === 0) {
        console.error(`No elements found with class '${className}'`);
        return;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    n = (n > slides.length) ? 1 : (n < 1) ? slides.length : n;

    slides[n - 1].style.display = "block";
}
