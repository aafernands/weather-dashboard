 "use client";

import { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const errorParam = params.get("error");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "");
    const password = String(form.get("password") || "");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, // we'll handle redirect manually
    });

    setLoading(false);

    if (!res || res.error) {
      setErr("Invalid email or password");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <h1 className="mb-6 text-2xl font-semibold">Log in</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm">Email</label>
          <input
            name="email"
            type="email"
            className="w-full rounded-md border px-3 py-2 outline-none"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm">Password</label>
          <input
            name="password"
            type="password"
            className="w-full rounded-md border px-3 py-2 outline-none"
            required
            minLength={8}
          />
        </div>
        {err && <p className="text-sm text-red-600">{err}</p>}
        {errorParam && <p className="text-sm text-red-600">{errorParam}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-black px-4 py-2 text-white disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <p className="mt-4 text-sm">
        Don’t have an account?{" "}
        <a className="underline" href="/register">
          Create one
        </a>
      </p>
    </div>
  );
}
