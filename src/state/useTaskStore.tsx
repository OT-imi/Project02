import { create } from 'zustand';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  date: string;
  category?: string;
}
export type TaskStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
  updateTask: (id: string, updated: Partial<Task>) => void;
  setTasks: (tasks: Task[]) => void;
  filterType: string;
  setFilterType: (filterType: string) => void;
};

export const useTaskStore = create<TaskStore>()(set => ({
  tasks: [],
  setTasks: tasks => set({ tasks }),
  addTask: task => set(state => ({ tasks: [...state.tasks, task] })),
  deleteTask: id =>
    set(state => ({ tasks: state.tasks.filter(task => task.id !== id) })),
  updateTask: (id, updated) =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, ...updated } : task,
      ),
    })),
  filterType: '',
  setFilterType: (filterType: string) => set({ filterType }),
}));
