import Event from "../components/Event/EventCard";
import EventList from "../components/Event/EventList";
import Layout from "../components/Layout/Layout";

import gamingEvent from "../public/images/gaming-event.jpeg";
import programmingEvent from "../public/images/programming-event.jpeg";

function App() {
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
  ];

  return (
    <Layout>
      <EventList events={events} />
    </Layout>
  );
}

export default App;
