const createCard = (headerText, content) => {
    // Create tags for html
    const projects = document.querySelector(".projects-container")
    const div = document.createElement("div")
    const header = document.createElement("h1")
    const paragraph = document.createElement("p")

    // Creates the card
    div.classList.add("project-card")
    header.innerHTML = headerText
    div.appendChild(header)
    projects.appendChild(div)

    paragraph.classList.add("information")
    paragraph.innerHTML = content  
    div.appendChild(paragraph)
}

// create cards
createCard("Header here!", "Hellooooo")
createCard("Hello!", "Hellooooo")
createCard("Hello!", "Hellooooo")
createCard("Hello!", "Hellooooo")
createCard("Hello!", "Hellooooo")
createCard("Hello!", "Hellooooo")


