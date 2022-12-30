class Model {
  constructor() {
    this.todos = [
      { id: 1, text: "Do exercise DOM manipulation", completed: false },
      { id: 2, text: "Do exercise todolist MVC", completed: false },
    ];
  }

  addTodo(todoText) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      completed: false,
    };
    this.todos.push(todo);
  }

  editTodo(id, textUpdate) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? { id: todo.id, text: textUpdate, completed: todo.completed }
        : todo
    );
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? { id: todo.id, text: todo.text, completed: !todo.completed }
        : todo
    );
  }

  bindTodoListChange(callback) {
    this.onTodoListChanged = callback;
  }
}

class View {
  constructor() {
    // the root element
    this.app = this.getElement("#root");
    console.log(this);

    // The title of the app
    this.title = this.createElement("h1");
    this.title.textContent = "Todo App";

    // The form, with a [type="text"] input, and a submit button
    this.form = this.createElement("form");

    this.input = this.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";

    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "Add";

    // The visual representation of the todo list
    this.todoList = this.createElement("ul", "todo-list");

    // The visual representation of the todo list
    this.form.append(this.input, this.submitButton);

    // Append the title, form, and todo list to the app
    this.app.append(this.title, this.form, this.todoList);

    this._temporaryTodoText = "";
    this._initLocalListeners();
  }

  _initLocalListeners() {
    this.todoList.addEventListener("input", (event) => {
      if (event.target.className === "editable") {
        this._temporaryTodoText = event.target.innerText;
      }
    });
  }

  get _todoText() {
    return this.input.value;
  }

  _resetInput() {
    this.input.value = "";
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  displayTodos(todos) {
    // delete all node
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }
    if (this.todoList.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing to do! Add a task?";
      this.todoList.append(p);
    } else {
      // Create todo item nodes for each todo in state
      todos.forEach((todo) => {
        const li = this.createElement("li");
        li.id = todo.id;

        // Each todo item will have a checkbox you can toggle
        const checkbox = this.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        // The todo item text will be in a contenteditable span
        const span = this.createElement("span");
        span.contentEditable = true;
        span.classList.add("editable");

        // Strike text if completed true
        if (todo.completed) {
          const strike = this.createElement("s");
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }

        // The todos will also have a delete button
        const deleteBtn = this.createElement("button", "delete");
        deleteBtn.textContent = "Delete";

        // append item
        li.append(checkbox, span, deleteBtn);
        this.todoList.append(li);
      });
    }
  }

  bindAddTodo(handler) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this._todoText) {
        handler(this._todoText);
        this._resetInput;
      }
    });
  }

  bindDeleteTodo(handler) {
    this.todoList.addEventListener("click", (e) => {
      if (e.target.className === "delete") {
        const id = parseInt(e.target.parentElement.id);
        handler(id);
      }
    });
  }

  bindEditTodo(handler) {
    this.todoList.addEventListener("focusout", (e) => {});
  }

  bindToggleTodo(handler) {
    this.todoList.addEventListener("change", (e) => {
      if (e.target.type === "checkbox") {
        const id = parseInt(e.target.parentElement.id);
        handler(id);
      }
    });
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = View;
    // Method
    this.model.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);

    // Display initial todos
    this.onTodoListChanged(this.model.todos);
  }

  onTodoListChanged(todos) {
    this.view.displayTodos(todos);
  }
  handleAddTodo = (todoText) => {
    this.model.addTodo(todoText);
  };
  handleEditTodo = (id, textUpdate) => {
    this.model.editTodo(id, textUpdate);
  };
  handleDeleteTodo = (id) => {
    this.model.deleteTodo(id);
  };
  handleToggleTodo = (id) => {
    this.model.toggleTodo(id);
  };
}

const app = new Controller(new Model(), new View());
