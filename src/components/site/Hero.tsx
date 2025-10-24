import Link from "next/link";
import { SunIcon, CloudIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-600">
            <SunIcon className="h-4 w-4" />
            Fast, accurate, privacy-friendly
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Weather that works <span className="text-gray-500">for you.</span>
          </h1>
          <p className="mt-4 max-w-prose text-gray-600">
            Check current conditions, hourly/daily forecasts, UV index, wind, precipitation,
            and more. Save favorites and get back to what matters.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link
              href="/register"
              className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              Create free account
            </Link>
            <Link
              href="/features"
              className="rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Explore features
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5" />
              Favorites
            </div>
            <div className="flex items-center gap-2">
              <CloudIcon className="h-5 w-5" />
              Hourly & Daily
            </div>
            <div className="flex items-center gap-2">
              <SunIcon className="h-5 w-5" />
              UV & Air Quality*
            </div>
          </div>
        </div>

        {/* Mock hero preview */}
        <div className="overflow-hidden rounded-2xl border shadow-sm">
          <div className="bg-gradient-to-b from-gray-50 to-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">New York, NY</p>
                <p className="text-4xl font-semibold">72°</p>
                <p className="text-sm text-gray-600">Feels 70° · Mostly Cloudy</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">UV</p>
                <p className="text-xl font-semibold">5</p>
                <p className="text-xs text-gray-500">Moderate</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
              <Card label="Wind" value="9 mph" />
              <Card label="Humidity" value="58%" />
              <Card label="Precip" value="20%" />
            </div>

            <div className="mt-6">
              <div className="text-xs text-gray-500">Next hours</div>
              <div className="mt-2 grid grid-cols-6 gap-2 text-center text-xs">
                {["2 PM","3 PM","4 PM","5 PM","6 PM","7 PM"].map((t,i)=>(
                  <div key={i} className="rounded-lg border p-2">
                    <div className="font-medium">70°</div>
                    <div className="text-gray-500">{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t bg-white px-6 py-4 text-xs text-gray-500">
            * Air quality & alerts depend on your selected region and data provider.
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border bg-white p-3">
      <div className="text-gray-500">{label}</div>
      <div className="text-sm font-semibold">{value}</div>
    </div>
  );
}
