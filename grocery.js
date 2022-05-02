var list=document.getElementById('todo-list')
var button=document.getElementById('add-item')
var count=0
function onclick_groc(){
    var grocery_add=document.getElementById("grocery-add").value;
    if(grocery_add!=''){
    var newList=document.createElement('li')
    var textNode=document.createTextNode(grocery_add)
    newList.appendChild(textNode)
    newList.id="item"+count
    list.appendChild(newList)
    document.getElementById("grocery-add").value=""
    }
    else
    alert("Enter item")
}
var grocery_add1=document.getElementById("grocery-add")
grocery_add1.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        document.getElementById('add-item').click();
    }
})