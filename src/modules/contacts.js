function contacts(){
    const contacts = document.createElement('div')
    const header = document.createElement('h1')
    const list = document.createElement('ul')
    list.classList.add('contacts-list')
    const contact1 = document.createElement('li')
    const contact2 = document.createElement('li')
    const contact3 = document.createElement('li')

    header.textContent = 'CONTACTS'

    contact1.textContent = 'contact1'
    contact2.textContent = 'contact2'
    contact3.textContent = 'contact3'

    list.appendChild(contact1)
    list.appendChild(contact2)
    list.appendChild(contact3)
    
    contacts.appendChild(header)
    contacts.appendChild(list)

    return contacts;
}

export default contacts;