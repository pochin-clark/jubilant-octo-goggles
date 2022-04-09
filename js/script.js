const canvas = document.getElementById("starfield")
const context = canvas.getContext("2d")
const stars = 300

for (let i = 0; i < stars; i++) {
    let x = Math.random() * canvas.offsetWidth
    let y = Math.random() * canvas.offsetWidth
    context.fillStyle = "white"
    context.fillRect(x,y,1,1)
}