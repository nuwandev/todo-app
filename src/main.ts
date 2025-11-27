import "./style.css";
import Task from "./components/Task";
import type { TTask } from "./types";
import { generateRandomId } from "./utils";

let showingStatus: "all" | "active" | "completed" = "all";

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
    tasksList.unshift({
      id: generateRandomId(),
      task: task,
      completed: false,
    });
    showingStatus = "all";
    updateTaskList();
    updateLocalStorage();
    (taskInput as HTMLInputElement).value = "";
  }
};
document.getElementById("addBtn")!.addEventListener("click", handleAddTask);

const handleDeleteTask = (btn: HTMLElement) => {
  tasksList = tasksList.filter((task) => task.id !== btn.dataset.taskId);
  updateTaskList();
  updateLocalStorage();
};

const handleClickTask = (taskId: string) => {
  const task = tasksList.find((task) => task.id === taskId);
  if (task) {
    task.completed = !task.completed;
  }

  updateTaskList();
  updateLocalStorage();
};

const updateEventListeners = () => {
  document.querySelectorAll("#deleteTaskBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      handleDeleteTask(btn as HTMLElement);
    });
  });

  document.querySelectorAll("#taskItem").forEach((taskItem) => {
    taskItem.addEventListener("click", () => {
      handleClickTask((taskItem as HTMLElement).dataset.taskId!);
    });
  });
};

const updateActiveTaskList = () => {
  let taskListBody = "";
  tasksList.forEach((task) => {
    if (!task.completed) {
      taskListBody += Task(task);
    }
  });
  document.getElementById("taskList")!.innerHTML = taskListBody;
};

const updateCompletedTaskList = () => {
  let taskListBody = "";
  tasksList.forEach((task) => {
    if (task.completed) {
      taskListBody += Task(task);
    }
  });
  document.getElementById("taskList")!.innerHTML = taskListBody;
};

const updateTaskList = () => {
  if (showingStatus === "all") {
    let taskListBody = "";
    tasksList.forEach((task) => {
      taskListBody += Task(task);
    });
    document.getElementById("taskList")!.innerHTML = taskListBody;
  } else if (showingStatus === "active") {
    updateActiveTaskList();
  } else if (showingStatus === "completed") {
    updateCompletedTaskList();
  }
  updateEventListeners();
};

const activeTabBtn = document.getElementById("activeTab");
const completedTabBtn = document.getElementById("completedTab");
const allTabBtn = document.getElementById("allTab");

const updateTabStyles = (
  activeTab: HTMLElement,
  inactiveTabs: HTMLElement[]
) => {
  activeTab.classList.add("border-blue-500", "text-blue-500", "font-semibold");
  activeTab.classList.remove(
    "border-transparent",
    "text-gray-500",
    "hover:text-blue-500",
    "hover:border-blue-500"
  );

  inactiveTabs.forEach((tab) => {
    tab.classList.remove("border-blue-500", "text-blue-500", "font-semibold");
    tab.classList.add(
      "border-transparent",
      "text-gray-500",
      "hover:text-blue-500",
      "hover:border-blue-500"
    );
  });
};

allTabBtn!.addEventListener("click", () => {
  showingStatus = "all";
  updateTabStyles(allTabBtn!, [activeTabBtn!, completedTabBtn!]);
  updateTaskList();
});

activeTabBtn!.addEventListener("click", () => {
  showingStatus = "active";
  updateTabStyles(activeTabBtn!, [allTabBtn!, completedTabBtn!]);
  updateTaskList();
});

completedTabBtn!.addEventListener("click", () => {
  showingStatus = "completed";
  updateTabStyles(completedTabBtn!, [allTabBtn!, activeTabBtn!]);
  updateTaskList();
});

function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasksList));
}

function loadFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    const parsedTasks: TTask[] = JSON.parse(storedTasks);
    tasksList.push(...parsedTasks);
    updateTaskList();
  }
}

loadFromLocalStorage();
