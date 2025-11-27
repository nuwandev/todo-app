# Todo App

This project is a simple to-do application built with Vite and TypeScript.

## Features

- **Vite + TypeScript**: A modern frontend setup with fast development and build times.
- **ESLint**: The project is configured with ESLint to enforce code quality.
- **Development Server**: A development server with hot module replacement.

## How to Use

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the provided URL.

## Project Structure

- `index.html`: The main HTML file.
- `src/main.ts`: The main entry point of the application.
- `vite.config.ts`: The configuration file for Vite.
- `tsconfig.json`: The configuration file for TypeScript.
- `package.json`: The project's dependencies and scripts.

## Common commands

```powershell
npm install
npm run dev
npm run build
npm run preview
```

## Learning Outcomes

- **TypeScript**: Learned to use TypeScript to add static typing to JavaScript.
- **Vite**: Used Vite as a build tool and development server.
- **Modular Components**: Structured the application into reusable components (`Task`, `EditPanel`, `HomePage`).
- **State Management**: Managed the application's state (the list of tasks) in a simple array.
- **Local Storage**: Used `localStorage` to persist the to-do list between sessions.
- **CRUD Operations**: Implemented Create, Read, Update, and Delete functionality for tasks.
- **Event Handling**: Used event listeners to handle user interactions like adding, deleting, and editing tasks.
- **Dynamic HTML Generation**: Generated HTML dynamically using template literals and functions.
- **ESLint and Prettier**: Used ESLint and Prettier to maintain code quality and consistency.
