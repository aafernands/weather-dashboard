import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// Using Open-Meteo (no key). Replace with your provider if needed.
const TTL_MS = 5 * 60 * 1000; // 5 min

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  if (!lat || !lon) return NextResponse.json({ error: "lat/lon required" }, { status: 400 });

  const key = `${lat},${lon}|current-hourly-daily`;

  // Check cache
  const hit = await prisma.weatherCache.findUnique({ where: { key } });
  if (hit && Date.now() - new Date(hit.fetchedAt).getTime() < TTL_MS) {
    return NextResponse.json(hit.payload);
  }

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,wind_speed_10m,relative_humidity_2m,precipitation,uv_index&hourly=temperature_2m,precipitation_probability,uv_index,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum&timezone=auto`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return NextResponse.json({ error: "Upstream error" }, { status: 502 });
  const data = await res.json();

  // Normalize if you want, else store as-is:
  await prisma.weatherCache.upsert({
    where: { key },
    create: { key, payload: data },
    update: { payload: data, fetchedAt: new Date() },
  });

  return NextResponse.json(data);
}
