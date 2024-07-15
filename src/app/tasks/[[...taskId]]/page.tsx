import { TaskType } from '../../../../types/tasks';
import TaskDetailPage from './taskDetail';

export default async function Page({
  params,
}: {
  params: { taskId: TaskType['id'] };
}) {
  const taskId = params.taskId ? params.taskId[0] : '';
  return <TaskDetailPage taskId={taskId} />;
}
