import Image from '../images/chef.jpg'

function createMainContentHeader(){
    const mainContentHeader = document.createElement("div")
    mainContentHeader.classList.add("main-content-header")
    mainContentHeader.textContent = `Founded in 2022, Derbz au Château prides itself on providing a quality and memorable experience for all its customers.`

    return mainContentHeader
}

function createImage(){
    const img = document.createElement("img")
    img.classList.add("main-content-image")
    img.src = Image

    return img
}

function loadHome(){
    const mainContent = document.querySelector('.main-content')

    mainContent.appendChild(createMainContentHeader())
    mainContent.appendChild(createImage())

}

export default loadHome