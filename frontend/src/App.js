import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from './contexts/ThemeContext';
import TodoForm from './components/TodoForm/TodoForm';
import TodoFilters from './components/TodoFilters/TodoFilters';
import TodoItem from './components/TodoItem/TodoItem';
import useTodos from './hooks/useTodos';

function App() {
  const { darkMode, toggleTheme } = useTheme();
  const {
    filteredTodos,
    filter,
    setFilter,
    sortBy,
    setSortBy,
    newTodo,
    setNewTodo,
    newTodoDueDate,
    setNewTodoDueDate,
    newTodoPriority,
    setNewTodoPriority,
    editingId,
    editText,
    setEditText,
    addTodo,
    toggleTodo,
    deleteTodo,
    startEditing,
    saveEdit
  } = useTodos();

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className={`relative p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="absolute right-4 top-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${darkMode ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
            </button>
          </div>

          <h1 className={`text-3xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Todo App
          </h1>

          <TodoForm
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            newTodoDueDate={newTodoDueDate}
            setNewTodoDueDate={setNewTodoDueDate}
            newTodoPriority={newTodoPriority}
            setNewTodoPriority={setNewTodoPriority}
            onSubmit={addTodo}
          />

          <TodoFilters
            filter={filter}
            setFilter={setFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <div className="overflow-y-auto max-h-[calc(100vh-24rem)] pr-2 -mr-2 scroll-smooth">
            <style jsx>{`
              .overflow-y-auto::-webkit-scrollbar {
                width: 8px;
              }
              .overflow-y-auto::-webkit-scrollbar-track {
                background: ${darkMode ? '#1f2937' : '#f3f4f6'};
                border-radius: 4px;
              }
              .overflow-y-auto::-webkit-scrollbar-thumb {
                background: ${darkMode ? '#4b5563' : '#d1d5db'};
                border-radius: 4px;
              }
              .overflow-y-auto::-webkit-scrollbar-thumb:hover {
                background: ${darkMode ? '#6b7280' : '#9ca3af'};
              }
            `}</style>
            <ul className="space-y-4">
              {filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onEdit={startEditing}
                  isEditing={editingId === todo.id}
                  editText={editText}
                  setEditText={setEditText}
                  onSaveEdit={saveEdit}
                />
              ))}
            </ul>

            {filteredTodos.length === 0 ? (
              <p className={`text-center mt-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                No todos yet. Add one above!
              </p>
            ) : (
              <div className={`mt-6 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <p className="text-center">
                  {filteredTodos.filter(t => t.completed).length} of {filteredTodos.length} completed
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 dark:bg-gray-700">
                  <div 
                    className="bg-green-500 h-2.5 rounded-full transition-all duration-500" 
                    style={{ 
                      width: `${(filteredTodos.filter(t => t.completed).length / filteredTodos.length) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
