/*document.getElementById("count-el").innerText=5 */

/*let firstBatch=5

let count = firstBatch

console.log(count)

count=count + 1
console.log(count) */
let saveEl= document.getElementById("save-el")
let countEl= document.getElementById("count-el")

console.log(countEl)
let count= 0

function increment() {
    count+=1
    countEl.innerText = count
    console.log(count) 
}

increment()

function save(){
    let countNum=count+ " - "
    //saveEl.innerText+=countNum
    //To ensure the spaces between them are visible on the web, use this instead
    saveEl.textContent+=countNum
    //setting the counter to 0
    countEl.textContent=0
    count=0
}