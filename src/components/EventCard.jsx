"use client";

import Link from "next/link";
import Image from "next/image";

const EventCard = ({ event }) => {
  const eventLink = `/events/${event.slug}`;

  return (
    <Link
      href={eventLink}
      className="relative w-full sm:w-80 md:w-96 lg:w-80 bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer flex-shrink-0 mx-2 my-4"
    >
      <div className="h-40 w-full bg-blue-600 flex items-center justify-center rounded-t-xl">
        <Image
          src={event.imageUrl || "/placeholder.png"}
          alt={event.title}
          width={300}
          height={150}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
        <p className="text-gray-400 text-sm line-clamp-3">{event.description}</p>
      </div>
    </Link>
  );
};

export default EventCard;
