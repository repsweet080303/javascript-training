let tasks = [];
const pomodoroForm = document.querySelector(".js-add-task");
const pomodoroTableBody = document.querySelector(".js-task-table-body");

function addTask(event) {
  event.preventDefault();
  const taskName = this.querySelector(".js-task-name").value;
  const pomodoroCount = this.querySelector(".js-pomodoro-count").value;

  tasks.push({
    taskName,
    pomodoroDone: 0,
    pomodoroCount,
    finished: false,
  });

  console.log(tasks);

  this.reset();

  renderTasks(pomodoroTableBody, tasks);
}

pomodoroForm.addEventListener("submit", addTask);

function renderTasks(tBodyNode, tasks = []) {
  tBodyNode.innerHTML = tasks
    .map((task, id) => `
    <tr>
    <td class="cell-task-name"></td>
    </tr>`)
}
