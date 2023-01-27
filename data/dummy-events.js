export const DUMMY_EVENTS = [
  {
    id: "e1",
    image: "images/gaming-event.jpeg",
    title: "Gaming Event In Hawaii",
    date: "2022-01-06",
    address: "ansari streat",
    description: "Gaming Dota 2 ",
  },
  {
    id: "e2",
    image: "images/programming-event.jpeg",
    title: "Programming Event In Kerman",
    date: "2021-07-09",
    address: "shahid behesti streat",
  },
  {
    id: "e3",
    image: "images/concert-event.jpeg",
    title: "Concert Event In Kashan",
    date: "2023-01-07",
    address: "ansari streat",
  },
  {
    id: "e4",
    image: "images/wedding-event.jpeg",
    title: "Wedding Event In Tehran",
    date: "2023-01-16",
    address: "shahid behesti streat",
  },
];

export function getEventsById(id) {
  console.log(id);
  console.log(DUMMY_EVENTS.find((eventItem) => eventItem.id === id));
  return DUMMY_EVENTS.find((eventItem) => eventItem.id === id);
}
