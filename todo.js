//document.getElementById('remove').addEventListener('click',remoteItem);
document.getElementById('add').addEventListener('click',addItem);
document.getElementById('save').addEventListener('click',saveInfo(document.getElementById('list')));
document.getElementById('load').addEventListener('click',loadInfo('KennTestCookie'));

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

function saveInfo(list) {
    let cookieName = 'KennTestCookie';
    var expires = '';
    var date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();

    document.cookie = cookieName + '=' + (list || "") + expires + "; path=/";
}

function loadInfo(named) {
    var nameEQ = named + "=";
    var ca = document.cookie.split(';');
    for(let i = 0; i < ca.length;i++){
        var c = ca[i];
        while(c.charAt(0) == ' ')c = c.substring(1,c.length);
        if(c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
