let rootNode = document.getElementById('root');

function addListItem(task) {
    let list = document.createElement('li');
    list.className = 'list-item';
    list.setAttribute('draggable', 'true');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    list.appendChild(checkbox);
    list.appendChild(task);
    list.innerHTML += '<i class="material-icons edit">edit</i>';
    list.innerHTML += '<i class="material-icons delete">delete</i>';
    return list;
}
function inputData() {
    let inputText = document.getElementById('input-task').value;
    console.log(inputText);
    let span = document.createElement('span');
    span.innerText = inputText;
    return span;
}
function createTask() {
    let ListItems = document.querySelectorAll('.list-item');
    if (ListItems.length < 10 && document.getElementById('input-task').value !== '') {
        let task = inputData();
        let list = addListItem(task);
        document.querySelector('.list').appendChild(list);
        document.getElementById('input-task').value = '';
    } else if (document.getElementById('input-task').value === '') {
        return false;
    } else {
        document.querySelector('.message').innerText = 'Maximum item per list are created';
        document.getElementById('input-task').value = '';
    }
}
document.getElementById('add').addEventListener('click', createTask);

function deleteTask(e) {
    let deleteEvent = e.target;
    if (deleteEvent.className === 'material-icons delete') {
        let li = deleteEvent.parentNode;
        li.parentNode.removeChild(li);
        if (document.querySelectorAll('.list-item').length < 10) {
            document.querySelector('.message').innerText = ''
        }
    }
    e.stopPropagation();
}

