const goTopBtn = document.querySelector('.go-top');
const scrollThreshold = 100;

window.addEventListener('scroll', function () {
    const scrolled        = window.pageYOffset;

    if (scrolled > scrollThreshold) {
        goTopBtn.style.visibility = 'visible';
    } else {
        goTopBtn.style.visibility = 'hidden';
    }
});

goTopBtn.addEventListener('click', function () {
    scrollToTop(500);
});

function scrollToTop(scrollDuration) {
    const scrollStep     = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(function () {
        if (window.scrollY === 0) {
            clearInterval(scrollInterval);
        } else {
            window.scrollBy(0, scrollStep);
        }
    }, 15);
}