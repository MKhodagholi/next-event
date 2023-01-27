export const DUMMY_EVENTS = [
  {
    id: "e1",
    image: "images/gaming-event.jpeg",
    title: "Gaming Event In Hawaii",
    date: new Date(),
    address: "ansari streat",
    description: 'Gaming Dota 2 '
  },
  {
    id: "e2",
    image: "images/programming-event.jpeg",
    title: "Programming Event In Kerman",
    date: new Date(),
    address: "shahid behesti streat",
  },
  {
    id: "e3",
    image: "images/concert-event.jpeg",
    title: "Concert Event In Kashan",
    date: new Date(),
    address: "ansari streat",
  },
  {
    id: "e4",
    image: "images/wedding-event.jpeg",
    title: "Wedding Event In Tehran",
    date: new Date(),
    address: "shahid behesti streat",
  },
];

export function getEventsById(id) {
  console.log(id);
  console.log(DUMMY_EVENTS.find((eventItem) => eventItem.id === id));
  return DUMMY_EVENTS.find((eventItem) => eventItem.id === id);
}
