let storage = JSON.parse(localStorage.getItem("storage")) || [];

function Add() {
  let inputValue = document.querySelector("#input-value");
  let Values = inputValue.value.toUpperCase();

  if (Values == "") return;
  const task = { text: Values };

  storage.push(task);

  inputValue.value = "";

  localStorage.setItem("storage", JSON.stringify(storage));

  display();
}

function Delete(i) {
  storage.splice(i, 1);

  localStorage.setItem("storage", JSON.stringify(storage));

  display();
}

function Edit(i) {
  const newText = prompt("Edit the task :", storage[i].text);

  if (newText !== null) {
    console.log("i am working");
    storage[i].text = newText.toUpperCase();
    localStorage.setItem("storage", JSON.stringify(storage));
    display();
  }
}

function display() {
  let appendValue = document.querySelector("#output-append");

  appendValue.innerHTML = "";

  storage.forEach((task, i) => {
    console.warn(task.text);
    const li = document.createElement("li");
    li.innerHTML = `
    <span>${task.text}</span>  
    <hr/> 
    <div class="btn-div">
    <button class="edit-btn" onclick="Edit(${i})">Edit</button>
    <button class="delete-btn" onclick="Delete(${i})">Delete</button>
   </div>
    `;
    appendValue.appendChild(li);
  });
}
display();
