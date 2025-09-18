import { create } from 'zustand';
type ModalStore = {
  visible: boolean;
  setVisible: () => void;
  isVisible: boolean;
  setIsVisible: () => void;
  title: string;
  description: string;
  category: string;
  showCategory: boolean;
  setShowCategory: () => void;
  dueDate: string;
  setField: (
    field: keyof Omit<ModalStore, 'openForEdit'>,
    value: string,
  ) => void;
  setDescription: (description: string) => void;
  setTitle: (title: string) => void;
  resetFields: () => void;
};
export const useModalStore = create<ModalStore>()(set => ({
  visible: false,
  setVisible: () => set(state => ({ visible: !state.visible })),
  isVisible: false,
  setIsVisible: () => set(state => ({ isVisible: !state.isVisible })),
  description: '',
  setDescription: (description: string) =>
    set({
      description,
    }),
  title: '',
  setTitle: (title: string) =>
    set({
      title,
    }),
  category: '',
  showCategory: false,
  setShowCategory: () => set(state => ({ showCategory: !state.showCategory })),
  dueDate: '',
  setField: (field, value) => set(state => ({ ...state, [field]: value })),
  resetFields: () => set({ title: '', description: '' }),
}));
