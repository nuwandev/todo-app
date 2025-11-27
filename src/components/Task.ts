import type { TTask } from "../types";

const TaskElement = (task: TTask) => {
  return task.completed
    ? `
    <li
      id="taskItem"
      data-task-id="${task.id}"
      class="task-item completed flex items-center justify-between bg-green-50 p-3 rounded-lg shadow-sm cursor-pointer hover:bg-green-100"
    >
      <div class="flex items-center gap-2">
        <input type="checkbox" id="toggleTask" data-task-id="${task.id}" class="toggle-task" checked />
        <span class="task-text text-gray-700 line-through">${task.title}</span>
      </div>
      <div class="flex items-center gap-2">
        <button id="editTaskBtn" data-task-id="${task.id}" class="edit-task-btn text-blue-500 hover:text-blue-700 cursor-pointer" onclick="event.stopPropagation()">
          Edit
        </button>
        <button id="deleteTaskBtn" data-task-id="${task.id}" class="delete-task-btn text-red-500 hover:text-red-700 cursor-pointer" onclick="event.stopPropagation()">
          Delete
        </button>
      </div>
    </li>
    `
    : `
    <li
      id="taskItem"
      data-task-id="${task.id}"
      class="task-item flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
    >
      <div class="flex items-center gap-2">
        <input type="checkbox" id="toggleTask" data-task-id="${task.id}" class="toggle-task" />
        <span class="task-text text-gray-700">${task.title}</span>
      </div>
      <div class="flex items-center gap-2">
        <button id="editTaskBtn" data-task-id="${task.id}" class="edit-task-btn text-blue-500 hover:text-blue-700 cursor-pointer" onclick="event.stopPropagation()">
          Edit
        </button>
        <button id="deleteTaskBtn" data-task-id="${task.id}" class="delete-task-btn text-red-500 hover:text-red-700 cursor-pointer" onclick="event.stopPropagation()">
          Delete
        </button>
      </div>
    </li>
    `;
};

export default TaskElement;
