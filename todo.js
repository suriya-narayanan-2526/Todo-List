var list =document.getElementById("list-container")
var ip = document.getElementById("input-tag")
function additem()
{
    var item= document.createElement("li")
    item.innerHTML=ip.value + "<button class='remove' onclick='remove(event)'>Remove</button"
    list.append(item)
}
function remove(event)
{
   event.target.parentElement.remove()
}