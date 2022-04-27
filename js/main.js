const backtoTop = document.getElementById("backtotop");

const checkScroll = () => {
    let pageYoffset = window.pageYOffset;

    if (pageYoffset !== 0) {
        backtoTop.classList.add('show');
    } else {
        backtoTop.classList.remove('show');
    }
}

const moveBackToTop = () => {
    if (window.pageYOffset > 0) {
        window.scrollTo({top : 0, behavior : "smooth"})
    }
}

window.addEventListener('scroll', checkScroll);
backtoTop.addEventListener('click', moveBackToTop);