//Toggle Dark mode
function setDark() {
    var element = document.getElementById("body");
    element.classList.toggle("dark-mode");
}

// Add new todo
function newTodo(event) {
    var li = document.createElement("li");
    var inputValue = document.getElementById("todo-input").value;
    var p = document.createElement("p");
    var t = document.createTextNode(inputValue);

    p.appendChild(t);
    li.appendChild(p);
    li.className = "todo-item";
    li.className += " show";


    if (event.which == 13 || event.keyCode == 13 || event.onclick) {
        if (inputValue === "") {
            alert("You must write something!");
        } else {
            document.getElementById("todo-list-id").appendChild(li);
        }

        document.getElementById("todo-input").value = "";
    }

    var span = document.createElement("span");
    span.className = "close";
    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        div.remove();
        countTodos();
    };
    li.appendChild(span);
    li.onclick = function() {
        this.classList.toggle("checked");
        if (this.classList.contains("checked")) {
            removeClass(this, "incomplete");
            removeClass(this, "todo-item");
            addClass(this, "completed");
            countTodos();
        } else {
            removeClass(this, "completed");
            addClass(this, "todo-item");
            addClass(this, "incomplete");
            countTodos();
        }
    }

    addClass(li, "show");
    addClass(li, "incomplete");
    countTodos();
}

function newTodoOnClick() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("todo-input").value;
    var p = document.createElement("p");
    var t = document.createTextNode(inputValue);

    p.appendChild(t);
    li.appendChild(p);
    li.className = "show";
    li.className += " todo-item";

    if (inputValue === "") {
        alert("You must write something!");
    } else {
        document.getElementById("todo-list-id").appendChild(li);
    }
    document.getElementById("todo-input").value = "";

    var span = document.createElement("span");
    span.className = "close";
    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        div.remove();
        countTodos();
    };
    li.appendChild(span);
    li.onclick = function() {
        this.classList.toggle("checked");
        if (this.classList.contains("checked")) {
            removeClass(this, "incomplete");
            removeClass(this, "todo-item");
            addClass(this, "completed");
            countTodos();
        } else {
            removeClass(this, "completed");
            addClass(this, "todo-item");
            addClass(this, "incomplete");
            countTodos();
        }
    }

    addClass(li, "show");
    addClass(li, "incomplete");
    countTodos();
}

//Added filter methods

function filterTodos(t) {
    var x, i;
    x = document.getElementsByTagName("li");
    if (t == "all") {
        t = "";
    }
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        countTodos();
        if (x[i].className.indexOf(t) > -1) {
            addClass(x[i], "show");
            countTodos();
        }
    }
}

function addClass(element, name) {
    element.classList.add(name);
}

function removeClass(element, name) {
    element.classList.remove(name);
}

//Add function to clear complete Todos
function clearTodos() {
    var td, i;
    td = document.getElementsByTagName("li");
    console.log(td.length);
    for (i = 0; i < td.length; i++) {
        if (td[i].classList.contains("checked")) {
            console.log(td[i]);
            td[i].remove();
            i--;
        }
        countTodos();

    }
}

// Check number of Todo items
function countTodos() {
    var li = document.getElementsByClassName("todo-item");
    document.getElementById("todo-number").innerText = li.length;
}

//Add active class to the current button to highlight it
var todoFilter = document.getElementById("todo-filter");
var filters = todoFilter.getElementsByClassName("filter");
for (var i = 0; i < filters.length; i++) {
    filters[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        removeClass(current[0], "active");
        this.className += " active";
    });
}