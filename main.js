let itemList = []

let addItem = () => {
    let toDo = {
        contents: document.getElementById("itemInput").value,
        isDone: false
    }
    itemList.push(toDo)
    showList(itemList)
    document.getElementById("itemInput").value = ''
}

let showList = (list) => {

    let message = list.map((item, index) => {
        if (item.isDone == false) {
            return `<li>
            <input type="checkbox" onchange="doneCheckbox(${index})" id="doneCheckbox${index}">
            ${item.contents}
            <button onclick="removeItem(${index})">Delete</button>
            </li>`
        } else {
            return `<li>
            <input type="checkbox" checked onchange="doneCheckbox(${index})" id="doneCheckbox${index}">
            <del>${item.contents}</del>
            <button onclick="removeItem(${index})">Delete</button>
            </li>`
        }
        
        }).join('')

        

    document.getElementById("resultArea").innerHTML = message
}

function removeItem(index) {
    itemList.splice(index, 1);
    showList(itemList)
}

// function doneTask(index) {
//     if(itemList[index].isDone == true){
//         itemList[index].isDone = false
//     } else {
//         itemList[index].isDone = true
//     }
//     console.log(itemList)
// }

function doneCheckbox(index) {
    if (itemList[index].isDone == true) {
        itemList[index].isDone = false
    } else {
        itemList[index].isDone = true
    }
    showList(itemList)
    console.log(itemList)
}


