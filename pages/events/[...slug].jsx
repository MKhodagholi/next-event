import { useRouter } from "next/router";

import EventList from "../../components/Event/EventList";

import { DUMMY_EVENTS } from "../../data/dummy-events";

export default function EventSearch() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="mt-20 center">loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numMonth < 1 ||
    numMonth > 12 ||
    numYear < 2020 ||
    numYear > 2023
  ) {
    return <p className="mt-20 center">Please Choose the valid Date!</p>;
  }

  const filterd_events = DUMMY_EVENTS.filter((event) => {
    const date = new Date(event.date);
    return date.getMonth() === numMonth - 1 && date.getFullYear() === numYear;
  });

  return (
    <div className="w-[80%] mt-20 md:w-[60%]">
      {filterd_events.length > 0 ? (
        <EventList events={filterd_events} />
      ) : (
        <p className="center">No Events Found, Please Search Another Date!</p>
      )}
    </div>
  );
}
