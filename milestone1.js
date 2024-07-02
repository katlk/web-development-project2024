//Allows backend to get to receive user input.
const name = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')

//Here the code checks for valid information to prevent a user from submitting nothing at all. I want the page to remail until the user submits actual text.
//Used this link for help: https://www.youtube.com/watch?v=TCEgdiN0A8s
form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value === '' || email.value == null) {
        messages.push('Email is required')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
//I did get stuck at this point with returning back to the homepage after a form is submitted.
    
})