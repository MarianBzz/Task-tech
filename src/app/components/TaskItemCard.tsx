'use client';
import React, { useState } from 'react';
import TaskMenu from './TaskMenu';
import { Ellipsis } from 'lucide-react';
import { useRouter } from 'next/navigation';

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
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  const handleToggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setMenuVisible(!menuVisible);
  };

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

  const truncatedDescription =
    description && description.length > 150
      ? description.slice(0, 150) + '...'
      : description;

  const handleCardClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    router.push(`/tasks/${id}`);
  };

  return (
    <div
      className={`flex cursor-pointer items-start rounded-lg bg-white p-4 drop-shadow-lg ${
        completed ? 'border border-green-500 bg-green-100' : ''
      } ${hovered ? 'bg-gray-200' : ''}`}
      onClick={handleCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='flex-1'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <div className='flex items-center gap-2'>
          <p className='text-sm text-gray-600'>{truncatedDescription}</p>
          <div className='ml-auto flex items-center gap-0.5 rounded-md bg-slate-200 px-1'>
            <span className='text-xs text-green-800'>
              {formattedCreationDate}
            </span>{' '}
            - <span className='text-xs text-red-500'>{formattedDueDate}</span>
          </div>
        </div>
        <h1 className='mt-3'>Actividades</h1>
        <div className='flex flex-col px-1 text-xs'>
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
          {hovered && (
            <span className='absolute bottom-3 right-3 ml-auto text-xs text-blue-500'>
              Ver tarea
            </span>
          )}
        </div>
      </div>

      <button
        className='ml-2 rounded-sm text-xl text-gray-500 hover:bg-gray-300 hover:text-gray-900'
        onClick={handleToggleMenu}
      >
        <Ellipsis size={19} />
      </button>

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
