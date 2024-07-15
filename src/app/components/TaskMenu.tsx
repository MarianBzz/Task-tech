import React from 'react';

interface TaskMenuProps {
  taskId: number;
  completed: boolean;
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
  closeMenu: () => void;
}

const TaskMenu: React.FC<TaskMenuProps> = ({
  taskId,
  completed,
  toggleComplete,
  deleteTask,
  closeMenu,
}) => {
  const handleToggleComplete = (event: React.MouseEvent) => {
    event.stopPropagation();
    toggleComplete(taskId);
    closeMenu();
  };

  const handleDeleteTask = (event: React.MouseEvent) => {
    event.stopPropagation();
    deleteTask(taskId);
    closeMenu();
  };

  return (
    <div className='absolute right-2 top-1 mt-8 w-40 rounded-md border bg-white shadow-lg'>
      {completed ? (
        <button
          className='block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100'
          onClick={handleToggleComplete}
        >
          Marcar como incompleta
        </button>
      ) : (
        <button
          className='block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100'
          onClick={handleToggleComplete}
        >
          Marcar como completada
        </button>
      )}
      <button
        className='block w-full px-4 py-2 text-left text-sm text-red-700 hover:bg-red-100'
        onClick={handleDeleteTask}
      >
        Eliminar
      </button>
      <button
        className='block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100'
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          closeMenu();
        }}
      >
        Cancelar
      </button>
    </div>
  );
};

export default TaskMenu;
