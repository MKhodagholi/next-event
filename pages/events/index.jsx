import { useRouter } from "next/router";
import EventList from "../../components/Event/EventList";
import EventsSearch from "../../components/Event/EventsSerach";

import { DUMMY_EVENTS } from "../../data/dummy-events";

export default function EventsPage() {
  const router = useRouter();

  const findEventsHandler = (month, year) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div className="w-[80%] md:w-[60%]">
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={DUMMY_EVENTS} />
    </div>
  );
}
