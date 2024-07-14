// TaskFilters.tsx
import React from 'react';

interface TaskFiltersProps {
  filter: 'all' | 'completed' | 'pending';
  onFilterChange: (newFilter: 'all' | 'completed' | 'pending') => void;
}

const TaskFilters: React.FC<TaskFiltersProps> = ({
  filter,
  onFilterChange,
}) => {
  return (
    <div className='flex items-center gap-3'>
      <button
        onClick={() => onFilterChange('all')}
        className={`rounded-md border border-gray-300 px-3 py-1 text-sm ${
          filter === 'all'
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        Todas
      </button>
      <button
        onClick={() => onFilterChange('completed')}
        className={`rounded-md border border-gray-300 px-3 py-1 text-sm ${
          filter === 'completed'
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        Completadas
      </button>
      <button
        onClick={() => onFilterChange('pending')}
        className={`rounded-md border border-gray-300 px-3 py-1 text-sm ${
          filter === 'pending'
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        Pendientes
      </button>
    </div>
  );
};

export default TaskFilters;
