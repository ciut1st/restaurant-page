const createContactPage = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    // Headline
    const headLine = document.createElement('h1')
    headLine.textContent = "Contact Us"
    pageContent.appendChild(headLine)

    // Form
    const form = document.createElement('form')
    form.classList.add('contact-form')

    //First Name
    const firstName = document.createElement('input')
    firstName.type = 'text'
    firstName.placeholder = "Enter First Name"
    form.appendChild(firstName)

    // Last Name
    const lastName = document.createElement('input')
    lastName.type = 'text'
    lastName.placeholder = "Enter Last Name"
    form.appendChild(lastName)
    
    // Phone number
    const phoneNumber = document.createElement('input')
    phoneNumber.type = 'tel'
    phoneNumber.placeholder = "Enter Phone Number"
    form.appendChild(phoneNumber)
    
    // Address
    const address = document.createElement('input')
    address.type = 'text'
    address.placeholder = "Enter Address"
    form.appendChild(address)
    
    // Submit button
    const submitButton = document.createElement('input')
    submitButton.type = 'submit'
    submitButton.value = 'Submit'
    form.appendChild(submitButton)

    pageContent.appendChild(form)
    content.appendChild(pageContent)
}

export default createContactPage