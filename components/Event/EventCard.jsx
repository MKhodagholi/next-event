import Image from "next/image";
import Link from "next/link";

import moment from "moment/moment";

export default function EventCard({ event }) {
  const { id, image, title, date, address } = event;

  return (
    <div className="flex min-w-[500px] min-h-[200px] bg-white rounded-md shadow-lg overflow-hidden">
      <div className="min-w-[200px] w-[40%]">
        <Image src={image} alt="" className="h-full" />
      </div>
      <div className="flex flex-col justify-between w-[60%] p-4">
        <h2 className="text-2xl mb-4 text-black-900">{title}</h2>
        <div className="text-black-700">{moment(date).format("MMM Do YY")}</div>
        <address className="max-w-[200px] text-black-600">{address}</address>
        <button className="inline-block mt-4 p-2 rounded-md bg-teal-500 text-white self-end">
          <Link href={`/events/${id}`}>Explore Event</Link>
        </button>
      </div>
    </div>
  );
}
