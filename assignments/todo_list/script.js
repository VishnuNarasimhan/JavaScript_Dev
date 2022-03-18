async function  get_data(){
   let response = await fetch('https://jsonplaceholder.typicode.com/todos');
   return (response.json());
}

async function get_user() {
  let user = await get_data();
  let completed ="";
  let incompleted ="";
  let fullList = "";
  user.forEach(todoList => {
      if (todoList.completed === true) {
          completed += (`<table>UserId = ${todoList.userId}, ID = ${todoList.id}, title = ${todoList.title}, Completed = ${todoList.completed}</table>`)
      }if (todoList.completed===false){
          incompleted+=(`<table>UserId = ${todoList.userId}, ID = ${todoList.id}, title = ${todoList.title}, Completed = ${todoList.completed}</table>`)
      }
      fullList += (`<table>UserId = ${todoList.userId}, ID = ${todoList.id}, title = ${todoList.title}, Completed = ${todoList.completed}</table>`)
  });

  document.querySelector('#btn-1').addEventListener('click', completed_Task);
  document.querySelector('#btn-3').addEventListener('click', pending_Task);
  document.querySelector('#btn-2').addEventListener('click', full_List);

  function completed_Task() {
    document.getElementById('res').innerHTML=completed;
  }
  function pending_Task() {
    document.getElementById('res').innerHTML=incompleted;
  }
  function  full_List() {
    document.getElementById('res').innerHTML=fullList;
  }

  document.querySelector('#btn-1').addEventListener('dblclick', completed_Task_Before);
  document.querySelector('#btn-2').addEventListener('dblclick', pending_Task_Before);
  document.querySelector('#btn-3').addEventListener('dblclick', full_Task_Before);

  function completed_Task_Before(){
    document.getElementById('res').innerHTML=" ";
  }
  function pending_Task_Before(){
    document.getElementById('res').innerHTML=" ";
  }
  function full_Task_Before(){
    document.getElementById('res').innerHTML=" ";
  }
  
}
get_user();
  