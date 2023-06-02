let sortItem = document.querySelector("#sortItems")
let line = document.querySelector("#check")
let addItem = document.querySelector("#addItems")
let arr = [""]

addItem.addEventListener("click", (e)=> {
    e.preventDefault()
    let inputItem = document.querySelector("#inputItems").value
    let output = document.querySelector("#outputItems")
    output.innerHTML += `<p class="stuff" id="outputItems">${inputItem}
    </p>`
    arr = inputItem
    console.log(arr);
    inputItem = ''
    let removeOne = document.querySelector("#removeItem")
    removeOne = pop(output)
})
if (line.checked){
        let output = output.strike()
    }