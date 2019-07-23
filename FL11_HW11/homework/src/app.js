let rootNode = document.getElementById("root");

let h1 = document.createElement('h1');
h1.className = 'header';
h1.innerHTML = 'TODO Cat List';
rootNode.appendChild(h1);

let divInput = document.createElement('div');
divInput.className = 'div_input';
rootNode.appendChild(divInput);

let input = document.createElement('input');
input.setAttribute('value', 'Add new action');
divInput.appendChild(input);

let buttonAdd = document.createElement('i');
buttonAdd.className = 'material-icons button_add';
divInput.appendChild(buttonAdd);
buttonAdd.innerHTML = 'add_box';
buttonAdd.addEventListener('click', newList);


let hr = document.createElement('hr');
rootNode.appendChild(hr);


let list = document.createElement('div');
rootNode.appendChild(list);

//limit the number of  list item
function stopList() {
    let listNumber = list.children.length;
    let maxListNum = 9;
    if (listNumber > maxListNum || !input.value) {

        let messageP = document.createElement('p');
        messageP.className = 'message';
        messageP.innerHTML = 'Maximum item per list are created!';
        rootNode.appendChild(messageP);
        buttonAdd.removeEventListener('click', newList);
    }
}

// creating new list item
function newList() {
    stopList();
    let divCheckbox = document.createElement('div');
    divCheckbox.className = 'div_checkbox';
    divCheckbox.setAttribute('draggable', 'true');
    divCheckbox.addEventListener('dragstart', handleDragStart, false);
    divCheckbox.addEventListener('dragover', handleDragOver, false);
    divCheckbox.addEventListener('drop', handleDragDrop, false);
    list.appendChild(divCheckbox);


    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.className = 'checkbox';
    checkbox.setAttribute('onclick', `if(this.checked){ this.setAttribute('disabled', ''); }`);
    divCheckbox.appendChild(checkbox);

    let text = document.createElement('p');
    divCheckbox.appendChild(text);
    text.innerHTML = input.value;

    let checkboxIconEdit = document.createElement('i');
    checkboxIconEdit.className = 'material-icons';
    checkboxIconEdit.innerHTML = 'edit_box';
    divCheckbox.appendChild(checkboxIconEdit);
    checkboxIconEdit.addEventListener('click', editAction);


    let checkboxIconDelete = document.createElement('i');
    checkboxIconDelete.className = 'material-icons checkbox_icon_delete';
    checkboxIconDelete.innerHTML = 'delete_box';
    divCheckbox.appendChild(checkboxIconDelete);
    checkboxIconDelete.addEventListener('click', del);

    //edit list item
    function editAction() {

        let edit = document.createElement('div');
        edit.className = 'edit';
        divCheckbox.style.display = 'none';
        list.insertBefore(edit, divCheckbox);

        let inputEdit = document.createElement('input');
        inputEdit.className = 'input_edit';
        edit.appendChild(inputEdit);

        let editIcon = document.createElement('i');
        editIcon.className = 'edit_icon material-icons';
        editIcon.innerHTML = 'save_box';
        editIcon.addEventListener('click', save);
        edit.appendChild(editIcon);

        function save(event) {
            event.target.parentElement.style.display = 'none';
            divCheckbox.style.display = 'flex';
            text.innerHTML = inputEdit.value;
        }
    }

//delete list item
    function del() {
        divCheckbox.remove();
    }

}

// drag & drop list item
let dragSrcEl = null;

function handleDragStart(event) {
    event.target.style.opacity = '0.4';

    dragSrcEl = event.target;

    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', event.target.innerHTML);
}

function handleDragOver(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    event.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragDrop(event) {
    if (event.stopPropagation) {
        event.stopPropagation(); 
    }

    if (dragSrcEl !== true) {
        dragSrcEl.innerHTML = event.target.innerHTML;
        event.target.innerHTML = event.dataTransfer.getData('text/html');
    }
    return false;
}