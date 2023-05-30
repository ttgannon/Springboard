const form = document.getElementById("form");
form.addEventListener("submit", addItem);

let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []

function addItem(event) {
    event.preventDefault();
    let userInput = document.getElementById("textArea").value;
    itemsArray.push(userInput);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
    document.getElementById("textArea").value = '';
} 

function displayItems() {

    for (let i = 0; i < itemsArray.length; i++) {
        listItem = document.createElement("li");
        listItem.textContent = itemsArray[i];
        listItem.addEventListener("click", toggleStrike);
        let variable = document.querySelector("#form");
        variable.append(listItem);
        deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("id", "deleteBtn");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", remove);
        listItem.append(deleteBtn);
        
    }

}

function toggleStrike(e) {
    console.log(e.target);
    if (e.target.classList.contains("finished")) {
        e.target.setAttribute("class", "");
    }
    else {
        e.target.setAttribute("class", "finished");
    }

    
} 
function remove(e) {
    let textWithin = e.target.parentElement.innerText;
    let removalText = textWithin.replace("Delete", "").trim(); 
    console.log(removalText); 
    e.target.parentElement.remove();
    e.target.remove();
    newArray = itemsArray.filter(item => item !== removalText);
    localStorage.setItem("items", JSON.stringify(newArray));
    location.reload();
}

window.onload = function() {
    displayItems();
}