const KEYS = document.querySelectorAll("#num-button")
const DISPLAYTEXT = document.getElementById("display-text")
const SPECIALBUTTONS = document.querySelectorAll("#special-button")
const TROLLBUTTON = document.querySelector(".troll")
const CALCULATOR = document.getElementById("calculator")

let display = ""
let isTrolling = false
let isCrazy = true

function trolling() {
    if (isTrolling) {
        TROLLBUTTON.innerHTML = "TROLL"
        TROLLBUTTON.style.background = "rgb(41, 50, 69)"
        isTrolling = false
    } else {
        TROLLBUTTON.innerHTML = "CANCEL"
        TROLLBUTTON.style.background = "red"
        isTrolling = true
        
    }
}

function crazy() {
    if (isCrazy) {
        CALCULATOR.classList.add('rotating')
        isCrazy = false
    } else {
        CALCULATOR.classList.remove('rotating')
        isCrazy = true
    }
}

KEYS.forEach(item => {
    item.addEventListener("click", () => {
        let key = item.getAttribute("data-key")

        if (isTrolling && !isNaN(key)) {
            key = Math.floor(Math.random() * 10)
        }

        display += key
        DISPLAYTEXT.innerHTML = display
    })
})

SPECIALBUTTONS.forEach(button => {
    button.addEventListener("click", () => {
        const action = button.getAttribute("data-key")
        switch (action) {
            case "delete":
                display = display.substring(0, display.length - 1) //0 = slutet | -1 = ta bort en
                break
            case "reset":
                display = ""
                break
            case "troll":
                trolling()
                break
            case "crazy":
                crazy()
                break
            case "equal":
                if (display != "") {
                    display = eval(display)
                }
                break
        }

        DISPLAYTEXT.innerHTML = display
    })
})