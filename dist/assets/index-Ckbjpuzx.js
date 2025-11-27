(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function d(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=d(o);fetch(o.href,s)}})();const f=e=>e.completed?`
    <li
      id="taskItem"
      data-task-id="${e.id}"
      class="task-item completed flex items-center justify-between bg-green-50 p-3 rounded-lg shadow-sm cursor-pointer hover:bg-green-100"
    >
      <div class="flex items-center gap-2">
        <input type="checkbox" id="toggleTask" data-task-id="${e.id}" class="toggle-task" checked />
        <span class="task-text text-gray-700 line-through">${e.title}</span>
      </div>
      <div class="flex items-center gap-2">
        <button id="editTaskBtn" data-task-id="${e.id}" class="edit-task-btn text-blue-500 hover:text-blue-700 cursor-pointer" onclick="event.stopPropagation()">
          Edit
        </button>
        <button id="deleteTaskBtn" data-task-id="${e.id}" class="delete-task-btn text-red-500 hover:text-red-700 cursor-pointer" onclick="event.stopPropagation()">
          Delete
        </button>
      </div>
    </li>
    `:`
    <li
      id="taskItem"
      data-task-id="${e.id}"
      class="task-item flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
    >
      <div class="flex items-center gap-2">
        <input type="checkbox" id="toggleTask" data-task-id="${e.id}" class="toggle-task" />
        <span class="task-text text-gray-700">${e.title}</span>
      </div>
      <div class="flex items-center gap-2">
        <button id="editTaskBtn" data-task-id="${e.id}" class="edit-task-btn text-blue-500 hover:text-blue-700 cursor-pointer" onclick="event.stopPropagation()">
          Edit
        </button>
        <button id="deleteTaskBtn" data-task-id="${e.id}" class="delete-task-btn text-red-500 hover:text-red-700 cursor-pointer" onclick="event.stopPropagation()">
          Delete
        </button>
      </div>
    </li>
    `,h=(e=10)=>Math.random().toString(36).substring(2,e+2),T=()=>` 
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
  `,E=()=>`<div class="flex h-screen w-screen items-center justify-center bg-gray-100">
  <div
    id="todoContainer"
    class="bg-white shadow-lg rounded-lg p-6 w-full max-w-md transition-all duration-300 overflow-hidden h-[500px]"
  >
    <h1 class="text-2xl font-bold text-gray-800 mb-4">Todo App</h1>
    <div class="flex items-center mb-4">
      <input
        id="taskInput"
        type="text"
        placeholder="Add a new task"
        class="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        id="addBtn"
        class="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
      >
        Add
      </button>
    </div>
    <div class="flex justify-center mb-4 gap-3">
      <button
        id="allTab"
        class="px-4 py-2 border-b-2 cursor-pointer border-blue-500 text-blue-500 font-semibold focus:outline-none"
      >
        All
      </button>
      <button
        id="activeTab"
        class="px-4 py-2 border-b-2 cursor-pointer border-transparent text-gray-500 hover:text-blue-500 hover:border-blue-500 focus:outline-none"
      >
        Active
      </button>
      <button
        id="completedTab"
        class="px-4 py-2 border-b-2 cursor-pointer border-transparent text-gray-500 hover:text-blue-500 hover:border-blue-500 focus:outline-none"
      >
        Completed
      </button>
    </div>
    <ul class="space-y-2 overflow-y-auto max-h-[300px]" id="taskList"></ul>
  </div>
</div>
`;let l="all";const B=async()=>{document.querySelector("#app").innerHTML=E()};await B();let n=[];const L=()=>{const e=document.getElementById("taskInput"),t=e?.value;t&&(n.unshift({id:h(),title:t,completed:!1}),l="all",m(b,[c,u]),a(),p(),e.value="")};document.getElementById("addBtn").addEventListener("click",L);const I=e=>{n=n.filter(t=>t.id!==e.dataset.taskId),a(),p()},w=e=>{const t=n.find(d=>d.id===e);t&&(t.completed=!t.completed),a(),p()},M=e=>{const t=n.find(d=>d.id===e);if(t){const d=T(),i=document.createElement("div");i.innerHTML=d,document.body.appendChild(i),document.getElementById("closeModalBtn").addEventListener("click",()=>{g("taskModal")}),document.getElementById("cancelEditBtn").addEventListener("click",()=>{g("taskModal")});const r=document.getElementById("taskEditForm"),v=document.getElementById("editTaskTitle"),y=document.getElementById("editTaskNotes"),k=document.getElementById("editTaskDueDate");v.value=t.title,y.value=t.notes||"",k.value=t.dueDate||"",r.addEventListener("submit",x=>{x.preventDefault(),t.title=v.value,t.notes=y.value,t.dueDate=k.value,a(),p(),g("taskModal")})}},g=e=>{const t=document.getElementById(e);t&&t.remove()},D=e=>{M(e)},S=()=>{document.querySelectorAll("#deleteTaskBtn").forEach(e=>{e.addEventListener("click",()=>{I(e)})}),document.querySelectorAll("#taskItem").forEach(e=>{e.addEventListener("click",()=>{w(e.dataset.taskId)})}),document.querySelectorAll("#editTaskBtn").forEach(e=>{e.addEventListener("click",()=>{D(e.dataset.taskId)})})},A=()=>{let e="";n.forEach(t=>{t.completed||(e+=f(t))}),document.getElementById("taskList").innerHTML=e},N=()=>{let e="";n.forEach(t=>{t.completed&&(e+=f(t))}),document.getElementById("taskList").innerHTML=e},a=()=>{if(l==="all"){let e="";n.forEach(t=>{e+=f(t)}),document.getElementById("taskList").innerHTML=e}else l==="active"?A():l==="completed"&&N();S()},c=document.getElementById("activeTab"),u=document.getElementById("completedTab"),b=document.getElementById("allTab"),m=(e,t)=>{e.classList.add("border-blue-500","text-blue-500","font-semibold"),e.classList.remove("border-transparent","text-gray-500","hover:text-blue-500","hover:border-blue-500"),t.forEach(d=>{d.classList.remove("border-blue-500","text-blue-500","font-semibold"),d.classList.add("border-transparent","text-gray-500","hover:text-blue-500","hover:border-blue-500")})};b.addEventListener("click",()=>{l="all",m(b,[c,u]),a()});c.addEventListener("click",()=>{l="active",m(c,[b,u]),a()});u.addEventListener("click",()=>{l="completed",m(u,[b,c]),a()});function p(){localStorage.setItem("tasks",JSON.stringify(n))}function P(){const e=localStorage.getItem("tasks");if(e){const t=JSON.parse(e);n.push(...t),a()}}P();
