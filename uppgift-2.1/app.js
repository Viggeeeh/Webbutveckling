const DISPLAYTEXT = document.getElementById("display-text")
const COLORBUTTON = document.getElementById("color-switch-btn")

COLORBUTTON.addEventListener("click", () => {
    DISPLAYTEXT.innerHTML = `Color: ${switchColor()}`
    document.body.style.backgroundColor = switchColor()
})

const letters = ["A", "B", "C", "D", "E", "F"]   

const chooseSymbol = () => {
    symbol = Math.floor(Math.random() * 2)
    return symbol
}

const switchColor = () => {
    let result = "#"

    for (let i = 0; i < 6; i++) {
        symbol = chooseSymbol()
        if (symbol == 0) {
            let getRandomLetter = Math.floor(Math.random() * letters.length)
            result += letters[getRandomLetter]
        } else {
            let getRandomNumber = Math.floor(Math.random() * 10)
            result += getRandomNumber.toString()
        }
    }
    return result
}
