import React from 'react';

interface Activity {
  id: number;
  name: string;
  completed: boolean;
}

interface TaskProps {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  activities: Activity[];
  toggleComplete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({
  id,
  title,
  description,
  dueDate,
  completed,
  activities,
  toggleComplete,
}) => {
  const handleTaskToggle = () => {
    toggleComplete(id);
  };

  return (
    <div
      className={`flex items-start rounded-lg bg-white p-4 shadow-md ${
        completed ? 'bg-gray-100' : ''
      }`}
    >
      <div className='flex-1'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='mb-2 text-sm text-gray-600'>{description}</p>
        <div className='space-y-2'>
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
      {/* Enlace a la página de detalle */}
      <a href={`/task/${id}`} className='ml-4 self-center text-blue-500'>
        Detail
      </a>
    </div>
  );
};

export default Task;
