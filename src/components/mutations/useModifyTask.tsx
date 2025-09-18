import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useModalStore } from '../../state/useModalStore';
import { Task, useTaskStore } from '../../state/useTaskStore';
const mainUrl =
  'https://taskmanager-api.graydune-340b2a35.eastus.azurecontainerapps.io/api/tasks';
export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`${mainUrl}/${id}`);
      return id;
    },
    onSuccess: deletedId => {
      const tasks = useTaskStore
        .getState()
        .tasks.filter(t => t.id !== deletedId);
      useTaskStore.getState().setTasks(tasks);
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  const resetFields = useModalStore(state => state.resetFields);
  const { setTasks } = useTaskStore.getState();
  return useMutation({
    mutationFn: async (newTask: {
      title: string;
      description: string;
      category: string;
    }) => {
      const response = await axios.post(mainUrl, {
        ...newTask,
        completed: false,
        category: newTask.category ?? 'General',
        date: new Date().toISOString(),
      });
      return response.data;
    },
    onSuccess: data => {
      setTasks([...useTaskStore.getState().tasks, data]);
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      resetFields();
    },
    onError: error => {
      console.error('Error creating new task:', error);
    },
  });
};

export const useToggleTaskStatus = () => {
  const queryClient = useQueryClient();
  const { toggleStatus } = useTaskStore.getState();
  return useMutation({
    mutationFn: async (task: Task) => {
      const newStatus = (task.completed = !task.completed);
      const { data } = await axios.put(`${mainUrl}/${task.id}`, {
        ...task,
        completed: newStatus,
      });
      return data;
    },
    // onSuccess: updatedTask => {
    //   const tasks = useTaskStore.getState().tasks.map((task)=>
    //     task.id === updatedTask.id ? updatedTask : task
    //   );
    //   useTaskStore.getState().setTasks(tasks);
    // },
    onMutate: async (task: Task) => {
      console.log('heree');
      
      // await queryClient.cancelQueries({ queryKey: ['tasks'] });
      const previousTasks = queryClient.getQueryData<Task[]>(['tasks']);
      toggleStatus(task.id);
      return { previousTasks };
    },
    onError: (err, task, context) => {
      console.log('error:', err);
      if (context?.previousTasks) {
        useTaskStore.getState().setTasks(context.previousTasks);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};
