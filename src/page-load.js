import loadContact from './tab-loaders/contact.js';
import loadHome from './tab-loaders/home.js';

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}


function createHeader(){
    const header = document.createElement('div')
    header.classList.add('header')
    header.textContent = 'Derbz au Château'

    return header
}

function createNav(){
    const nav = document.createElement('div')
    nav.classList.add('nav')

    nav.appendChild(createNavButton1())
    nav.appendChild(createNavButton2())
    nav.appendChild(createNavButton3())

    return nav
}

function createNavButton1(){
    const navButton1 = document.createElement('div')
    navButton1.classList.add('nav-button-1')
    navButton1.textContent = 'Home'

    navButton1.addEventListener('click', function(){
        removeAllChildNodes(document.querySelector('.main-content'))
        loadHome()
    })

    return navButton1
}

function createNavButton2(){
    const navButton2 = document.createElement('div')
    navButton2.classList.add('nav-button-2')
    navButton2.textContent = 'Menu'

    

    return navButton2
}

function createNavButton3(){
    const navButton3 = document.createElement('div')
    navButton3.classList.add('nav-button-3')
    navButton3.textContent = 'Contact'

    navButton3.addEventListener('click', function(){
            removeAllChildNodes(document.querySelector('.main-content'))
            loadContact()
        })

    return navButton3
}

function createMain(){
    const main = document.createElement('main')

    
    main.appendChild(createMainContent())

    return main
}

function createMainContent(){
    const mainContent = document.createElement('div')
    mainContent.classList.add('main-content')
    
    return mainContent
}

function createFooter(){
    const footer = document.createElement('footer')
    footer.classList.add('footer')
    footer.textContent = 'Copyright © 2022 Derbzzzzzz'

    return footer;
}


function loadPage(){
    const content = document.getElementById('content')

    // Appending elements to main content container
    content.appendChild(createHeader())
    content.appendChild(createNav())
    content.appendChild(createMain())
    content.appendChild(createFooter())
}

export default loadPage;

