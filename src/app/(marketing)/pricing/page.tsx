import PricingTable from "@/components/site/PricingTable";
import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <h1 className="text-3xl font-bold">Pricing</h1>
        <p className="mt-2 max-w-prose text-gray-600">
          Start free. Upgrade when you’re ready for more favorites, alerts, and advanced data.
        </p>
      </div>
      <PricingTable />
      <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Questions?</h2>
          <p className="mt-1 text-sm text-gray-600">
            Email us any time and we’ll help you pick the right plan for your needs.
          </p>
          <Link href="/register" className="mt-4 inline-block rounded-lg bg-black px-4 py-2 text-sm text-white">
            Create account
          </Link>
        </div>
      </div>
    </>
  );
}
