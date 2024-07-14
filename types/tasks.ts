export interface TaskType {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  activities: Activity[];
}

export interface Activity {
  id: number;
  name: string;
  completed: boolean;
}

export const tasksData: TaskType[] = [
  {
    id: 1,
    title: 'Go to the gym',
    description: 'Exercise at the gym',
    dueDate: '2024-07-20',
    completed: false,
    activities: [
      { id: 1, name: 'Warm-up', completed: false },
      { id: 2, name: 'Cardio', completed: false },
      { id: 3, name: 'Weights', completed: false },
    ],
  },
  {
    id: 2,
    title: 'Buy groceries',
    description: 'Buy food for the week',
    dueDate: '2024-07-21',
    completed: false,
    activities: [
      { id: 1, name: 'Vegetables', completed: false },
      { id: 2, name: 'Fruits', completed: false },
      { id: 3, name: 'Dairy', completed: false },
      { id: 4, name: 'Meat', completed: false },
    ],
  },
  {
    id: 3,
    title: 'Study for exam',
    description: 'Prepare for the upcoming exam',
    dueDate: '2024-07-22',
    completed: false,
    activities: [
      { id: 1, name: 'Read textbook', completed: false },
      { id: 2, name: 'Take notes', completed: false },
      { id: 3, name: 'Practice problems', completed: false },
    ],
  },
  {
    id: 4,
    title: 'Clean the house',
    description: 'Tidy up the entire house',
    dueDate: '2024-07-23',
    completed: false,
    activities: [
      { id: 1, name: 'Living room', completed: false },
      { id: 2, name: 'Kitchen', completed: true },
      { id: 3, name: 'Bedrooms', completed: false },
      { id: 4, name: 'Bathroom', completed: false },
    ],
  },
  {
    id: 5,
    title: 'Write article',
    description: 'Prepare content for publication',
    dueDate: '2024-07-24',
    completed: false,
    activities: [
      { id: 1, name: 'Research', completed: false },
      { id: 2, name: 'Outline', completed: false },
      { id: 3, name: 'Write draft', completed: true },
      { id: 4, name: 'Edit', completed: false },
      { id: 5, name: 'Final review', completed: false },
    ],
  },
  {
    id: 6,
    title: 'Plan vacation',
    description: 'Organize details for upcoming trip',
    dueDate: '2024-07-25',
    completed: false,
    activities: [
      {
        id: 1,
        name: 'Destination researchdsadas dsdfds dasf dsf asf',
        completed: false,
      },
      { id: 2, name: 'Book flights', completed: false },
      { id: 3, name: 'Book accommodations', completed: false },
      { id: 4, name: 'Plan itinerary', completed: false },
    ],
  },
];
