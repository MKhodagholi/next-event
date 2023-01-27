import Layout from "../../components/Layout/Layout";
import EventList from "../../components/Event/EventList";
import Button from "../../components/UI/Button";

import gamingEvent from "../../public/images/gaming-event.jpeg";
import programmingEvent from "../../public/images/programming-event.jpeg";

export default function EventsPage() {
  const events = [
    {
      id: "e1",
      image: gamingEvent,
      title: "Gaming Event In Hawaii",
      date: new Date(),
      address: "ansari streat",
    },
    {
      id: "e2",
      image: programmingEvent,
      title: "Programming Event In Tehran",
      date: new Date(),
      address: "shahid behesti streat",
    },
    {
      id: "e3",
      image: gamingEvent,
      title: "Gaming Event In Hawaii",
      date: new Date(),
      address: "ansari streat",
    },
    {
      id: "e4",
      image: programmingEvent,
      title: "Programming Event In Tehran",
      date: new Date(),
      address: "shahid behesti streat",
    },
  ];

  return (
    <Layout>
      <div className="flex justify-between items-center px-4 py-2 mb-20 rounded-md border-2 border-black-900 shadow-md ">
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
      <EventList events={events} />
    </Layout>
  );
}
