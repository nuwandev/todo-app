# Todo App

Task tracking application using Vite + TypeScript with localStorage persistence and modal editing.

## 🚀 Features

- Add / toggle complete / edit / delete tasks
- Filter tabs: All / Active / Completed
- Modal edit panel (title, notes, due date)
- Persistent localStorage tasks
- Component-like function separation

## Learning Outcomes

- State-driven UI rendering
- LocalStorage persistence patterns
- Modularization & separation of components
- TypeScript typing & interfaces

## 📂 Project Structure

```text
todo-app/
├── index.html
├── src/
│   ├── main.ts
│   ├── components/
│   │   ├── HomePage.ts
│   │   ├── Task.ts
│   │   └── EditPanel.ts
│   ├── types/ (TTask)
│   └── utils/ (generateRandomId)
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- TypeScript
- Vite (dev server + build)
- ESLint (linting)
- Tailwind (if imported via style.css) / basic CSS

## ⚙️ Setup

```bash
git clone https://github.com/nuwandev/Internet-Technologies-Module-iCET.git
cd Internet-Technologies-Module-iCET/projects/todo-app
npm install
npm run dev
```

## 🧩 Usage

1. Type a task and click Add
2. Click task to toggle completion
3. Use tabs to filter list
4. Click Edit to modify details
5. Click Delete to remove task

## 🧱 Architecture

- Functional components (return HTML strings)
- Central state array `tasksList` + helper update functions
- LocalStorage hydration on load
- Manual event re-binding after DOM re-render

## 🗄️ Data / Storage

- localStorage key: `tasks`
- Task shape: `{id,title,completed,notes?,dueDate?}`

## 🔧 Scripts

```bash
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview build output
```

## 🧪 Testing

Not implemented. Future: unit test task mutations / filtering.

## 📦 Deployment

`npm run build` then deploy `dist/` to Netlify / Vercel.

## 📝 Notes

- Re-binding listeners after every render could be optimized (event delegation)
- No form validation on empty edits beyond required title
- Could introduce a component framework eventually

## 📄 License

MIT
