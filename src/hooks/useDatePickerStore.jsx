import { create } from 'zustand'; // Change this line

const useDatePickerStore = create((set) => ({
  recurrence: 'daily',
  customization: { interval: 1, specificDays: [] },
  startDate: new Date(),
  endDate: null,
  setRecurrence: (recurrence) => set({ recurrence }),
  setCustomization: (customization) => set({ customization }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}));

export default useDatePickerStore;
