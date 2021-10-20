let canvas = document.querySelector(".draw")

let ctx = canvas.getContext("2d")

canvas.addEventListener("click", (e) => {
    console.log(e.clientX)
    console.log(e.clientY)
})

