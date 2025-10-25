import { CloudIcon, SunIcon, MapPinIcon, BellAlertIcon, HeartIcon } from "@heroicons/react/24/outline";

const items = [
  { title: "Favorites", desc: "Pin cities and jump back in one tap.", Icon: HeartIcon },
  { title: "Search", desc: "City/ZIP or use your current location.", Icon: MapPinIcon },
  { title: "Hourly & Daily", desc: "24-hour and 7-10 day outlooks.", Icon: CloudIcon },
  { title: "UV & Sun", desc: "UV index, sunrise & sunset times.", Icon: SunIcon },
  { title: "Alerts", desc: "Severe weather alerts where supported.", Icon: BellAlertIcon },
];

export default function FeatureCards() {
  return (
    <section className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <h2 className="text-2xl font-semibold">Everything you need</h2>
        <p className="mt-2 max-w-prose text-gray-600">
          A focused dashboard with the essentials: current conditions, hourly/daily, UV, precipitation,
          wind, and more—without the clutter.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, desc, Icon }) => (
            <div key={title} className="rounded-2xl border bg-white p-5">
              <Icon className="h-6 w-6" />
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
