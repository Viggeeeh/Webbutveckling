const createCard = (headerText, content, idName) => {
    // Create tags for html
    const projects = document.querySelector(".projects-container")
    const div = document.createElement("div")
    const header = document.createElement("h1")
    const paragraph = document.createElement("p")

    // Creates the card
    div.classList.add("project-card")
    div.setAttribute("id", idName)
    header.innerHTML = headerText
    div.appendChild(header)
    projects.appendChild(div)

    paragraph.classList.add("information")
    paragraph.innerHTML = content  
    div.appendChild(paragraph)
}

const isClicked = (id, link) => {
    document.getElementById(id).addEventListener("click", () => {
        console.log("Clicked!")
        window.location = link
    })
}

// create cards
createCard("Uppgift 1", "Hellooooo", "uppgift-1")
createCard("Uppgift 2", "Hellooooo", "uppgift-2")
createCard("Uppgift 3", "Hellooooo", "uppgift-3")
createCard("Uppgift 4", "Hellooooo", "uppgift-4")
createCard("Uppgift 5", "Hellooooo", "uppgift-5")
createCard("Uppgift 6", "Hellooooo", "uppgift-6")


// checks if clicked
isClicked("uppgift-1", "../uppgift-1/index.html")
isClicked("uppgift-2", "../uppgift-2/index.html")
isClicked("uppgift-3", "../uppgift-3/index.html")
isClicked("uppgift-4", "../uppgift-4/index.html")
isClicked("uppgift-5", "../uppgift-5/index.html")
isClicked("uppgift-6", "../uppgift-6/index.html")








