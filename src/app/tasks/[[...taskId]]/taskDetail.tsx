'use client';

import React, { useState, useEffect } from 'react';
import { TaskType, tasksData } from '../../../../types/tasks';
import Layout from '@/app/components/Layout';
import Image from 'next/image';
import { ChevronLeft, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const TaskDetailPage = ({ taskId }: { taskId: TaskType['id'] }) => {
  const [task, setTask] = useState<TaskType | undefined>(undefined);
  const [image, setImage] = useState<File | null>(null);
  const [newActivityName, setNewActivityName] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const taskDetail = tasksData.find((task) => task.id == taskId);
    if (taskDetail) {
      setTask(taskDetail);
    }
  }, [taskId]);

  if (!task) {
    return (
      <Layout>
        <div className='flex h-full items-center justify-center'>
          <div className='h-8 w-8 animate-spin self-center rounded-full border-b-2 border-t-2 border-blue-500'></div>
        </div>
      </Layout>
    );
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (task) {
      setTask({ ...task, title: e.target.value });
    }
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (task) {
      setTask({ ...task, description: e.target.value });
    }
  };

  const handleActivityToggle = (activityId: number) => {
    if (task) {
      const updatedActivities = task.activities.map((activity) =>
        activity.id === activityId
          ? { ...activity, completed: !activity.completed }
          : activity
      );
      setTask({ ...task, activities: updatedActivities });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleDeleteTask = () => {
    alert('Tarea eliminada');
    router.push('/');
  };

  const handleSaveChanges = () => {
    alert('Cambios guardados');
    router.push('/');
  };

  const handleNewActivityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewActivityName(e.target.value);
  };

  const handleAddActivity = () => {
    if (task && newActivityName.trim()) {
      const newActivity = {
        id: Date.now(),
        name: newActivityName,
        completed: false,
      };
      setTask({ ...task, activities: [...task.activities, newActivity] });
      setNewActivityName('');
    }
  };

  const handleDeleteActivity = (activityId: number) => {
    if (task) {
      const updatedActivities = task.activities.filter(
        (activity) => activity.id !== activityId
      );
      setTask({ ...task, activities: updatedActivities });
    }
  };

  return (
    <Layout>
      <div className='flex flex-col p-4 text-black sm:p-6 md:px-10  lg:px-20'>
        <button
          className='-ml-1 w-fit rounded-md p-1 hover:bg-gray-400 sm:-ml-2 md:-ml-4 lg:-ml-16'
          onClick={() => router.back()}
        >
          <ChevronLeft />
        </button>
        <h1 className='pt-10 text-xl font-semibold sm:text-2xl'>
          Detalle de la Tarea
        </h1>
        <div className='mt-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Título
          </label>
          <input
            type='text'
            value={task.title}
            onChange={handleTitleChange}
            className='mt-1 block w-full rounded-md border-gray-300 pl-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          />
        </div>
        <div className='mt-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Descripción
          </label>
          <textarea
            value={task.description}
            onChange={handleDescriptionChange}
            className='mt-1 block w-full rounded-md border-gray-300 pl-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          />
        </div>
        <div className='mt-4 w-full'>
          <label className='block text-sm font-medium text-gray-700'>
            Imagen
          </label>
          <input
            type='file'
            onChange={handleImageChange}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          />
        </div>
        {image && (
          <div className='mt-4'>
            <Image
              src={URL.createObjectURL(image)}
              alt='Imagen de la tarea'
              className='h-auto max-w-full rounded-md'
              width={400}
              height={400}
            />
          </div>
        )}
        <h2 className='mt-6 text-lg font-semibold sm:text-xl'>Actividades</h2>
        <div className='mt-2 flex flex-col gap-2'>
          {task.activities.map((activity) => (
            <div key={activity.id} className='flex items-center'>
              <input
                type='checkbox'
                checked={activity.completed}
                onChange={() => handleActivityToggle(activity.id)}
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label
                className={`ml-2 text-sm ${
                  activity.completed ? 'line-through' : ''
                }`}
              >
                {activity.name}
              </label>
              <button
                onClick={() => handleDeleteActivity(activity.id)}
                className='ml-4 inline-flex items-center rounded-md border border-transparent bg-red-600 px-1 py-1 text-xs font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
              >
                <X size={10} />
              </button>
            </div>
          ))}
          <div className='mt-4 flex'>
            <input
              type='text'
              value={newActivityName}
              onChange={handleNewActivityChange}
              className='block w-full rounded-md border-gray-300 pl-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              placeholder='Añadir nueva actividad'
            />
            <button
              onClick={handleAddActivity}
              className='ml-2 inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
            >
              Añadir
            </button>
          </div>
        </div>
        <div className='mt-6 flex justify-between'>
          <button
            onClick={handleDeleteTask}
            className='inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
          >
            Eliminar Tarea
          </button>
          <button
            onClick={handleSaveChanges}
            className='inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default TaskDetailPage;
