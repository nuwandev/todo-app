# todo-app

If you see editor errors coming from `node_modules`, they are typically from TypeScript or ESLint scanning dependency types.

## How to silence `node_modules` errors

- TypeScript: `skipLibCheck` is already enabled in `tsconfig.json`, which should prevent type checking of `.d.ts` files under dependencies.
- ESLint: Add an `.eslintignore` (included) that ignores `node_modules/` and build outputs.
- VS Code: `.vscode/settings.json` (included) disables default TS/JS validators and excludes `node_modules` from search/watcher to reduce noise.

## Common commands

```powershell
npm install
npm run dev
npm run build
npm run preview
```
