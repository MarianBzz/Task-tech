import React from 'react';

interface SortControlsProps {
  sortBy:
    | 'titleAsc'
    | 'titleDesc'
    | 'dateCreatedAsc'
    | 'dateCreatedDesc'
    | 'dueDateAsc'
    | 'dueDateDesc';
  handleSortChange: (
    sortBy:
      | 'titleAsc'
      | 'titleDesc'
      | 'dateCreatedAsc'
      | 'dateCreatedDesc'
      | 'dueDateAsc'
      | 'dueDateDesc'
  ) => void;
}

const SortControls: React.FC<SortControlsProps> = ({
  sortBy,
  handleSortChange,
}) => {
  return (
    <div className='flex w-full flex-col items-center gap-3 lg:flex-row'>
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
  );
};

export default SortControls;
