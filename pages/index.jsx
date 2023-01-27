import Layout from "../components/Layout/Layout";
import EventList from "../components/Event/EventList";

import { DUMMY_EVENTS } from "../data/dummy-events";

import gamingEvent from "../public/images/gaming-event.jpeg";
import programmingEvent from "../public/images/programming-event.jpeg";

function App() {
  return (
    <Layout>
      <EventList events={DUMMY_EVENTS} />
    </Layout>
  );
}

export default App;
