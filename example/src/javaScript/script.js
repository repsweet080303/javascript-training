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
}

class View {
  constructor() {
    // the root element
    this.app = this.getElement("#root");

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
    console.log(this);

    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    if (todos.length === 0) {
      const text = this.createElement("p");
      text.textContent = "Nothing to do! Add a task?";
      this.todoList.append(text);
    } else {
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

        // If the todo is complete, it will have a strikethrough
        if (todo.completed) {
          const strike = this.createElement("s");
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }

        // The todos will also have a delete button
        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "Delete";

        // append the todo item to the todo list
        li.append(checkbox, span, deleteButton);
        this.todoList.append(li);
      });
    }
  }
}

class Controller {
  constructor(model, View) {
    this.model = model;
    this.view = View;
  }
}

const app = new Controller(new Model(), new View());
