export interface TaskType {
  id: number;
  title: string;
  description: string;
  creationDate: string;
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
    title: 'Desarrollar API REST',
    description: 'Implementar endpoints para la API REST',
    creationDate: '2024-07-10',
    dueDate: '2024-08-01',
    completed: false,
    activities: [
      { id: 1, name: 'Definir endpoints', completed: true },
      { id: 2, name: 'Implementar controladores', completed: false },
      { id: 3, name: 'Probar con Postman', completed: true },
      { id: 4, name: 'Configurar seguridad', completed: false },
    ],
  },
  {
    id: 2,
    title: 'Configurar base de datos',
    description: 'Configurar la base de datos para el proyecto',
    creationDate: '2024-07-11',
    dueDate: '2024-07-25',
    completed: false,
    activities: [
      { id: 1, name: 'Seleccionar DBMS', completed: false },
      { id: 2, name: 'Diseñar esquema de base de datos', completed: true },
    ],
  },
  {
    id: 3,
    title: 'Desarrollar interfaz de usuario',
    description: 'Crear interfaces de usuario responsive',
    creationDate: '2024-07-12',
    dueDate: '2024-08-10',
    completed: false,
    activities: [
      { id: 1, name: 'Diseñar mockups', completed: false },
      { id: 2, name: 'Implementar con React', completed: true },
      { id: 3, name: 'Añadir estilos con Tailwind CSS', completed: false },
      { id: 4, name: 'Realizar pruebas de usabilidad', completed: true },
      { id: 5, name: 'Optimizar para dispositivos móviles', completed: false },
    ],
  },
  {
    id: 4,
    title: 'Optimizar rendimiento del backend',
    description: 'Mejorar el rendimiento de consultas y respuestas del backend',
    creationDate: '2024-07-13',
    dueDate: '2024-08-05',
    completed: true,
    activities: [
      { id: 1, name: 'Analizar puntos críticos', completed: false },
      { id: 2, name: 'Implementar caching', completed: true },
    ],
  },
  {
    id: 5,
    title: 'Implementar autenticación OAuth2',
    description: 'Añadir soporte de autenticación OAuth2 para usuarios',
    creationDate: '2024-07-14',
    dueDate: '2024-08-15',
    completed: false,
    activities: [
      { id: 1, name: 'Configurar proveedor OAuth2', completed: true },
      { id: 2, name: 'Implementar flujo de autorización', completed: true },
      { id: 3, name: 'Probar con clientes externos', completed: false },
      { id: 4, name: 'Configurar roles y permisos', completed: false },
    ],
  },
  {
    id: 6,
    title: 'Documentar API',
    description: 'Crear documentación completa para la API REST',
    creationDate: '2024-07-15',
    dueDate: '2024-08-20',
    completed: false,
    activities: [
      { id: 1, name: 'Generar documentación Swagger', completed: false },
      { id: 2, name: 'Escribir guías de uso', completed: true },
      {
        id: 3,
        name: 'Publicar en plataforma de documentación',
        completed: false,
      },
    ],
  },
];
