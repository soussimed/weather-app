import "./index.scss"

const email = document.getElementById("email")

email.onchange = (e) => {
    console.log(e.target.value)
}