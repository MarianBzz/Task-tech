'use client';
import React, { useState } from 'react';
import Task from './Task';
import { TaskType, tasksData } from '../../../types/tasks';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>(tasksData);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
  const [sortBy, setSortBy] = useState<'titleAsc' | 'titleDesc'>('titleAsc');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    } else {
      return true; // Mostrar todas las tareas
    }
  });

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const sortTasks = (tasksToSort: TaskType[]) => {
    return tasksToSort.sort((a, b) => {
      if (sortBy === 'titleAsc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
  };

  const handleFilterChange = (newFilter: 'all' | 'completed' | 'pending') => {
    setFilter(newFilter);
  };

  const handleSortChange = (sortByOption: 'titleAsc' | 'titleDesc') => {
    setSortBy(sortByOption);
  };

  return (
    <div className='flex h-full w-full flex-col rounded-lg bg-white p-6 text-black shadow-md '>
      {/* Controles de filtro */}
      <div className='mb-4 space-x-4'>
        <button
          onClick={() => handleFilterChange('all')}
          className={`borderborder-gray-300 rounded-md px-3 py-1 text-sm ${
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
      </div>
      {/* Lista de tareas */}
      <div className='grid grid-flow-col grid-cols-4 gap-4'>
        {sortTasks(filteredTasks).map((task) => (
          <div key={task.id} className='col-span-1'>
            <Task {...task} toggleComplete={toggleComplete} />
          </div>
        ))}
      </div>
      <div className='grid grid-flow-col grid-cols-4 gap-4'>
        {sortTasks(filteredTasks).map((task) => (
          <div key={task.id} className='col-span-1'>
            <Task {...task} toggleComplete={toggleComplete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
