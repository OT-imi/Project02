import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  date: string;
  category?: string;
}
export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  category?: string;
  dueDate: string;
}
export type TaskStore = {
  tasks: Task[];
  todos: Todo[];
  fetchTasks: () => Promise<void>;
  addTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
  updateTask: (id: string, updated: Partial<Task>) => void;
  setTasks: (tasks: Task[]) => void;
  filterType: string;
  setFilterType: (filterType: string) => void;
  toggleStatus: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
};

export const useTaskStore = create<TaskStore>()(
  persist(
    set => ({
      todos: [
        {
          id: '1',
          title: 'Subject of Appeal',
          description: "This ain't a description lad",
          completed: true,
          dueDate: '',
          category: 'Design',
          createdAt: '',
        },
        {
          id: '2',
          title: 'EmptyTask v [Routes.Tasks]: undefined',
          description: "This ain't a description lad",
          completed: false,
          dueDate: '',
          category: 'Personal',
          createdAt: '',
        },
        {
          id: '3',
          title: 'Bayern v CFC',
          description: "This ain't a description lad",
          completed: false,
          dueDate: '',
          category: 'Work',
          createdAt: '',
        },
      ],
      toggleStatus: id =>
        set(state => ({
          tasks: state.tasks.map(t =>
            t.id === id ? { ...t, completed: !t.completed } : t,
          ),
        })),
      tasks: [],
      fetchTasks: async () => {
        try {
          const res = await fetch(
            'https://taskmanager-api.graydune-340b2a35.eastus.azurecontainerapps.io/api/tasks',
          );
          const data = await res.json();
          set({ tasks: data });
          return data;
        } catch (err) {
          console.error('Failed to fetch tasks', err);
          throw err;
        }
      },
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
      filterType: 'all',
      setFilterType: (filterType: string) => set({ filterType }),
      searchQuery: '',
      setSearchQuery: (searchQuery: string) => set({ searchQuery }),
    }),
    {
      name: 'task-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
