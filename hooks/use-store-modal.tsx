import { create } from 'zustand';

type UseStoreModalStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useModal = create<UseStoreModalStore>((set) => ({
    isOpen: false,
    onClose: () => set({ isOpen: false }),
    onOpen: () => set({ isOpen: true }),
}));
