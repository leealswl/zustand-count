import { create } from 'zustand';

const counterStore = create((set) => ({
  increaseCount: 0,
  decreaseCount: 0,
  
  increase: () => set((state) => ({ increaseCount: state.increaseCount + 1 })),
  increaseBy: (value) =>
    set((state) => ({ increaseCount: state.increaseCount + value })),
  
  decrease: () => set((state) => ({ decreaseCount: state.decreaseCount - 1 })),
  decreaseBy: (value) =>
    set((state) => ({ decreaseCount: state.decreaseCount - value })),
}));

export default counterStore;
