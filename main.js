let itemList = []
let previousList = []

let addItem = () => {
    let toDo = {
        contents: document.getElementById("itemInput").value,
        isDone: false
    }
    itemList.push(toDo)
    showList(itemList)
    document.getElementById("itemInput").value = ''
    document.getElementById("btn-add").disabled=true
    save()
}

let showList = (list) => {

    let message = list.map((item, index) => {
        if (item.isDone == false) {
            return `<li>
            <input type="checkbox" onchange="doneCheckbox(${index})" id="doneCheckbox${index}" class="pos2">
            ${item.contents}
            <button onclick="removeItem(${index})" class="btn btn-danger pos">Delete</button>
            </li>`
        } else {
            return `<li>
            <input type="checkbox" checked onchange="doneCheckbox(${index}) id="doneCheckbox${index}" class="pos2">
            <del>${item.contents}</del>
            <button onclick="removeItem(${index})" class="btn btn-danger pos">Delete</button>
            </li>`
        }
        
        }).join('')

        

    document.getElementById("resultArea").innerHTML = message
    save()
}

function removeItem(index) {
    itemList.splice(index, 1);
    showList(itemList)
}

function doneCheckbox(index) {
    if (itemList[index].isDone == true) {
        itemList[index].isDone = false
    } else {
        itemList[index].isDone = true
    }
    showList(itemList)
    console.log(itemList)
}

let filterUndone = () => {
    if(document.getElementById("showUndone").checked == true) {
        let filteredList = itemList.filter(item => item.isDone == false)
        showList(filteredList)
    } else {
        showList(itemList)
    }
}

let save = () => {
    localStorage.setItem("todo",JSON.stringify(itemList))
}

let loadData = () => {
    previousList = JSON.parse(localStorage.getItem("todo"))
    if(previousList.length  > 0){
        itemList = previousList
        showList(itemList)
    } else {
        itemList = []
    }
}

function btnCheck() {
    console.log("im here?")
    let text=document.getElementById("itemInput")
    console.log("hhh",text.value,"jjj",text.value.length)
    if (text.value.length ==0 || text.value==null) {
        console.log("9999")
        document.getElementById("btn-add").disabled = true
    } else {
        console.log("haha")
        document.getElementById("btn-add").disabled = false
    }
}

loadData()
