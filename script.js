let todoItems = [];

function addItem() {
  const inputBox = document.getElementById('todo_input');
  todoItems.push(inputBox.value);
  localStorage.setItem('todoItems', todoItems);
  getItem();
}

function getItem() {
  todoItems = localStorage.getItem('todoItems') ? localStorage.getItem('todoItems').split(',') : [];
  document.getElementById('todo_list').innerHTML = '';
  todoItems.forEach((item) => {
    // document.getElementById('todo_list').innerHTML += `<li onclick="removeItem(this)">${item}</li>`;
    const listItem = document.createElement('li');
    listItem.innerHTML = item;
    listItem.addEventListener('click', removeItem);
    document.getElementById('todo_list').appendChild(listItem);
  })
}

function removeItem(e) {
  // console.log(e.target.innerHTML)
  const filteredArray = todoItems.filter(element => element !== e.target.innerHTML)
  localStorage.setItem('todoItems', filteredArray);
  getItem();
}

getItem();