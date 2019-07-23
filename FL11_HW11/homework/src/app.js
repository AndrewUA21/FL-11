let rootNode = document.getElementById('root');
let dragged;
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

function edit(e) {
    let eventEdit = e.target;
    if (eventEdit.className === 'material-icons edit') {
        let li = eventEdit.parentNode;
        let liBuffer = li;
        let list = document.createElement('li');
        let input = document.createElement('input');
        input.type = 'text';
        input.className = 'replace-task';
        list.appendChild(input);
        list.innerHTML += '<i class="material-icons save">save</i>';
        li.parentNode.replaceChild(list, li);
        let saveButton = document.querySelector('.save');
        saveButton.addEventListener('click', () => {
            let newTask = document.querySelector('.replace-task').value;
            if (newTask !== '') {
                liBuffer.children[1].innerText = newTask;
                list.parentNode.replaceChild(liBuffer, list);
            }
        });
    }
    e.stopPropagation();
}

function changeTask(e) {
    deleteTask(e);
    edit(e);
}
document.querySelector('.list').addEventListener('click', changeTask);

function checked(e) {
    let check = e.target;
    if (check.checked) {
        check.setAttribute('disabled', 'disabled');
    }
}
document.querySelector('.list').addEventListener('change', checked);


function dragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    if (e.target.className === 'list-item') {
        dragged = e.target;
    }
}
document.querySelector('.list').addEventListener('drag', dragStart);

function setBorder(e) {
    if (e.target.className === 'list-item') {
        e.target.style.background = '#E2F1FD';
    }
}
document.querySelector('.list').addEventListener('dragenter',setBorder);

function deleteBorder(e) {
    if (e.target.className === 'list-item') {
        e.target.style.background = '';
    }
}
document.querySelector('.list').addEventListener('dragleave', deleteBorder);

function dropEnd(e) {
    e.preventDefault();
    e.target.style.background = '';
    dragged.parentNode.removeChild(dragged);
    let parent = e.target.parentNode;
    if (parent.tagName === 'UL' && e.target !== parent.lastChild && e.target.className === 'list-item') {
        parent.insertBefore(dragged, e.target);
    } else {
        if (parent.tagName === 'UL' && e.target.className === 'list-item') {
            parent.insertBefore(dragged, e.target.nextSibling);
        }
    }
}
document.querySelector('.list').addEventListener('drop', dropEnd);

function setMoveCursore (e){
    event.preventDefault();
    if (e.target.className === 'list-item' && e.target.className !== 'task') {
        e.target.style.cursor = 'move';
    } else {
        if (e.target.className === 'task') {
            e.target.style.cursor = 'default';
        }
    }
}
document.querySelector('.list').addEventListener('mouseover', setMoveCursore);
document.querySelector('.list').addEventListener('dragover', function (event){
    event.preventDefault();
});