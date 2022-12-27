const tasks = [];
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

  this.reset();

  renderTasks(pomodoroTableBody, tasks);
}

pomodoroForm.addEventListener("submit", addTask);

function renderTasks(tBodyNode, tasks = []) {
  tBodyNode.innerHTML = tasks
    .map(
      (task, id) => `
    <tr>
    <td class="cell-task-name">${task.taskName}</td>
    <td class="cell-pom-count">${task.pomodoroDone} / ${
        task.pomodoroCount
      } pomodori</td>
    <td class="cell-pom-controls">
    ${
      task.finished
        ? "Finished"
        : `<button class="js-task-done" data-id=${id}>Done</button>
    <button class="js-increase-pomodoro" data-id=${id}>Increase Pomodoro Count</button>`
    }
    <button class="js-delete-task" data-id=${id}>Delete Task</button>
    </td>
    </tr>`
    )
    .join("");
}

const finishedTask = (tasks, taskId) => {
  tasks[taskId].finished = true;
};

const increasePomodoroDone = (tasks, taskId) => {
  tasks[taskId].pomodoroDone += 1;
};

const deleteTask = (tasks, taskId) => {
  tasks.splice(taskId, 1);
};

const handleTaskEventListeners = (e) => {
  const classList = e.target.className;
  const taskId = e.target.dataset.id;

  /js-task-done/.test(classList)
    ? finishedTask(tasks, taskId)
    : /js-increase-pomodoro/.test(classList)
    ? increasePomodoroDone(tasks, taskId)
    : /js-delete-task/.test(classList)
    ? deleteTask(tasks, taskId)
    : null;

  renderTasks(pomodoroTableBody, tasks);
};

pomodoroTableBody.addEventListener("click", handleTaskEventListeners);
