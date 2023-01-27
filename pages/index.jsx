import Layout from "../components/Layout/Layout";
import EventList from "../components/Event/EventList";

import { DUMMY_EVENTS } from "../data/dummy-events";

function App() {
  return (
    <div className="w-[80%] md:w-[60%]">
      <EventList events={DUMMY_EVENTS} />
    </div>
  );
}

export default App;
