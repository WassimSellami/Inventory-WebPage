function saveAddField(newItemName, newItemQte, newItemSrc){
	removeAddField()
	createNewItem(newItemName, newItemQte, newItemSrc)
	createNewAddButton()
	//updateTable("add", newItemName, newItemQte, newItemSrc, "cards")


}
	
function addButtonClicked(){
	removeAddButton()
	createNewAddField()
}

function createNewAddButton(){				
	var addButtonContents = '<button  class="add-button"type="button"onclick="addButtonClicked()"></button>'
	appendAddButton(addButtonContents);
}

function createNewAddField(){				
	var addFieldContents =
	    `<input type="file" name="photo" id="input-image" accept="image/*" style="display: none;">
        <label class = "center"for="input-image" style="cursor: pointer;">Upload Image</label>
        <input  type="text" name="input-name" id="input-name" placeholder="Component Name"
		style="cursor: pointer; height:20px;border: none; border-radius:5px;">
        <input  type="text" name="input-qte" id="input-qte" placeholder="Quantity"
		style="cursor: pointer;border: none; border-radius:5px; height:20px">
        <button  type="button"onclick="saveAddField(document.getElementById('input-name').value,
        document.getElementById('input-qte').value, inputToURL(document.getElementById('input-image')))"
		style="cursor: pointer;border: none; border-radius:5px; background-color:white; height:20px">Save</button>`
	appendAddField(addFieldContents);
}

function createNewItem(newItemName, newItemQte, newItemSrc){				
	var itemContents = 
	   `<div class="center"><img class="component_image" src=${newItemSrc}></div>
		<div class = "center">${newItemName}</div>
		<div class = "center">Qte = ${newItemQte} </div>`
	appendItem(itemContents)
}

function appendAddButton(addButtonContents){
	var newAddButton = document.createElement('div')
	newAddButton.classList.add("add-div")
	newAddButton.innerHTML = addButtonContents
	items = document.getElementsByClassName('items')[0]
	items.append(newAddButton)
}

function appendAddField(addFieldContents){
	var newAddField = document.createElement('div')
	newAddField.classList.add("add-field")
	newAddField.classList.add("center")
	newAddField.innerHTML = addFieldContents
	items = document.getElementsByClassName('items')[0]
	items.append(newAddField)
}

function appendItem(itemContents){
	var newItem = document.createElement('div')
	newItem.classList.add("item")
	newItem.classList.add("center")

	newItem.innerHTML = itemContents
	items = document.getElementsByClassName('items')[0]
	items.append(newItem)
}

function removeAddField(){
	var toRemove = document.getElementsByClassName("add-field")[0];
	toRemove.remove();
}

function removeAddButton(){
	var toRemove = document.getElementsByClassName("add-div")[0];
	toRemove.remove();

}

function inputToURL(inputElement) {
    var file = inputElement.files[0];
    if(file)
    	return window.URL.createObjectURL(file)
    else 
    	return "https://i.postimg.cc/HswZ64rh/def.png"
}
 
function updateTable($status, $name, $url, $qte, $category)
{
	// session_start();
	// console.log("gzfgqsd");
	// $_SESSION['status'] = $status;
	// $_SESSION['name'] = $name;
	// $_SESSION['url'] = $url;
	// $_SESSION['qte'] = $qte;
	// $_SESSION['category'] = $category;
	
	// header("Location: http://localhost/RAS%20inventory/update.php");
	// exit();

}


   
// Function to create the cookie
function createCookie(name, value, days) {
    var expires;
    alert("gdsgqd");
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
      
    document.cookie = escape(name) + "=" + 
        escape(value) + expires + "; path=/update.php";
}
