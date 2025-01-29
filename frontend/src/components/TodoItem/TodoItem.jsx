import React from 'react';
import { CheckIcon, PencilIcon, TrashIcon, CalendarIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../contexts/ThemeContext';
import { getPriorityColor } from '../../utils/todoUtils';

const TodoItem = ({ 
  todo, 
  onToggle, 
  onDelete, 
  onEdit, 
  isEditing, 
  editText, 
  setEditText, 
  onSaveEdit 
}) => {
  const { darkMode } = useTheme();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';
    
    return date.toLocaleDateString(undefined, { 
      month: 'short', 
      day: 'numeric',
      year: today.getFullYear() !== date.getFullYear() ? 'numeric' : undefined
    });
  };

  const isOverdue = todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed;

  return (
    <li className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-200 ${
      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
    } ${isOverdue ? 'border-l-4 border-red-500' : ''}`}>
      <button
        onClick={() => onToggle(todo.id)}
        className={`p-2 rounded-full transition-all duration-200 transform hover:scale-110 ${
          todo.completed
            ? 'bg-green-500 text-white ring-2 ring-green-300'
            : darkMode
              ? 'bg-gray-600 hover:bg-gray-500'
              : 'bg-gray-200 hover:bg-gray-300'
        }`}
        title={todo.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        <CheckIcon className={`h-5 w-5 ${todo.completed ? 'scale-110' : ''}`} />
      </button>

      <div className="flex-1">
        {isEditing ? (
          <div className="flex gap-2">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className={`flex-1 p-2 rounded-lg ${
                darkMode 
                  ? 'bg-gray-600 text-white border-gray-500' 
                  : 'bg-white text-gray-800 border-gray-300'
              } border focus:outline-none focus:ring-2 focus:ring-cyan-400`}
              autoFocus
            />
            <button
              onClick={() => onSaveEdit(todo.id)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="space-y-1">
            <span
              className={`block transition-all duration-200 ${
                todo.completed 
                  ? 'line-through opacity-50 decoration-2' 
                  : ''
              } ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              {todo.text}
            </span>
            <div className="flex items-center gap-4 text-sm">
              {todo.dueDate && (
                <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full ${
                  isOverdue
                    ? darkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-600'
                    : darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-600'
                }`}>
                  <CalendarIcon className="h-4 w-4" />
                  {formatDate(todo.dueDate)}
                </span>
              )}
              <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full ${getPriorityColor(todo.priority, darkMode)}`}>
                <ExclamationCircleIcon className="h-4 w-4" />
                {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
              </span>
            </div>
          </div>
        )}
      </div>

      {!isEditing && (
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(todo)}
            className={`p-2 rounded-full transition-colors duration-200 ${
              darkMode 
                ? 'text-blue-400 hover:bg-gray-600' 
                : 'text-blue-500 hover:bg-blue-100'
            }`}
            title="Edit todo"
          >
            <PencilIcon className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className={`p-2 rounded-full transition-colors duration-200 ${
              darkMode 
                ? 'text-red-400 hover:bg-gray-600' 
                : 'text-red-500 hover:bg-red-100'
            }`}
            title="Delete todo"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
