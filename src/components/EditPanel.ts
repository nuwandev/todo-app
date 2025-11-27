const EditPanel = () => {
  return ` 
  <div
    id="taskModal"
    class="fixed inset-0 items-center justify-center z-50 flex h-screen w-screen"
  >
    <div class="bg-white w-full max-w-md rounded-lg p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold text-gray-800">Edit Task</h2>
        <button id="closeModalBtn" class="text-gray-500 hover:text-gray-700">
          ✕
        </button>
      </div>

      <form id="taskEditForm" class="space-y-4">
        <input type="hidden" id="editTaskId" />

        <div>
          <label
            for="editTaskTitle"
            class="block text-sm font-medium text-gray-700"
            >Title</label
          >
          <input
            id="editTaskTitle"
            type="text"
            placeholder="Task title"
            class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            for="editTaskNotes"
            class="block text-sm font-medium text-gray-700"
            >Notes</label
          >
          <textarea
            id="editTaskNotes"
            placeholder="Add details or notes"
            class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          ></textarea>
        </div>

        <div>
          <label
            for="editTaskDueDate"
            class="block text-sm font-medium text-gray-700"
            >Due date</label
          >
          <input
            id="editTaskDueDate"
            type="date"
            class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="flex items-center justify-end gap-2 pt-2">
          <button
            type="button"
            id="cancelEditBtn"
            class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            id="saveEditBtn"
            class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
  `;
};

export default EditPanel;
