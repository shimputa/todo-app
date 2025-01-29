import React, { useEffect, useRef } from 'react';
import { PlusIcon, PencilIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../contexts/ThemeContext';

const TodoForm = ({ 
  newTodo, 
  setNewTodo, 
  newTodoDueDate, 
  setNewTodoDueDate, 
  newTodoPriority, 
  setNewTodoPriority, 
  onSubmit 
}) => {
  const { darkMode } = useTheme();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return darkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-600';
      case 'medium': return darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600';
      case 'low': return darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600';
      default: return darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 mb-6">
      <div className="flex gap-2 items-center">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <PencilIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className={`w-full pl-10 pr-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
              darkMode 
                ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' 
                : 'bg-white text-gray-800 border-gray-300'
            } border`}
          />
        </div>
        <button
          type="submit"
          className="p-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors duration-200"
        >
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>
      
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
            <CalendarIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </div>
          <input
            type="date"
            value={newTodoDueDate}
            onChange={(e) => setNewTodoDueDate(e.target.value)}
            className={`w-full pl-9 pr-3 py-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-700 text-white border-gray-600' 
                : 'bg-white text-gray-800 border-gray-300'
            } border focus:outline-none focus:ring-2 focus:ring-cyan-400`}
          />
        </div>
        <select
          value={newTodoPriority}
          onChange={(e) => setNewTodoPriority(e.target.value)}
          className={`w-40 py-2 px-3 rounded-lg ${getPriorityColor(newTodoPriority)} border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400`}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
    </form>
  );
};

export default TodoForm;
