const canvas = document.getElementById("starfield")
const context = canvas.getContext("2d")
const stars = 2000
const colorRange = [0, 90, 240]

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

for (let i = 0; i < stars; i++) {
    let x = Math.random() * canvas.offsetWidth
    let y = Math.random() * canvas.offsetWidth
    let r = Math.random() * 1.7
    let hue = colorRange[getRandom(0, colorRange.length -1)]
    let sat = getRandom(25, 75)
    context.beginPath()
    context.arc(x, y, r, 0, 360)
    context.fillStyle = `hsl(${hue}, ${sat}%, 88%)`
    context.fill()
    console.log(i)
}