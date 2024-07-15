import React, { useState } from 'react';
import { CircleX } from 'lucide-react';

type Activity = {
  id: number;
  name: string;
  completed: boolean;
};

type TaskData = {
  id: number;
  title: string;
  description: string;
  creationDate: string;
  dueDate: string;
  completed: boolean;
  activities: Activity[];
};

type ModalAddTaskProps = {
  closeModal: () => void;
  addTask: (newTask: TaskData) => void;
};

const ModalAddTask = ({ closeModal, addTask }: ModalAddTaskProps) => {
  const [taskData, setTaskData] = useState<TaskData>({
    id: 0,
    title: '',
    description: '',
    creationDate: '',
    dueDate: '',
    completed: false,
    activities: [
      {
        id: 1,
        name: '',
        completed: false,
      },
    ],
  });

  const handleAddActivity = () => {
    const newActivity: Activity = {
      id: taskData.activities.length + 1,
      name: '',
      completed: false,
    };
    setTaskData((prevData) => ({
      ...prevData,
      activities: [...prevData.activities, newActivity],
    }));
  };

  const handleActivityChange = (index: number, name: string) => {
    setTaskData((prevData) => {
      const updatedActivities = [...prevData.activities];
      updatedActivities[index].name = name;
      return {
        ...prevData,
        activities: updatedActivities,
      };
    });
  };

  const handleRemoveActivity = (index: number) => {
    setTaskData((prevData) => ({
      ...prevData,
      activities: prevData.activities.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = () => {
    const currentDateString = new Date().toISOString().split('T')[0];
    if (taskData.dueDate < currentDateString) {
      alert('La fecha de vencimiento no puede ser anterior a la fecha actual.');
      return;
    }

    const newTask: TaskData = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: taskData.title,
      description: taskData.description,
      creationDate: new Date().toLocaleDateString(),
      dueDate: taskData.dueDate,
      completed: taskData.completed,
      activities: taskData.activities,
    };

    console.log('Nueva tarea:', newTask);
    closeModal();
    addTask(newTask);
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative flex max-h-[80%] w-full flex-col justify-center gap-8 rounded-3xl bg-red-500 px-10 pt-5 sm:w-3/6 sm:pt-5'>
        <button onClick={() => closeModal()} className='absolute right-3 top-3'>
          <CircleX
            color='black'
            className='rounded-full bg-slate-50 hover:opacity-90'
          />
        </button>
        <h2 className='text-lg font-bold text-white'>Crear Tarea</h2>
        <div className='-mx-10 overflow-y-scroll rounded-2xl bg-white py-4 pl-10 pr-8'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className='flex flex-col gap-5 text-black'
          >
            <div>
              <label htmlFor='title' className='block text-sm font-medium'>
                Título
              </label>
              <input
                type='text'
                id='title'
                value={taskData.title}
                onChange={(e) =>
                  setTaskData({ ...taskData, title: e.target.value })
                }
                className='mt-1 block w-full rounded-md bg-gray-100 p-2 text-sm outline-none'
                required
              />
            </div>
            <div>
              <label
                htmlFor='description'
                className='block text-sm font-medium'
              >
                Descripción
              </label>
              <textarea
                id='description'
                value={taskData.description}
                onChange={(e) =>
                  setTaskData({ ...taskData, description: e.target.value })
                }
                className='mt-1 block h-24 w-full rounded-md bg-gray-100 p-2 text-sm outline-none'
                required
              />
            </div>
            <div>
              <h3 className='text-sm font-semibold'>Actividades</h3>
              <div className='flex flex-col gap-1'>
                {taskData.activities.map((activity, index) => (
                  <div
                    key={index}
                    className='flex items-center space-x-2 text-xs'
                  >
                    <input
                      type='text'
                      value={activity.name}
                      onChange={(e) =>
                        handleActivityChange(index, e.target.value)
                      }
                      className='block w-full flex-1 rounded-md bg-gray-100 p-2 text-xs outline-none'
                      placeholder={`Actividad ${index + 1}`}
                      required
                    />
                    <button
                      type='button'
                      onClick={() => handleRemoveActivity(index)}
                      className='text-red-600 hover:text-red-700 focus:outline-none'
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>

              <button
                type='button'
                onClick={handleAddActivity}
                className='mt-2 rounded-md bg-blue-500 px-3 py-1 text-xs text-white hover:bg-blue-600 focus:outline-none'
              >
                Añadir Actividad
              </button>
            </div>
            <div className='text-sm'>
              <label htmlFor='dueDate' className='block font-medium'>
                Fecha de Vencimiento
              </label>
              <input
                type='date'
                id='dueDate'
                value={taskData.dueDate}
                onChange={(e) =>
                  setTaskData({ ...taskData, dueDate: e.target.value })
                }
                className='mt-1 block w-full rounded-md bg-gray-100 p-2 outline-none'
                required
              />
            </div>
            <button
              type='submit'
              className='ml-auto mt-6 rounded-md bg-green-500 px-4 py-2 text-sm text-white hover:bg-green-600 focus:outline-none'
            >
              Crear Tarea
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAddTask;
