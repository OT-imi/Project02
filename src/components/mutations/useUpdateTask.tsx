import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useModalStore } from '../../state/useModalStore';
import axios from 'axios';
import { Task, useTaskStore } from '../../state/useTaskStore';

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  const { resetFields } = useModalStore.getState();
  const API_URL =
    'https://taskmanager-api.graydune-340b2a35.eastus.azurecontainerapps.io/api/Tasks';
  return useMutation({
    mutationFn: async (task: Task) => {
      const response = await axios.put(`${API_URL}/${task.id}`, task);
      return response.data;
    },
    onSuccess: updatedTask => {
      const tasks = useTaskStore
        .getState()
        .tasks.map(t => (t.id === updatedTask.id ? updatedTask : t));
      useTaskStore.getState().setTasks(tasks);
      resetFields();
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};
