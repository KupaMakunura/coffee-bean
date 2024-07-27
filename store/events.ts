import { Event } from "@/interfaces";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// store interface
interface Store {
  events: Event[];
  addEvent: (item: Event) => void;
  removeEvent: (id: number) => void;
}

const useEventStore = create(
  persist<Store>(
    (set, get) => ({
      events: [],
      addEvent(item) {
        const currentEvents = get().events;

        set({ events: [...currentEvents, item] });
      },

      //   remove event
      removeEvent(id) {
        const currentEvents = get().events;
        set({ events: currentEvents.filter((item) => item.id !== id) });
      },
    }),

    // the storage key and persist type
    {
      name: "events-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useEventStore;
