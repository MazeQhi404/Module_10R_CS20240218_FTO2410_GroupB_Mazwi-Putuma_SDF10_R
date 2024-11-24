import { add } from "../functions.js"

console.log(add(1,2))

const appSettings = {
    databaseURL: "https://playground-ab742-default-rtdb.firebaseio.com/"
}

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    console.log(inputValue)
})

