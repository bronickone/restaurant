function menu(){
    const menu = document.createElement('div')
    const header = document.createElement('h1')
    
    const list = document.createElement('ul')
    list.classList.add('menu-list')
    const dish1 = document.createElement('li')
    const dish2 = document.createElement('li')
    const dish3 = document.createElement('li')
    const dish4 = document.createElement('li')
    const dish5 = document.createElement('li')
    const dish6 = document.createElement('li')

    const img1 = document.createElement('div')
    img1.classList.add('img1')
    const img2 = document.createElement('div')
    img2.classList.add('img2')
    const img3 = document.createElement('div')
    img3.classList.add('img3')
    const img4 = document.createElement('div')
    img4.classList.add('img4')
    const img5 = document.createElement('div')
    img5.classList.add('img5')
    const img6 = document.createElement('div')
    img6.classList.add('img6')

    // const img1 = document.createElement('img')
    // const img2 = document.createElement('img')
    // const img3 = document.createElement('img')
    // const img4 = document.createElement('img')
    // const img5 = document.createElement('img')
    // const img6 = document.createElement('img')
    
    // img1.setAttribute('src', '../src/images/tango.jpg')
    // img1.setAttribute('alt', 'tango')
    // img2.setAttribute('src', '../src/images/mango.jpeg')
    // img2.setAttribute('alt', 'mango')
    // img3.setAttribute('src', '../src/images/bottle.jpeg')
    // img3.setAttribute('alt', 'bottle')
    // img4.setAttribute('src', '../src/images/green-bottle.jpeg')
    // img4.setAttribute('alt', 'green bottle')
    // img5.setAttribute('src', '../src/images/blue-bottle.jpeg')
    // img5.setAttribute('alt', 'blue bottle')
    // img6.setAttribute('src', '../src/images/smoke.jpeg')
    // img6.setAttribute('alt', 'smoke')
    

    header.textContent = 'MENU'

    dish1.textContent = 'Tango'
    dish2.textContent = 'Smoke of Deceit'
    dish3.textContent = 'Enchanted Mango'
    dish4.textContent = 'Magic Bottle'
    dish5.textContent = 'Healing Salve'
    dish6.textContent = 'Clarity'
     
    dish1.appendChild(img1)
    dish2.appendChild(img2)
    dish3.appendChild(img3)
    dish4.appendChild(img4)
    dish5.appendChild(img5)
    dish6.appendChild(img6)


    list.appendChild(dish1)
    list.appendChild(dish2)
    list.appendChild(dish3)
    list.appendChild(dish4)
    list.appendChild(dish5)
    list.appendChild(dish6)
    
    menu.appendChild(header)
    menu.appendChild(list)

    return menu;
}

export default menu;