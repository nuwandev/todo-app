import "./style.css";
import Task from "./components/Task";
import type { TTask } from "./types";
import { generateRandomId } from "./utils";

const initApp = async () => {
  const response = await fetch("/src/components/app.html");
  const appHtml = await response.text();
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = appHtml;
};

await initApp();

let tasksList: TTask[] = [];

const handleAddTask = () => {
  const taskInput = document.getElementById("taskInput");
  const task = (taskInput as HTMLInputElement)?.value;

  if (task) {
    tasksList.unshift({ id: generateRandomId(), task });
    console.log(tasksList);
    updateTaskList();
    (taskInput as HTMLInputElement).value = "";
  }
};
document.getElementById("addBtn")!.addEventListener("click", handleAddTask);

const handleDeleteTask = (btn: HTMLElement) => {
  console.log("delete task", btn.dataset.taskId);
  tasksList = tasksList.filter((task) => task.id !== btn.dataset.taskId);
  updateTaskList();
};

const updateEventListeners = () => {
  document.querySelectorAll("#deleteTaskBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      handleDeleteTask(btn as HTMLElement);
    });
  });
};

const updateTaskList = () => {
  let taskListBody = "";
  tasksList.forEach((task) => {
    taskListBody += Task(task);
  });
  document.getElementById("taskList")!.innerHTML = taskListBody;
  updateEventListeners();
};