let btnText = document.getElementById('btn-text')

function darktolightbtn() {
    if (btnText.innerText === "Dark Mode") {
        btnText.innerText = "Light Mode"
    } else if (btnText.innerText = "Light Mode") {
        btnText.innerText = "Dark Mode"
    }
}

document.querySelector('.theme-toggle-button').addEventListener('click', () => document.body.classList.toggle('dark'))

window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);

window.onscroll = function () { myFunction() };
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
let aboutMe = document.getElementById('about-me')
let homepage = document.getElementById('homepage')

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        aboutMe.classList.add("padding")
    } else {
        navbar.classList.remove("sticky")
        aboutMe.classList.remove("padding")
    }
}
