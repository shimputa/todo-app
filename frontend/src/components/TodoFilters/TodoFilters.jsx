import React from 'react';
import { FunnelIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../contexts/ThemeContext';

const TodoFilters = ({ filter, setFilter, sortBy, setSortBy }) => {
  const { darkMode } = useTheme();

  return (
    <div className="flex justify-between items-center gap-4 mb-6">
      <div className="flex items-center gap-3">
        <FunnelIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        <div className="flex gap-1">
          {['all', 'active', 'completed', 'overdue'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-3 py-1.5 rounded-lg capitalize transition-all duration-200 text-sm ${
                filter === filterType
                  ? 'bg-cyan-500 text-white transform scale-105'
                  : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filterType}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <ArrowsUpDownIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={`py-1.5 px-3 rounded-lg text-sm transition-colors duration-200 ${
            darkMode 
              ? 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600' 
              : 'bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300'
          } border focus:outline-none focus:ring-2 focus:ring-cyan-400`}
        >
          <option value="date">Sort by Date</option>
          <option value="priority">Sort by Priority</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilters;
