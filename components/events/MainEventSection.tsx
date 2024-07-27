"use client";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "../ui/scroll-area";
import EventCard from "./EventCard";
import { coffeeEvents } from "@/constants";

const MainEventSection = () => {
  // search params state

  // loaders
  const loaders = [0, 1, 2, 3, 4];

  // handle search text

  return (
    <div className="md:overflow-hidden md:h-screen">
      <main className="p-6 h-full">
        <div className="md:flex w-full space-x-3 h-full max-md:flex-1 max-md:justify-center">
          {/* Event cards section */}
          <div className="flex-1 max-md:w-full md:w-full pr-6 space-y-10 mt-5 h-full">
            <div className="flex-1 w-full justify-start space-y-3">
              <div className="space-y-1">
                <p className="max-md:text-xl font-semibold md:text-3xl">
                  Upcoming Events
                </p>
                <p className="max-md:text-base md:text-sm">
                  Browse our upcoming events and plan your visit.
                </p>
              </div>
              {/* Search input and the button */}
              <div className="flex space-x-3">
                <Input placeholder="Search events by title,location and description ..." />
              </div>
            </div>

            <ScrollArea className="h-full overflow-y-auto md:px-5">
              <div className="grid max-md:grid-cols-1 md:grid-cols-2 gap-4">
                {/* the actual data when loaded */}
                {coffeeEvents?.map((event, index) => (
                  <EventCard
                    id={event.id}
                    title={event.title}
                    description={event.description}
                    date={event.date}
                    location={event.location}
                    time={event.time}
                    key={index}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainEventSection;
