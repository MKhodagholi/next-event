import Image from "next/image";
import Link from "next/link";

import Button from "../UI/Button";

import moment from "moment/moment";

export default function EventCard({ event }) {
  const { id, image, title, date, address } = event;

  return (
    <div className="flex bg-white rounded-md shadow-lg overflow-hidden">
      <div className="w-[40%]">
        <Image
          src={"/" + image}
          width="100"
          height="100"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between w-[60%] p-4">
        <h2 className="text-2xl mb-4 text-black-900">{title}</h2>
        <div className="text-black-700">{moment(date).format("MMM Do YY")}</div>
        <address className="max-w-[200px] text-black-600">{address}</address>
        <Link
          href={`/events/${id}`}
          className="p-2 bg-teal-500 text-white rounded-md  self-end"
        >
          Explore Event
        </Link>
      </div>
    </div>
  );
}
