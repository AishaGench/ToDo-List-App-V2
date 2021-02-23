//const ulList = document.querySelector('ul');

const list = ['Tidy your room','Have a breakfast','Hangout with folks']
// const ulList = document.querySelector('ul');
const ulList = document.getElementById('todo_list');

list.forEach(item => {
  // ulList.innerHTML += `<li>${item}</li>`;
  const listItem = document.createElement('li');
  listItem.innerHTML = item;
  ulList.appendChild(listItem);
})


// ulList.innerHTML += `<li>${list[0]}</li>`;
// ulList.innerHTML += `<li>${list[1]}</li>`;
// ulList.innerHTML += `<li>${list[2]}</li>`;

// ulList.innerHTML += '<li>Tidy your room </li>';
// ulList.innerHTML += '<li>Have a breakfast </li>';
// ulList.innerHTML += '<li>Hangout with folks </li>';

console.log(ulList)