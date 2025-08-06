import { Events } from "@/Constant";
import { notFound } from "next/navigation";

export default function EventDetails({ params }) {
  const event = Events.find((e) => e.slug === params.slug);

  if (!event) return notFound();

  return (
    <main className="px-4 py-12 md:px-8 max-w-4xl mx-auto text-foreground bg-background">
      <div className="mb-8">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-64 object-cover object-center rounded-xl"
        />
      </div>

      <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-400 mb-6">{event.description}</p>

      <div className="flex flex-wrap gap-2">
        <span className="bg-gray-800 text-xs px-2 py-1 rounded">
          {event.tag1}
        </span>
        <span className="bg-gray-800 text-xs px-2 py-1 rounded">
          {event.tag2}
        </span>
      </div>
    </main>
  );
}
