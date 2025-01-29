import { useState, useEffect } from 'react';
import { sortTodos } from '../utils/todoUtils';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newTodoDueDate, setNewTodoDueDate] = useState('');
  const [newTodoPriority, setNewTodoPriority] = useState('medium');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Load todos from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Update filtered todos
  useEffect(() => {
    setFilteredTodos(sortTodos(todos.filter(todo => {
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      if (filter === 'overdue') return todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed;
      return true;
    }), sortBy));
  }, [todos, filter, sortBy]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: newTodoDueDate || null,
      priority: newTodoPriority
    };

    setTodos([todo, ...todos]);
    setNewTodo('');
    setNewTodoDueDate('');
    setNewTodoPriority('medium');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: editText.trim() } : todo
    ));
    setEditingId(null);
    setEditText('');
  };

  return {
    todos,
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
  };
};

export default useTodos;
