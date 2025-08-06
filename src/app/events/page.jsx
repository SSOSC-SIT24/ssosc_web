import { Events } from "@/Constant";
import Link from "next/link";

export default function EventsPage() {
  return (
    <main className="px-4 py-12 md:px-8 max-w-7xl mx-auto text-foreground bg-background">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Our Events</h1>
        <p className="text-gray-400 mt-2">
          Explore upcoming and past events hosted by our community.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {Events.map((event) => (
          <Link
            key={event.slug}
            href={`/events/${event.slug}`}
            className="border border-gray-700 rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <div className="h-56 w-full relative overflow-hidden">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-400 text-sm line-clamp-3">
                {event.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-800 text-xs px-2 py-1 rounded">
                  {event.tag1}
                </span>
                <span className="bg-gray-800 text-xs px-2 py-1 rounded">
                  {event.tag2}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
