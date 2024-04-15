let tasks = [];

let addTask = () =>{
  let taskInput = document.getElementById('taskInput');
  let taskText = taskInput.value.trim();
  if (taskText !== '') {
    tasks.push(taskText);
    displayTasks();
    taskInput.value = ''; 
  }
}

let bool = true; 
let sortTasks = () => {  
  let img = document.querySelector("#sortImg");
  if ( bool === true) {
    img.src = "./assets/Group 90.png";
    tasks.sort((a, b) => a.localeCompare(b)); 
    bool = false; 
  } else {    
    img.src = "./assets/Group 38.png";
    tasks.sort((a, b) => b.localeCompare(a)); // azalan sıralama
    bool = ture; 
  }
  displayTasks();
}


let deleteTask = (index) =>{
  tasks.splice(index, 1);
  displayTasks();
}

let removeInput = () =>{
  let del = document.getElementById('taskInput');
  if(del){
  del.value = "";
  }
}

let displayTasks = () =>{
  let taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; 

  tasks.forEach((item, index) => {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.textContent = item;
    if( tasks.length-1 <5 ){
     li.appendChild(span);
    }else{
      alert("Maksimum 5 element yazmaq olar");
    }

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => deleteTask(index);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

displayTasks();
