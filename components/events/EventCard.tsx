"use client";
import { Event } from "@/interfaces";
import useEventStore from "@/store/events";
import { Bookmark, CalendarIcon, ClockIcon, MapPin } from "lucide-react";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useToast } from "../ui/use-toast";

const EventCard = (props: Event) => {
  const addEvent = useEventStore((state) => state.addEvent);
  const { toast } = useToast();

  // session
  const { status } = useSession();

  const handleBookmarkEvent = () => {
    if (status === "unauthenticated") {
      toast({
        variant: "destructive",
        description: "You need to sign in to bookmark events",
        title: "Cart",
      });
    } else {
      // add event to bookmarked events
      addEvent(props);

      // show toast notification
      toast({
        variant: "default",
        className: "bg-green-500 text-white",
        description: "Event successfully added to bookmarks",
        title: "Events",
      });
    }
  };
  return (
    <Card className="w-full border">
      <CardHeader>
        <div className="flex w-full justify-between">
          <CardTitle>{props.title}</CardTitle>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleBookmarkEvent()}
          >
            <Bookmark />
          </Button>
        </div>

        <div className="flex-1 space-y-2 py-3">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" />
            <span className="text-sm">{props.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="w-4 h-4" />
            <span className="text-sm">{props.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{props.location}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{props.description}</p>
      </CardContent>
    </Card>
  );
};

export default EventCard;
