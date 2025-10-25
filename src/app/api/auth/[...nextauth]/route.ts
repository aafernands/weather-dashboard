import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import { z } from "zod";

const prisma = new PrismaClient();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const handler = NextAuth({
  session: { strategy: "database" },
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(creds) {
        const parsed = loginSchema.safeParse(creds);
        if (!parsed.success) return null;
        const { email, password } = parsed.data;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return null;
        const ok = await compare(password, user.passwordHash);
        if (!ok) return null;

        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      // NextAuth will inject DB session if using Prisma adapter; keep minimal
      return session;
    },
  },
  // You can wire the Prisma Adapter if you prefer session tables auto-managed:
  // adapter: PrismaAdapter(prisma),
});

export { handler as GET, handler as POST };
