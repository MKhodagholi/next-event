import EventCard from "./EventCard";

export default function EventList({ events }) {
  return (
    <div className="flex flex-col gap-4 mt-20">
      {events.map((eventItem) => (
        <EventCard key={eventItem.id} event={eventItem} />
      ))}
    </div>
  );
}
