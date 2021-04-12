/* localStorage.setItem('myCat', 'Minosh'); //Setting value
const myCat = localStorage.getItem('myCat'); //Getting value
localStorage.removeItem('myCat'); //remove by one by
localStorage.clear(); //removes everything inside of local storage
alert(myCat); */

let todoItems = [];

function addItem(){ //it is declare function
    const inputBox = document.getElementById('todo_input');
    todoItems.push(inputBox.value);
    localStorage.setItem('todoItems', todoItems);
    console.log(todoItems);
    getItem()
}

function getItem() {
    //const itemsToList = localStorage.getItem('todoItems').split(',');
    todoItems = localStorage.getItem('todoItems') ?localStorage.getItem('todoItems').split(',') :[];
    document.getElementById('todo_list').innerHTML ='';

    todoItems.forEach((item) => {
      document.getElementById('todo_list').innerHTML += `<li onclick="removeItem(this)">${item}</li>`;
    })
}


function removeItem(item) {
  const filteredArray = todoItems.filter(element => element !== item.innerHTML)
  localStorage.setItem('todoItems', filteredArray);
  getItem();
}

getItem()

// Filter out the item to remove
// Assign filtered array to a variable
// Store new filtered array variable in localStorage




/* todoItems.push('Tidy your room');
todoItems.push('Have a breakfast');
todoItems.push('Go to dentist');

localStorage.setItem('todoItems', todoItems);
console.log(localStorage.getItem('todoItems')) */



// const myCat = 'Minosh'; //Setting value
// alert(myCat); //Getting value

/* const inputBox = document.getElementById('todo_input');
// console.log(inputBox.id); 
// console.log(inputBox.name); 
// console.log(inputBox.type);  

console.log(inputBox) */

/* function addItem() {
    const inputBox = document.getElementById('todo_input');
    localStorage.setItem('todoItem', inputBox.value);
    console.log(localStorage.getItem('todoItem'))
  } */