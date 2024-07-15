import TaskDetailPage from './taskDetail';

export default async function Page({ params }: { params: { taskId: number } }) {
  const taskId = params.taskId ? params.taskId : 1;
  return <TaskDetailPage taskId={taskId} />;
}
