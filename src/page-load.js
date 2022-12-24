const content = document.getElementById('content')

// Header
const header = document.createElement('div')
header.classList.add('header')
header.textContent = 'Derbz au Château'

//Nav
const nav = document.createElement('div')
nav.classList.add('nav')

//Nav Buttons
const navButton1 = document.createElement('div')
navButton1.classList.add('nav-button-1')
navButton1.textContent = 'Home'

const navButton2 = document.createElement('div')
navButton2.classList.add('nav-button-2')
navButton2.textContent = 'Menu'

const navButton3 = document.createElement('div')
navButton3.classList.add('nav-button-3')
navButton3.textContent = 'Contact'

nav.appendChild(navButton1)
nav.appendChild(navButton2)
nav.appendChild(navButton3)

//Main
const main = document.createElement('main')

const mainContent = document.createElement('div')
mainContent.classList.add('main-content')
main.appendChild(mainContent)

//Footer
const footer = document.createElement('footer')
footer.classList.add('footer')
footer.textContent = 'Copyright © 2022 Derbzzzzzz'

// Appending elements to main content container
content.appendChild(header)
content.appendChild(nav)
content.appendChild(main)
content.appendChild(footer)