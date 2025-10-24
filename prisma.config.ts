// prisma.config.ts
import "dotenv/config"; // <-- loads .env before Prisma runs
import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
});
