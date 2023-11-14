const createCard = (headerText, content, link) => {
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
createCard("Uppgift 1", "Hellooooo", "../Uppgift")
createCard("Uppgift 2", "Hellooooo")
createCard("Uppgift 3", "Hellooooo")
createCard("Uppgift 4", "Hellooooo")
createCard("Uppgift 5", "Hellooooo")
createCard("Uppgift 6", "Hellooooo")


