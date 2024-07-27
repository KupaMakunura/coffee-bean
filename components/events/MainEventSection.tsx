"use client";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "../ui/scroll-area";
import EventCard from "./EventCard";
import { coffeeEvents as events } from "@/constants";
import { useState } from "react";

const MainEventSection = () => {
  const [coffeeEvents, setCoffeeEvents] = useState(events);

  //  handle search event
  const handleSearch = (searchText: string) => {
    const searchResult = events.filter((event) => {
      return (
        event.title.toLowerCase().includes(searchText.toLowerCase()) ||
        event.location.toLowerCase().includes(searchText.toLowerCase()) ||
        event.description.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setCoffeeEvents(searchResult);
  };

  return (
    <div className="md:overflow-hidden md:h-screen">
      <main className="p-6 h-full">
        <div className="md:flex w-full space-x-3 h-full max-md:flex-1 max-md:justify-center">
          {/* Event cards section */}
          <div className="flex-1 max-md:w-full md:w-full pr-6 space-y-10 mt-5 h-full">
            <div className="flex-1 w-full justify-start space-y-3">
              <div className="space-y-1">
                <p className="max-md:text-xl font-semibold md:text-3xl">
                  Upcoming Coffee Events
                </p>
                <p className="max-md:text-base md:text-sm">
                  Browse, save upcoming events and plan your visit.
                </p>
              </div>
              {/* Search input and the button */}
              <div className="flex space-x-3">
                <Input
                  placeholder="Search events by title,location and description ..."
                  onChange={(event) => handleSearch(event.target.value)}
                />
              </div>
            </div>

            <ScrollArea className="h-full overflow-y-auto">
              <div className="grid max-md:grid-cols-1 md:grid-cols-3 gap-4">
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
