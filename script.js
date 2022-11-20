// const checkbox = document.getElementById('checkbox');

// checkbox.addEventListener('change', () => {
//     document.body.classList.toggle('dark');
// })

let btnText = document.getElementById('btn-text')

function darktolightbtn() {
    if (btnText.innerText === "Dark Mode") {
        btnText.innerText = "Light Mode"
    } else if (btnText.innerText = "Light Mode") {
        btnText.innerText = "Dark Mode"
    }
}
