export const getPriorityColor = (priority, isDark) => {
  switch (priority) {
    case 'high':
      return isDark ? 'text-red-400' : 'text-red-600';
    case 'medium':
      return isDark ? 'text-yellow-400' : 'text-yellow-600';
    case 'low':
      return isDark ? 'text-blue-400' : 'text-blue-600';
    default:
      return isDark ? 'text-gray-400' : 'text-gray-600';
  }
};

export const sortTodos = (todos, sortBy) => {
  return [...todos].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(a.dueDate || '9999') - new Date(b.dueDate || '9999');
      case 'priority': {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      case 'name':
        return a.text.localeCompare(b.text);
      default:
        return 0;
    }
  });
};
