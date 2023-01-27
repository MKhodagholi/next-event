import Layout from "../../components/Layout/Layout";
import EventList from "../../components/Event/EventList";
import Button from "../../components/UI/Button";

import { DUMMY_EVENTS } from "../../data/dummy-events";

export default function EventsPage() {
  return (
    <div className="w-[80%] md:w-[60%]">
      <div className="flex justify-between items-center  px-4 py-2 my-20 rounded-md border-2 border-black-900 shadow-md ">
        <div>
          <label htmlFor="" className="mr-4">
            Year:
          </label>
          <select name="" id="" className="px-2 py-1 rounded-md">
            <option value="">2023</option>
            <option value="">2022</option>
            <option value="">2021</option>
          </select>
        </div>
        <div>
          <label htmlFor="" className="mr-4">
            Month:
          </label>
          <select name="" id="" className="px-2 py-1  rounded-md">
            <option value="">2023</option>
            <option value="">2022</option>
            <option value="">2021</option>
          </select>
        </div>
        <Button>Find Events</Button>
      </div>
      <EventList events={DUMMY_EVENTS} />
    </div>
  );
}
