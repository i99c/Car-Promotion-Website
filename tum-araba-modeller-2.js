


function showSlides(n, className) {
    let i;
    let slides = document.getElementsByClassName(className);

    if (!slides || slides.length === 0) {
        console.error(`No elements found with class '${className}'`);
        return;
    }

    // Yeni satır: slideIndex2 kontrolü
    if (typeof slideIndex2 === 'undefined') {
        window.slideIndex2 = 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    n = (n > slides.length) ? 1 : (n < 1) ? slides.length : n;

    slides[n - 1].style.display = "block";
    slideIndex2 = n; // slideIndex2 güncelleme
}
