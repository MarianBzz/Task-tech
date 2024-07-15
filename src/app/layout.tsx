import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata: Metadata = {
  title: 'TaskTech',
  description:
    'TaskTech es una aplicación moderna de gestión de tareas diseñada para optimizar tu flujo de trabajo. Gestiona tareas eficientemente con seguimiento de completitud, filtrado por estado o fecha, y vistas detalladas de tareas. Desarrollada con Next.js y Tailwind CSS, TaskTech ofrece una interfaz limpia e intuitiva para organizar tus tareas de manera sencilla.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${GeistSans.className} antialiased dark:bg-gray-950`}
    >
      <body>{children}</body>
    </html>
  );
}
