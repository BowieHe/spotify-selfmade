import { create } from "zustand";

interface UseUploadStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useUploadModal = create<UseUploadStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUploadModal;
