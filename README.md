# Cekliskeun

A modern task management application inspired by Microsoft To Do, built with React and Tailwind CSS. Cekliskeun focuses on a clean user experience, responsive design, and maintainable architecture using reusable components and custom React hooks.

---

## Features

- Create, update, and delete tasks
- Mark tasks as completed
- Overdue task detection
- Task priority (Low, Medium, High)
- Deadline management
- Dark & Light mode
- Persistent storage using LocalStorage
- Live clock and current date
- Responsive layout for desktop and mobile

---

## Tech Stack

### Frontend

- React
- React Router
- Tailwind CSS v4
- Lucide React

### State Management

- React Hooks
- Custom Hooks

### Storage

- LocalStorage

---

## Project Structure

```
src
├── components
│   ├── EmptyState.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── Sidebar.jsx
│   ├── TaskForm.jsx
│   ├── TaskItem.jsx
│   └── TaskList.jsx
│
├── hooks
│   ├── useClock.js
│   ├── useTask.js
│   ├── useTheme.js
│   └── useTodo.js
│
├── pages
│   └── Home.jsx
│
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

## Learning Objectives

This project was built to practice and improve skills in:

- Component-based architecture
- Custom React Hooks
- React Router
- State management
- Responsive UI development
- Clean code principles
- Reusable component design

---

## Author

**Panji Kusumah**

Full Stack Developer