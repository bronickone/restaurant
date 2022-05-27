import home from './modules/home';
import menu from './modules/menu';
import contacts from './modules/contacts';
import './style.css';


const content = document.createElement('div')
content.setAttribute('id', 'content')

const mainHeadBlock = document.createElement('div')
mainHeadBlock.classList.add('main-head-block')

const mainHeader = document.createElement('h1')
mainHeader.classList.add('main-head')
mainHeader.textContent = 'DOTA BAR'

const mainLogo = document.createElement('div')
mainLogo.classList.add('main-logo')

const mainFooter = document.createElement('div')
mainFooter.classList.add('main-foot')
mainFooter.textContent = 'broNickOne 2022'


const homeTab = document.createElement('button')
const menuTab = document.createElement('button')
const contactsTab = document.createElement('button')
const buttonBlock = document.createElement('div')


buttonBlock.classList.add('button-block')

homeTab.textContent = 'HOME'
menuTab.textContent = 'MENU'
contactsTab.textContent = 'CONTACTS'

mainHeadBlock.appendChild(mainLogo)
mainHeadBlock.appendChild(mainHeader)


buttonBlock.appendChild(homeTab)
buttonBlock.appendChild(menuTab)
buttonBlock.appendChild(contactsTab)

document.body.appendChild(mainHeadBlock)
document.body.appendChild(buttonBlock)

document.body.appendChild(content)

document.body.appendChild(mainFooter)

content.appendChild(home())


homeTab.addEventListener('click', () => {
    content.textContent = ''
    content.appendChild(home())
})

menuTab.addEventListener('click', () => {
    content.textContent = ''
    content.appendChild(menu())
})

contactsTab.addEventListener('click', () => {
    content.textContent = ''
    content.appendChild(contacts())
})







