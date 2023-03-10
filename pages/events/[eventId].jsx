import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

import Layout from "../../components/Layout/Layout";

import moment from "moment/moment";

import { useRouter } from "next/router";
import { getEventsById } from "../../data/dummy-events";

export default function EventDescriptionPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const eventItem = getEventsById(eventId);

  return (
    eventItem && (
      <Fragment>
        <div className="w-screen h-[125px] bg-gradient-to-r from-sky-600 to-teal-600 md:h-[200px]">
          <h1 className="mt-8 text-center text-white text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            {eventItem.title}
          </h1>
        </div>

        <div className="flex w-[250px] p-8 mx-auto bg-black-400 -translate-y-20 md:w-[600px]">
          <Image
            src={"/" + eventItem.image}
            alt=""
            width={100}
            height={100}
            className="w-[75px] h-[75px] border-2 border-white bg-cover rounded-full md:w-[250px] md:h-[250px]"
          />
          <div className="flex flex-col justify-evenly ml-8 text-lg text-teal-300 md:text-2xl">
            <div>{moment(eventItem.date).format("MMM Do YY")}</div>
            <div>{eventItem.address}</div>
          </div>
        </div>
        <div>{eventItem.description}</div>
      </Fragment>
    )
  );
}
