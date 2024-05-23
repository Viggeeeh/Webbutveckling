const createCard = (headerText, content, idName, imgLink) => {
    // Create tags for html
    const projects = document.querySelector(".projects-container")
    const div = document.createElement("div")
    const header = document.createElement("h1")
    const img = document.createElement("img")
    const paragraph = document.createElement("p")

    createNewImage(idName, imgLink)

    // Creates the card
    div.classList.add("project-card")
    div.setAttribute("id", idName)
    header.innerHTML = headerText
    div.appendChild(header)
    projects.appendChild(div)

    div.appendChild(img)
    img.classList.add("projects-image")
    img.setAttribute("id", `${idName}-img`)
    img.src = imgLink

    paragraph.classList.add("information")
    paragraph.innerHTML = content  
    div.appendChild(paragraph)
}

const isClicked = (id, link, imgLink) => {
    const card = document.getElementById(id)
    const img = document.getElementById(`${id}-img`)

    img.addEventListener("click", (e) => {
        e.stopPropagation()  // Only the child gets pressed.
        console.log("You have opened an image")
        document.getElementById(`${id}-showcase`).style.display = "flex"
        document.body.style.overflow = "hidden"
    })

    document.getElementById(`${id}-showcase`).addEventListener("click", () => {
        document.getElementById(`${id}-showcase`).style.display = "none"
        document.body.style.overflow = "visible"
    })

    card.addEventListener("click", () => {
        window.location = link
    })

}

const createNewImage = (idName, imgLink) => {
    const img = document.createElement("img")
    const showcase = document.getElementById("showcase-image")

    img.classList.add("showcase-img")
    img.setAttribute("id", `${idName}-showcase`)
    img.src = imgLink
    img.style.display = "none"
    showcase.appendChild(img)
}





// create cards
createCard("Uppgift 1", "Introduktion till HTML och CSS", "uppgift-1", "./images/uppgift-1.png")
createCard("Uppgift 2", "Vi gick igenom Div och IMG", "uppgift-2", "./images/uppgift-2.png")
createCard("Uppgift 3", "Användning utav Flex och Grid", "uppgift-3", "./images/uppgift-3.png")
createCard("Uppgift 4", "Animering i CSS och Youtube-video", "uppgift-4", "./images/uppgift-4.png")
createCard("Uppgift 5", "Vi gjorde Position", "uppgift-5", "./images/uppgift-5.png")
createCard("Uppgift 6", "Härmade Johans hemsida", "uppgift-6", "./images/uppgift6.png")
createCard("Responsive", "En responsiv uppgift från lektionen", "responsive", "./images/responsive.png")
createCard("Uppgift M2", "M2 Uppgift", "uppgift-m2", "./images/m2.png")
createCard("Calculator", "Jag gjorde en miniräknare", "calculator", "./images/calculator.png")


// checks if clicked
isClicked("uppgift-1", "../uppgift-1/index.html")
isClicked("uppgift-2", "../uppgift-2/index.html")
isClicked("uppgift-3", "../uppgift-3/index.html")
isClicked("uppgift-4", "../uppgift-4/index.html")
isClicked("uppgift-5", "../Uppgift 5/sticky2/index.html")
isClicked("uppgift-6", "../uppgift-6/index.html")
isClicked("responsive", "../Responsive/index.html")
isClicked("uppgift-m2", "../M2/index.html")
isClicked("calculator", "../Calculator/index.html")


// Responsive Menu
const hamburgerMenu = document.getElementById("hamburger-menu")
const menuDiv = document.getElementById("responsive-menu")
const cancelDiv = document.getElementById("cancel-icon")

hamburgerMenu.addEventListener("click", () => {
    menuDiv.style.display = 'flex'
    document.body.style.overflow = "hidden"
})

cancelDiv.addEventListener("click", () => {
    menuDiv.style.display = 'none'
    document.body.style.overflow = "visible"
})






