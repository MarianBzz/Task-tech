'use client';

import React, { useState } from 'react';
import TaskItemCard from './TaskItemCard';
import { TaskType, tasksData } from '../../../types/tasks';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>(tasksData);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
  const [sortBy, setSortBy] = useState<
    | 'titleAsc'
    | 'titleDesc'
    | 'dateCreatedAsc'
    | 'dateCreatedDesc'
    | 'dueDateAsc'
    | 'dueDateDesc'
  >('titleAsc');
  const [menuVisible, setMenuVisible] = useState<number | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    } else {
      return true;
    }
  });

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    setMenuVisible(null);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setMenuVisible(null);
  };

  const sortTasks = (tasksToSort: TaskType[]) => {
    return tasksToSort.sort((a, b) => {
      switch (sortBy) {
        case 'titleAsc':
        case 'titleDesc':
          return sortBy === 'titleAsc'
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        case 'dateCreatedAsc':
        case 'dateCreatedDesc':
          const dateCreatedOrder = sortDirection === 'asc' ? 1 : -1;
          return (
            dateCreatedOrder *
            (new Date(a.creationDate).getTime() -
              new Date(b.creationDate).getTime())
          );
        case 'dueDateAsc':
        case 'dueDateDesc':
          const dueDateOrder = sortDirection === 'asc' ? 1 : -1;
          return (
            dueDateOrder *
            (new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
          );
        default:
          return 0;
      }
    });
  };

  const handleFilterChange = (newFilter: 'all' | 'completed' | 'pending') => {
    setFilter(newFilter);
  };

  const handleSortChange = (sortByOption: typeof sortBy) => {
    if (sortBy === sortByOption) {
      return; // No cambiar la dirección si es el mismo tipo de orden
    } else {
      setSortBy(sortByOption);
      setSortDirection('asc'); // Siempre establecer el orden ascendente al cambiar de tipo de orden
    }
  };

  const openMenu = (taskId: number) => {
    setMenuVisible(taskId);
  };

  const closeMenu = () => {
    setMenuVisible(null);
  };

  return (
    <div className='flex h-full w-full flex-col rounded-lg bg-white p-6 text-black shadow-md'>
      {/* Controles de filtro */}
      <div className='mb-4 space-x-4'>
        <button
          onClick={() => handleFilterChange('all')}
          className={`rounded-md border border-gray-300 px-3 py-1 text-sm ${
            filter === 'all'
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Todas
        </button>
        <button
          onClick={() => handleFilterChange('completed')}
          className={`rounded-md border border-gray-300 px-3 py-1 text-sm ${
            filter === 'completed'
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Completadas
        </button>
        <button
          onClick={() => handleFilterChange('pending')}
          className={`rounded-md border border-gray-300 px-3 py-1 text-sm ${
            filter === 'pending'
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Pendientes
        </button>
        {/* Controles de orden */}
        <button
          onClick={() => handleSortChange('titleAsc')}
          className={`rounded-md border border-gray-300 px-3 py-1 text-sm ${
            sortBy === 'titleAsc'
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          A-Z
        </button>
        <button
          onClick={() => handleSortChange('titleDesc')}
          className={`rounded-md border border-gray-300 px-3 py-1 text-sm ${
            sortBy === 'titleDesc'
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Z-A
        </button>
        <button
          onClick={() => handleSortChange('dateCreatedAsc')}
          className={`rounded-md border border-gray-300 px-3 py-1 text-sm ${
            sortBy === 'dateCreatedAsc'
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Fecha Creación ↑
        </button>
        <button
          onClick={() => handleSortChange('dateCreatedDesc')}
          className={`rounded-md border border-gray-300 px-3 py-1 text-sm ${
            sortBy === 'dateCreatedDesc'
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Fecha Creación ↓
        </button>
        <button
          onClick={() => handleSortChange('dueDateAsc')}
          className={`rounded-md border border-gray-300 px-3 py-1 text-sm ${
            sortBy === 'dueDateAsc'
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Fecha Vencimiento ↑
        </button>
        <button
          onClick={() => handleSortChange('dueDateDesc')}
          className={`rounded-md border border-gray-300 px-3 py-1 text-sm ${
            sortBy === 'dueDateDesc'
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Fecha Vencimiento ↓
        </button>
      </div>
      {/* Lista de tareas */}
      <div className='grid grid-flow-row grid-cols-4 gap-4'>
        {sortTasks(filteredTasks).map((task) => (
          <div key={task.id} className='relative row-span-1'>
            <TaskItemCard
              {...task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
