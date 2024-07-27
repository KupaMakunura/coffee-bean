import { Event } from "@/interfaces";
import { create } from "zustand";

// store interface
interface Store {
  events: Event[];
  addEvent: (item: Event) => void;
  removeEvent: (id: number) => void;
}

const useEventStore = create<Store>((set, get) => ({
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
}));

export default useEventStore;
