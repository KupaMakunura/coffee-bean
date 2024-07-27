import { CalendarIcon, ClockIcon, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Event } from "@/interfaces";

const EventCard = (props: Event) => {
  return (
    <Card className="w-full border">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
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
