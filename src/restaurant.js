// restaurant.js
import img from './icon.png';

const createRestaurantHomePage = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    //Headline
    const headLine = document.createElement('h1')
    headLine.textContent = "Welcome to our restaurant"
    pageContent.appendChild(headLine)

    // Image
    const image = document.createElement('img')
    image.src = img
    pageContent.appendChild(image)

    // Copy
    const copy = document.createElement('p')
    copy.textContent = "We serve best food"
    pageContent.appendChild(copy)
    content.appendChild(pageContent)
}

export default createRestaurantHomePage