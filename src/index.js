document.addEventListener('DOMContentLoaded', function() {
    // getDogs()
    getBreeds()
})

function getDogs() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((result)=> result.json())
    .then((data)=> addDogs(data.message))
    .catch((error)=> console.log("There's an error!", error))
}

function addDogs(message){

    message.forEach((dog)=>{
        addNewDog(dog)
    })
}

function addNewDog(dog){
    const dog_list = document.querySelector('#dog-image-container')

    const div = document.createElement('div')

        div.className = 'card'

        const img = document.createElement('img')

        img.src = dog

        div.appendChild(img)

        dog_list.appendChild(div)
}


function getBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((result)=>result.json())
    .then((object)=>addBreeds(object))
    .catch((error)=> console.log("There's an error!", error))
}

function addBreeds(object){
    const breeds = object.message
    console.log("This is add breeds", object.message)
    // for(const breed in breeds){
    //     addNewBreed(breed)
    // }
}

function addNewBreed(breed){
    const breed_list = document.querySelector('#dog-breeds')

    const li = document.createElement('li')

        li = breed

        breed_list.appendChild(li)
}