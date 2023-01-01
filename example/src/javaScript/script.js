class Model {
  constructor() {
    this.todos = [
      { id: 1, text: "Do exercise DOM manipulation", completed: false },
      { id: 2, text: "Do exercise todolist MVC", completed: true },
    ];
  }

  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;
  }

  addTodo(todoText) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      completed: false,
    };
    this.todos.push(todo);

    this.onTodoListChanged(this.todos);
  }

  editTodo(id, textUpdate) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? { id: todo.id, text: textUpdate, completed: todo.completed }
        : todo
    );

    this.onTodoListChanged(this.todos);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.onTodoListChanged(this.todos);
  }

  toggleTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? { id: todo.id, text: todo.text, completed: !todo.completed }
        : todo
    );
    this.onTodoListChanged(this.todos);
  }
}

class View {
  constructor() {
    // the root element
    this.app = this.getTodoElement("#root");

    // The title of the app
    this.title = this.createTodoElement("h1");
    this.title.textContent = "Todo App";

    // The form, with a [type="text"] input
    this.form = this.createTodoElement("form");

    this.input = this.createTodoElement("input");
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";

    // Submit button
    this.submitButton = this.createTodoElement("button");
    this.submitButton.textContent = "Add";

    // The visual representation of the todo list
    this.todoList = this.createTodoElement("ul", "todo-list");

    // Form append element
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

  createTodoElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  getTodoElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  displayTodos(todos) {
    console.log(todos);
    // delete all node and render new todo list
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }
    if (todos.length === 0) {
      const p = this.createTodoElement("p");
      p.textContent = "Nothing to do! Add a task?";
      this.todoList.append(p);
    } else {
      // Create todo item nodes for each todo in state
      todos.forEach((todo) => {
        const li = this.createTodoElement("li");
        li.id = todo.id;

        // Each todo item will have a checkbox you can toggle
        const checkbox = this.createTodoElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        // The todo item text will be in a contenteditable span
        const span = this.createTodoElement("span");
        span.contentEditable = true;
        span.classList.add("editable");

        // Strike text if completed true
        if (todo.completed) {
          const strike = this.createTodoElement("s");
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }

        // The todo will also have a delete button
        const deleteBtn = this.createTodoElement("button", "delete");
        deleteBtn.textContent = "Delete";

        // Todo append item
        li.append(checkbox, span, deleteBtn);

        // Todo list append todo item
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

  // bindEditTodo(handler) {
  //   this.todoList.addEventListener("focusout", (e) => {});
  // }

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
    this.view = view;

    // Method
    this.model.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handlerAddTodo);
    this.view.bindDeleteTodo(this.handlerDeleteTodo);
    this.view.bindToggleTodo(this.handlerToggleTodo);

    // Display initial todos
    this.onTodoListChanged(this.model.todos);
  }

  onTodoListChanged(todos) {
    console.log(todos)
    this.view.displayTodos(todos);
  }

  handlerAddTodo = (todoText) => {
    this.model.addTodo(todoText);
  };

  handlerDeleteTodo = (id) => {
    this.model.deleteTodo(id);
  };

  handlerToggleTodo = (id) => {
    this.model.toggleTodo(id);
  };
}

const app = new Controller(new Model(), new View());
