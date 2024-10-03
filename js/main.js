window.onscroll = function () {
    if (window.scrollY > 550) {
        document.getElementsByClassName("nav-scroll")[0].classList.add("nav-scroll-chang");
        document.getElementsByClassName("logo-light")[0].classList.add("logo-hid");
        document.getElementsByClassName("logo-dark")[0].classList.add("logo-show");
    } else {
        document.getElementsByClassName("nav-scroll")[0].classList.remove("nav-scroll-chang");
        document.getElementsByClassName("logo-light")[0].classList.remove("logo-hid");
        document.getElementsByClassName("logo-dark")[0].classList.remove("logo-show");
    }
    if (window.scrollY > 100) {
        document.getElementById("click").classList.add('arrow')
    } else {
        document.getElementById("click").classList.remove('arrow')
    }
}
