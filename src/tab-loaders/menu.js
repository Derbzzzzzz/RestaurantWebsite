function createMenuHeader(){
    const menuHeader = document.createElement("div")
    menuHeader.classList.add("menu-header")
    menuHeader.textContent = "Menu"

    return menuHeader
}

function createMenuItem1(){
    const item1 = document.createElement("div")
    item1.classList.add("menu-item")

    item1.appendChild(createMenuItem1Header())
    item1.appendChild(createMenuItem1Desc())

    return item1
}

function createMenuItem1Header(){
    const item1Header = document.createElement("div")
    item1Header.classList.add("menu-item-header")
    item1Header.textContent = "Pizza"

    return item1Header
}

function createMenuItem1Desc(){
    const item1Desc = document.createElement("div")
    item1Desc.classList.add("menu-item-desc")
    item1Desc.textContent = "Hand-tossed and made with passion and love"

    return item1Desc
}

function createMenuItem2(){
    const item2 = document.createElement("div")
    item2.classList.add("menu-item")

    item2.appendChild(createMenuItem2Header())
    item2.appendChild(createMenuItem2Desc())

    return item2
}

function createMenuItem2Header(){
    const item2Header = document.createElement("div")
    item2Header.classList.add("menu-item-header")
    item2Header.textContent = "Escargot"

    return item2Header
}

function createMenuItem2Desc(){
    const item2Desc = document.createElement("div")
    item2Desc.classList.add("menu-item-desc")
    item2Desc.textContent = "Served in traditional manner, with garlic butter and bread for dipping"

    return item2Desc
}

function createMenuItem3(){
    const item3 = document.createElement("div")
    item3.classList.add("menu-item")

    item3.appendChild(createMenuItem3Header())
    item3.appendChild(createMenuItem3Desc())

    return item3
}

function createMenuItem3Header(){
    const item3Header = document.createElement("div")
    item3Header.classList.add("menu-item-header")
    item3Header.textContent = "Nutella Crêpe"

    return item3Header
}

function createMenuItem3Desc(){
    const item3Desc = document.createElement("div")
    item3Desc.classList.add("menu-item-desc")
    item3Desc.textContent = "A traditional crepe slathered in a hazelnut and chocolate spread"

    return item3Desc
}

function loadMenu(){
    const mainContent = document.querySelector('.main-content')

    mainContent.appendChild(createMenuHeader())
    mainContent.appendChild(createMenuItem1())
    mainContent.appendChild(createMenuItem2())
    mainContent.appendChild(createMenuItem3())

}

export default loadMenu