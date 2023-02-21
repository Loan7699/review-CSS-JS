const quote = document.createElement("div")
const btnChangeColor = document.querySelector("#btn-2");
const para = document.querySelector('p')
const btnChangeBackground = document.querySelector("#btn-3")

quote.innerText = "Hê lố"
quote.style.backgroundColor = "red"
quote.style.height = "50px"
quote.style.width = "100px"
quote.style.lineHeight = "50px"
quote.style.textAlign = 'center'
quote.style.marginTop = "20px"

const changeContent = () => {
    document.body.appendChild(quote)
}

// function random màu HEX
const randomHex = () => {
    const code = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "f"]
    let hexColor = []
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * code.length)
        hexColor.push(code[index])
    }
    return `#${hexColor.join("")}`
}

btnChangeColor.onclick = function changeColor() {
    para.style.color = randomHex()
}

// function random màu RBG
const randomRGB = () => {
    const RGBColor = [];
    for( let i = 0; i < 3; i++) {
        RGBColor.push(Math.floor(Math.random() * 257))
    }
    return `rgb(${RGBColor.join(",")})`
}

btnChangeBackground.addEventListener("click", () =>  {
    para.style.backgroundColor = randomRGB()
})

