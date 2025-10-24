import Link from "next/link";

const tiers = [
  {
    name: "Free",
    price: "$0",
    tagline: "Start in seconds",
    features: [
      "Current conditions",
      "Hourly & 7-day forecast",
      "Save up to 3 favorites",
    ],
    cta: { label: "Get started", href: "/register" },
  },
  {
    name: "Plus",
    price: "$5/mo",
    tagline: "For everyday power users",
    features: [
      "Everything in Free",
      "10 favorites",
      "Air quality + alerts",
      "Priority refresh",
    ],
    cta: { label: "Start 7-day trial", href: "/register" },
    highlight: true,
  },
  {
    name: "Pro",
    price: "$12/mo",
    tagline: "For weather enthusiasts",
    features: [
      "Everything in Plus",
      "Unlimited favorites",
      "Radar tiles (beta)",
      "Export & integrations",
    ],
    cta: { label: "Go Pro", href: "/register" },
  },
];

export default function PricingTable() {
  return (
    <section className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <h2 className="text-2xl font-semibold">Simple pricing</h2>
        <p className="mt-2 max-w-prose text-gray-600">
          Start free. Upgrade any time for more favorites, alerts, and advanced data.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-6 ${t.highlight ? "ring-2 ring-black" : ""}`}
            >
              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                {t.highlight && (
                  <span className="rounded-full bg-black px-2 py-0.5 text-xs text-white">
                    Most popular
                  </span>
                )}
              </div>
              <div className="mt-2 text-3xl font-bold">{t.price}</div>
              <p className="mt-1 text-sm text-gray-600">{t.tagline}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="text-gray-700">• {f}</li>
                ))}
              </ul>
              <Link
                href={t.cta.href}
                className="mt-6 inline-block w-full rounded-lg bg-black px-4 py-2 text-center text-sm font-medium text-white hover:opacity-90"
              >
                {t.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
