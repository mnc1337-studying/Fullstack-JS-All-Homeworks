# React `useState` Projects

Three small React (+ Vite) projects that demonstrate the `useState` hook.

## Projects

| Folder | Description | State |
|---|---|---|
| `greeting-app` | An input field and a greeting that updates as you type | `name` (string) |
| `toggle-text-app` | A button that shows or hides a hidden message | `isVisible` (boolean) |
| `toggle-theme-app` | A light/dark theme switcher | `isDark` (boolean) |

## Running

For each project separately (`folder-name` is a name of current project directory):

```bash
cd `folder-name`
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`. If several projects are running at the same time, Vite uses the next free port (5174, 5175, etc.).

## Technologies

- React
- Vite
- JavaScript (JSX)