import { betterAuth } from "better-auth";
import { createAuthMiddleware } from "better-auth/api";
import { prisma } from "./server/prisma.ts";
import { prismaAdapter } from "better-auth/adapters/prisma";
import {
  BETTER_AUTH_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from "./server/env.ts";
import { anonymous } from "better-auth/plugins";

export const auth = betterAuth({
  secret: BETTER_AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    google: {
      clientId: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
    },
  },
  hooks: {
    after: createAuthMiddleware(async (ctx) => {
      const session = ctx.context.newSession;
      const user = session?.user;
      if (!user) return;
      console.log("Sign In", user);
    }),
  },
  plugins: [anonymous()],
});
