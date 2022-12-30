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
 
  }
}

class Controller {
  constructor(model, View) {
    this.model = model;
    this.view = View;
  }
}

const app = new Controller(new Model(), new View());
