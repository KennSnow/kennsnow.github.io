//document.getElementById('remove').addEventListener('click',remoteItem);
document.getElementById('add').addEventListener('click',addItem);

function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    var ul = document.getElementById('list');
    var textNode = document.createTextNode(item);
    var p;

    if(item === '') {
        //  Add a p tag and assign a value of "Enter your todo"
        input.value = "Enter your Todo";
    }else{
        //  Create LI
        var li = document.createElement('li');

        //  Create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');

        //  Create label
        var label = document.createElement('label');
        label.setAttribute('for','item');               //  Optional

        //add to page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);

        ul.insertBefore(li,ul.childNodes[0]);

        setTimeout(() => {
            li.className = 'visual';
        },2);

        input.value = '';
    }
}