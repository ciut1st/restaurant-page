const createMenuPage = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    //Headline
    const headLine = document.createElement('h1')
    headLine.textContent = "Menu"
    pageContent.appendChild(headLine)

    // Menu
    const menu = document.createElement('ul')
    const menuItem1 = document.createElement('li')

    menuItem1.textContent = 'Bakso'
    const menuItem2 = document.createElement('li')
    menuItem2.textContent = 'Nasi Goreng'
    const menuItem3 = document.createElement('li')
    menuItem3.textContent = 'Martabak'
    const menuItem4 = document.createElement('li')
    menuItem4.textContent = 'Sate'
    const menuItem5 = document.createElement('li')
    menuItem5.textContent = 'Rumbah'
    menu.appendChild(menuItem1)
    menu.appendChild(menuItem2)
    menu.appendChild(menuItem3)
    menu.appendChild(menuItem4)
    menu.appendChild(menuItem5)

    pageContent.appendChild(menu)
    content.appendChild(pageContent)
}

export default createMenuPage