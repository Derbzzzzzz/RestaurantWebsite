function createContactHeader(){
    const contactHeader = document.createElement('div')
    contactHeader.classList.add('contact-header')
    contactHeader.textContent = 'Contact Info'

    return contactHeader
}

function createPhoneContainer(){
    const phoneContainer = document.createElement('div')
    phoneContainer.classList.add('phone-container')

    phoneContainer.appendChild(createPhoneIcon())
    phoneContainer.appendChild(createPhoneNumber())

    return phoneContainer
}

function createPhoneIcon(){
    const phoneIcon = document.createElement('span')
    phoneIcon.classList.add('material-symbols-outlined')
    phoneIcon.textContent = 'call'

    return phoneIcon
}

function createPhoneNumber(){
    const phoneNumber = document.createElement('div')
    phoneNumber.classList.add('phone-number')
    phoneNumber.textContent = "202-555-0147"

    return phoneNumber
}

function createAddressContainer(){
    const addressContainer = document.createElement('div')
    addressContainer.classList.add('address-container')

    addressContainer.appendChild(createAddressIcon())
    addressContainer.appendChild(createAddress())

    return addressContainer
}

function createAddressIcon(){
    const addressIcon = document.createElement('span')
    addressIcon.classList.add('material-symbols-outlined')
    addressIcon.textContent = 'home'

    return addressIcon
}

function createAddress(){
    const address = document.createElement('div')
    address.classList.add('address-number')
    address.textContent = "1234 Candy Cane Lane"

    return address
}

function loadContact(){
    const mainContent = document.querySelector('.main-content')

    mainContent.appendChild(createContactHeader())
    mainContent.appendChild(createPhoneContainer())
    mainContent.appendChild(createAddressContainer())
}

export default loadContact