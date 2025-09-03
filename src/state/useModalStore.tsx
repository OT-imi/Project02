import { create } from 'zustand';
type ModalStore = {
  visible: boolean;
  setVisible: () => void;
  title: string;
  description: string;
  setDescription: (description: string) => void;
  setTitle: (title: string) => void;
  resetFields: () => void;
};
export const useModalStore = create<ModalStore>()(set => ({
  visible: false,
  setVisible: () => set(state => ({ visible: !state.visible })),
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
  resetFields: () => set({ title: '', description: '' }),
}));
