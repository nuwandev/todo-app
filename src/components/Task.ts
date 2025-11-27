import type { TTask } from "../types";

const TaskElement = (task: TTask) => {
  return task.completed
    ? `
    <li
      id="taskItem"
      data-task-id="${task.id}"
      class="flex items-center justify-between bg-green-50 p-3 rounded-lg shadow-sm cursor-grab hover:bg-green-100"
    >
      <span class="text-gray-700 line-through">${task.task}</span>
      <button id="deleteTaskBtn" data-task-id="${task.id}" class="text-red-500 hover:text-red-700 cursor-pointer">
        Delete
      </button>
    </li>
      `
    : `
    <li
      id="taskItem"
      data-task-id="${task.id}"
      class="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm cursor-grab hover:bg-gray-100"
    >
      <span class="text-gray-700">${task.task}</span>
      <button id="deleteTaskBtn" data-task-id="${task.id}" class="text-red-500 hover:text-red-700 cursor-pointer">
        Delete
      </button>
    </li>
  `;
};

export default TaskElement;
