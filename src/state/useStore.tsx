import { create } from 'zustand';

type appStore = {
  category: string;
  setCategory: (category: string) => void;
  showDatePicker: boolean;
  setShowDatePicker: () => void;
  dueDate: Date;
  setDueDate: (dueDate: Date) => void;
};

export const useStore = create<appStore>()(set => ({
  category: 'Personal',
  setCategory: (category: string) => set({ category }),
  showDatePicker: false,
  dueDate: new Date(),
  setShowDatePicker: () =>
    set(state => ({ showDatePicker: !state.showDatePicker })),
  setDueDate: (dueDate: Date) => set({ dueDate }),
}));
