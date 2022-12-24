function createMainContentHeader(){
    const mainContentHeader = document.createElement("div")
    mainContentHeader.classList.add("main-content-header")
    mainContentHeader.textContent = `Founded in 2022, Derbz au Château\r\n prides itself on providing a quality  \r\nand memorable experience`

    return mainContentHeader
}

function loadHome(){
    const mainContent = document.querySelector('.main-content')

    mainContent.appendChild(createMainContentHeader())

}

export default loadHome