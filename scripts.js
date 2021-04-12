// const ulList = document.querySelector('ul');
/* const ulList = document.getElementById('todo_list');

function addItem() {
  const inputValue = document.getElementById('todo_input').value;

  const listItem = document.createElement('li');
  listItem.innerHTML = inputValue;
  listItem.onclick = function () {
    ulList.removeChild(listItem);
  }
  ulList.appendChild(listItem)
} */
const ulList =  document.getElementById("quote_list");
​
function addItem (){
    const inputValuePerson = document.getElementById('person_name').value;
    const inputValueText = document.getElementById('famous_quote').value;
    const listItem = document.createElement('li');
    listItem.innerHTML = `${inputValuePerson} - <em>${inputValueText} </em>`
    listItem.onclick = function () {
                ulList.removeChild(listItem)
                
          }
    ulList.appendChild(listItem)
    
}

const addQuote = () => {
  let inputPerson = document.getElementById("person").value;
  let inputQuote = document.getElementById("quote").value;
  
  if(inputPerson && inputQuote){
      let item = document.createElement("li");
      item.innerHTML =`"${inputQuote}" -<em>${inputPerson}</em>`;
​
      item.onclick = () => {
       removeQuote(item)  
      };
​
      document.getElementById("myList").appendChild(item);
      document.getElementById("person").value= "";
      document.getElementById("quote").value= "";
  } else {
      alert("Enter a Person and Quote!")
  }
}
const removeQuote = (item) => {
  document.getElementById("myList").removeChild(item)
}