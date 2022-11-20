let btnText = document.getElementById('btn-text')

function darktolightbtn() {
    if (btnText.innerText === "Dark Mode") {
        btnText.innerText = "Light Mode"
    } else if (btnText.innerText = "Light Mode") {
        btnText.innerText = "Dark Mode"
    }
}

document.querySelector('.theme-toggle-button').addEventListener('click', () => document.body.classList.toggle('dark'))
