// TaskList.tsx
'use client';
import React, { useState } from 'react';
import TaskItemCard from './TaskItemCard';
import { TaskType, tasksData } from '../../../types/tasks';
import { Plus } from 'lucide-react';
import ModalAddTask from './ModalAddTask';
import TaskFilters from './TaskFilters';
import SortControls from './SortControls';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addTask = (newTask: TaskType) => {
    setTasks([...tasks, newTask]);
    setIsModalOpen(false); // Cerrar el modal después de agregar la tarea
  };

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
    setSortBy(sortByOption);

    switch (sortByOption) {
      case 'titleAsc':
      case 'dateCreatedAsc':
      case 'dueDateAsc':
        if (sortDirection !== 'asc') {
          setSortDirection('asc');
        }
        break;
      case 'titleDesc':
      case 'dateCreatedDesc':
      case 'dueDateDesc':
        if (sortDirection !== 'desc') {
          setSortDirection('desc');
        }
        break;
      default:
        break;
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
      <div className='mb-4  flex items-center gap-3'>
        <TaskFilters filter={filter} onFilterChange={handleFilterChange} />
        <SortControls sortBy={sortBy} handleSortChange={handleSortChange} />
        <button
          className='ml-auto flex items-center gap-1 rounded-lg bg-red-500 px-2 py-1 text-white hover:bg-red-600'
          onClick={openModal}
        >
          <Plus />
          <p className='text-xs'>Crear Tarea</p>
        </button>
      </div>

      <div className='flex flex-wrap gap-4'>
        {sortTasks(filteredTasks).map((task) => (
          <div key={task.id} className='relative flex-grow'>
            <TaskItemCard
              {...task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ModalAddTask closeModal={closeModal} addTask={addTask} />
      )}
    </div>
  );
};

export default TaskList;
