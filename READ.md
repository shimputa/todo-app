# Modern Todo App

A sleek and feature-rich Todo application built with React and TailwindCSS, featuring a modern UI with dark/light theme support.

![Todo App Screenshot](screenshot.png)

## ✨ Features

- **Task Management**
  - Create, read, update, and delete todos
  - Mark todos as complete/incomplete
  - Set due dates for tasks
  - Assign priority levels (Low, Medium, High)
  - Edit existing todos

- **Organization & Filtering**
  - Filter todos by status (All, Active, Completed, Overdue)
  - Sort by date, priority, or name
  - Visual indicators for overdue tasks
  - Progress tracking with completion percentage

- **Modern UI/UX**
  - Clean and intuitive interface
  - Smooth animations and transitions
  - Dark/Light theme support
  - Responsive design
  - Custom scrollbar
  - Priority color coding
  - Smart date formatting

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shimputa/todo-app.git
   cd todo-app
   ```

2. Install dependencies:
   ```bash
   cd frontend
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [Heroicons](https://heroicons.com/) - Icons
- Local Storage - Data persistence

## 📁 Project Structure

```
src/
├── components/
│   ├── TodoItem/
│   │   └── TodoItem.jsx
│   ├── TodoForm/
│   │   └── TodoForm.jsx
│   └── TodoFilters/
│       └── TodoFilters.jsx
├── contexts/
│   └── ThemeContext.js
├── hooks/
│   └── useTodos.js
├── utils/
│   └── todoUtils.js
└── App.js
```

## 🎨 Features in Detail

### Task Priority Levels
- **High**: Red indicator
- **Medium**: Yellow indicator
- **Low**: Blue indicator

### Date Management
- Smart date formatting ("Today", "Tomorrow", or formatted date)
- Visual indicators for overdue tasks
- Calendar picker for due dates

### Filtering Options
- **All**: View all todos
- **Active**: Show only uncompleted todos
- **Completed**: Show finished todos
- **Overdue**: Show past-due todos

### Sorting Options
- By Date (default)
- By Priority
- By Name

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by modern UI/UX practices
- Icons from Heroicons
- Color scheme based on TailwindCSS defaults
