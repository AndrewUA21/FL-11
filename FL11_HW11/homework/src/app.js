let rootNode = document.getElementById("root");
window.onload = function () {
    let todoList = [];
    document.getElementById('add').onclick = function () {
        let data = document.getElementById('in').value;
        if (data !== '') {
            document.getElementById('add').disabled = false;
            let temp = {};
            temp.todo = data;
            temp.check = false;
            let i = todoList.length;
            todoList[i] = temp;
            console.log(todoList);
            out();
        } else {
            document.getElementById('add').disabled = true;
        }

    };

    function out() {
        let out = '';
        for (let key in todoList) {
            out += '<input type="checkbox" onclick="checked = true" id="check">';
            out += todoList[key].todo + '<br>';
        }
        document.getElementById('out').innerHTML = out;
    }

    function checked() {
        let check = document.getElementById('check');
        if(check){
            console.log(111);
        }else{
            console.log(222);
        }
    }
};
