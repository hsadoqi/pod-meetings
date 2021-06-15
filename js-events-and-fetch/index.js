// change the header content to say "Images"
 const header = document.querySelector('h1')

 header.textContent = "Images"


// find at least 5 images and display them programmatically in image container
// BONUS: add a description for each image and display in p tag below each image

const images = [
    {
        url: "https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg", 
        description: "cute puppy"
    }, 
    {
        url: "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg",
        description: "another cute puppy"
    }
]

const imageContainer = document.getElementById("image-container")

images.forEach(img => {
    renderImage(img)
})

function renderImage(img){
    const div = document.createElement('div')
    const imgTag = document.createElement('img')
    imgTag.src = img.url
    const pTag = document.createElement('p')
    pTag.innerText = img.description
    const button = document.createElement('button')
    button.innerText = "Delete, you horrible person"

    button.addEventListener("click", deleteImage)

    div.append(imgTag, pTag, button)
    imageContainer.append(div)
}

function deleteImage(e){
    e.target.parentElement.remove()
}


// Add a form to index.html with inputs for a new image url and a description
// When a user submits, the new picture and description should be displayed on the page

const form = document.getElementById("image-form")
const imageInput = document.getElementById("img-input")
const descriptionInput = document.getElementById("img-description")

form.addEventListener("submit", (e) => { 
    e.preventDefault()
    const image = {
        url: imageInput.value, 
        description: descriptionInput.value
    }
    renderImage(image)
})

const users = [
    {id: 1, email: "hanaa@mail.com", password: "bowie", name: "hanaa"}, 
    {id: 2, email: "bill@mail.com", password: "bowie", name: "bill"}, 
    {id: 3, email: "luke@mail.com", password: "bowie", name: "luke"}, 
]

// Add a button to each image to delete the image object from the page


// Make a fetch request to the following url to post a random meme on the page:
// https://api.imgflip.com/get_meme

const logInButton = document.getElementById('log-in')
const puppyContainer = document.getElementById('puppy-image-page')

logInButton.addEventListener("click", () => {
    const form = document.createElement('form')
    const emailInput = document.createElement('input')
    const passwordInput = document.createElement('input')
    const submitBtn = document.createElement('input')
    submitBtn.type = "submit"
    form.append(emailInput, passwordInput, submitBtn)
    form.addEventListener("submit", logIn)

    puppyContainer.innerHTML = ""
    puppyContainer.append(form)

})

function logIn(e){
    e.preventDefault()
    const email = e.target.children[0].value
    const password = e.target.children[1].value

    const user = users.find(obj => obj.email === email && obj.password === password)
    if(user){
        console.log(`Welcome ${user.name}`)
    } else {
        alert("nice try")
    }
}