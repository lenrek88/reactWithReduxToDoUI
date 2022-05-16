
let idValue = 1;                                                                                                        // Уникальный id

function isAddTask(evt) {
    evt.preventDefault();                                                                                               // Отключаем обновление страницы

    idValue += 1;                                                                                                       // Счётчик id

    let textHigh;
    let areaHighTask;



    // Или high или low

    if (this.dataset.priority === 'high') {
        areaHighTask = document.querySelector('.high-task');
        textHigh = document.querySelectorAll('.new.task')[0].value;
        textHigh = textHigh.trim()
        document.querySelectorAll('.new.task')[0].value = '';

    }
    if (this.dataset.priority === 'low') {
        areaHighTask = document.querySelector('.low-task');
        textHigh = document.querySelectorAll('.new.task')[1].value;
        textHigh = textHigh.trim()
        document.querySelectorAll('.new.task')[1].value = '';

    }


    // Если пустая строка


    let formThis = this.form;

    if (textHigh === '') {
        function errorForm() {
            formThis.className = 'task add';
        }
        formThis.className = 'task add error';
        setTimeout(errorForm, 1000)
        return;
    }



    let addTask = document.createElement('div');
    addTask.className = 'add-task';
    addTask.id = idValue;
    let form2 = document.createElement('form');
    form2.className = 'not-completed';

    let inp = document.createElement('input');
    inp.type = 'checkbox';

    let lbl = document.createElement('label');
    let btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'buttonDelete';
    btn.id = idValue;

    // Вешаем обработчик событий на новые таски

    btn.addEventListener('click', deleteTask)
    inp.addEventListener('click', changeStatus)

    // Вставка в body //

    areaHighTask.append(addTask);
    addTask.append(form2);
    form2.append(inp);
    form2.append(lbl);
    lbl.textContent = textHigh;
    form2.append(btn);

}

function changeStatus() {
    if (this.form.className === 'not-completed done'){
        this.form.className = 'not-completed';
    } else {
        this.form.className = 'not-completed done';
    }
}


function deleteTask(){
    this.parentElement.remove();
}


window.onload = function () {
    let deleteId = document.querySelectorAll(".buttonDelete")
    let buttonAddHighTask = document.querySelectorAll('.sumbit.task')
    for (let elem of deleteId) {
        elem.addEventListener('click', deleteTask)
        elem.form[0].addEventListener('click', changeStatus)
    }
    for (let elem of buttonAddHighTask) {
        elem.addEventListener('click', isAddTask)
    }
    // for (let elem of )

}



