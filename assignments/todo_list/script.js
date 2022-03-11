let btn = document.querySelector('button')
btn.addEventListener('click',addToDo);
let todos = document.querySelector('.todos');
let count = 0;
function addToDo(){
    let input = document.querySelector('input').value;
    if(input){
        let p = document.createElement('p');
        document.querySelector('input').value = " ";
        p.innerHTML = input;
        p.setAttribute('key',count);
        count++;
        todos.appendChild(p);
        p.addEventListener('click',p.remove);
    }   
}