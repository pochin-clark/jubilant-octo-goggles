const canvas = document.getElementById("starfield")
const context = canvas.getContext("2d")
const stars = 300

for (let i = 0; i < stars; i++) {
    let x = Math.random() * canvas.offsetWidth
    let y = Math.random() * canvas.offsetWidth
    let r = Math.random() * 1.5
    context.beginPath()
    context.arc(x, y, r, 0, 360)
    context.fillStyle = "hsla(200, 100%, 50%, 0.8)"
    context.fill()
}