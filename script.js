//Task 1-When a user enter the name of the item and click add button, the item will be added to the list.
//Task 2-When a user click on the item in the list, the item will be removed / deleted.
const itemList = localStorage.getItem('todoItems').split(',')
console.log(itemList); //testing 

itemList.forEach(element => {
  const item = document.createElement('li');
  item.innerHTML = element;
  
  item.onclick = function() {
    document.getElementById('todo_list').removeChild(item);
  };
  
  document.getElementById('todo_list').appendChild(item);
 
});

function addItem (){
    // alert(document.getElementById('todo_input').value);
    if (document.getElementById('todo_input').value) {
      const item = document.createElement('li');
      item.innerHTML = document.getElementById('todo_input').value;
      // item.onclick = () => removeItem(item);
      item.onclick = function() {
        document.getElementById('todo_input').removeItem(item);
      };
      document.getElementById('todo_list').appendChild(item);

      itemList.push(document.getElementById('todo_input').value);
      localStorage.setItem('todoItems',itemList);

      document.getElementById("todo_input").value = "";
    } else {
      alert('Enter an item')
    }
}

