import FeatureCards from "@/components/FeatureCards";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <h1 className="text-3xl font-bold">Features</h1>
      <p className="mt-2 max-w-prose text-gray-600">
        A focused, fast weather app with the essentials front and center.
        Save favorites, switch units, and get forecasts at a glance.
      </p>

      <div className="mt-10">
        <FeatureCards />
      </div>

      <div className="mt-8 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Coming soon</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
          <li>Radar tiles on the dashboard</li>
          <li>Severe weather push/email alerts</li>
          <li>Pollen and air quality improvements</li>
          <li>Sharable forecast links</li>
        </ul>
        <Link href="/register" className="mt-4 inline-block rounded-lg bg-black px-4 py-2 text-sm text-white">
          Get started free
        </Link>
      </div>
    </div>
  );
}
