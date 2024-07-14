import React, { useState } from 'react';
import TaskMenu from './TaskMenu';
import { Ellipsis } from 'lucide-react';

interface Activity {
  id: number;
  name: string;
  completed: boolean;
}

interface TaskItemCardProps {
  id: number;
  title: string;
  description: string;
  creationDate: string;
  dueDate: string;
  completed: boolean;
  activities: Activity[];
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItemCard: React.FC<TaskItemCardProps> = ({
  id,
  title,
  description,
  creationDate,
  dueDate,
  completed,
  activities,
  toggleComplete,
  deleteTask,
}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleTaskToggle = () => {
    toggleComplete(id);
    setMenuVisible(false);
  };

  const handleDeleteTask = () => {
    deleteTask(id);
    setMenuVisible(false);
  };

  // Formateo de fechas para mostrar solo día y mes (DD/MM)
  const formattedCreationDate = new Date(creationDate).toLocaleDateString(
    'es-AR',
    {
      day: '2-digit',
      month: '2-digit',
    }
  );

  const formattedDueDate = new Date(dueDate).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
  });

  return (
    <div
      className={`flex items-start rounded-lg bg-white p-4 drop-shadow-lg  ${
        completed ? 'border border-green-500 bg-green-200' : ''
      }`}
    >
      <div className='flex-1'>
        <div className='mb-2 flex items-center justify-between'>
          <h3 className='text-lg font-semibold'>{title}</h3>
        </div>
        <div className='flex items-center gap-2'>
          <p className='text-sm text-gray-600'>{description}</p>
          <div className='ml-auto flex items-center gap-0.5 rounded-md bg-slate-200 px-1'>
            <span className='text-xs text-green-800'>
              {formattedCreationDate}
            </span>{' '}
            - <span className='text-xs text-red-500'>{formattedDueDate}</span>
          </div>
        </div>
        <h1 className='mt-3'>Actividades</h1>
        <div className='flex flex-col px-1 text-xs'>
          {/* Lista de actividades */}
          {activities.map((activity) => (
            <div key={activity.id} className='flex items-center'>
              <span
                className={`flex items-center ${
                  activity.completed ? 'text-gray-500 line-through' : ''
                }`}
              >
                {activity.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Enlace a la página de detalle con animación */}

      {/* Puntos suspensivos para abrir el menú */}
      <button
        className='ml-2 text-xl text-gray-500 hover:text-gray-900'
        onClick={handleToggleMenu}
      >
        <Ellipsis size={19} />
      </button>
      {/* Menú de acciones */}
      {menuVisible && (
        <TaskMenu
          taskId={id}
          completed={completed}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          closeMenu={() => setMenuVisible(false)}
        />
      )}
    </div>
  );
};

export default TaskItemCard;
