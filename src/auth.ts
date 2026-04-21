import { betterAuth } from "better-auth";
import { createAuthMiddleware } from "better-auth/api";
import { prisma } from "./server/prisma.ts";

export const auth = betterAuth({
  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      refreshCache: true,
    },
  },
  account: {
    storeAccountCookie: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  hooks: {
    after: createAuthMiddleware(async (ctx) => {
      const session = ctx.context.newSession;
      const user = session?.user;
      if (!user) return;

      console.log("Sign In", user);

      await prisma.user.upsert({
        where: {
          id: user.id,
        },
        create: {
          id: user.id,
          name: user.name,
        },
        update: {
          name: user.name,
        },
      });
    }),
  },
});
