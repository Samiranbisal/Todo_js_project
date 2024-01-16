
let todoList = [
    {item :'Buy Milk', dueDate: '2024-01-15'}, 
    {item :'Go to College', dueDate: '2024-01-18'}
];
todoAll_items()

function AddTodo(){
   let inputElement = document.querySelector("#main_input");
   let datetElement = document.querySelector("#todo_data");
   let todoItem = inputElement.value;
   let todoDate = datetElement.value;
   todoList.push({item :todoItem, dueDate :todoDate});
   inputElement.value = "";
   datetElement.value= "";
    todoAll_items()
}

function todoAll_items(){
    let containerElement = document.querySelector(".todo-container");

    let newHtml = "";


    for(let i = 0; i < todoList.length; i++){
        // let item = todoList[i].item;
        // let dateDue = todoList[i].dueDate;
        let {item, dueDate} = todoList[i];
        newHtml += `
            
                <span>${item}</span>
                <span>${dueDate}</span>
                <button class="btn" onClick="todoList.splice(${i}, 1); todoAll_items();" >Delete</button>
            
        `;
    }
    containerElement.innerHTML = newHtml;
}