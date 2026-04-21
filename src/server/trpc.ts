import {initTRPC, TRPCError} from "@trpc/server";
import { EventEmitter } from "events";
import {prisma} from "./prisma.ts";
import {auth} from "../auth.ts";
import type {CreateExpressContextOptions} from "@trpc/server/adapters/express";
import type {CreateWSSContextFnOptions} from "@trpc/server/adapters/ws";

const events = new EventEmitter();

export const createContext = async ({ req }: CreateExpressContextOptions | CreateWSSContextFnOptions) => {
  const session = await auth.api.getSession({
    headers: new Headers(req.headers as Record<string, string>),
  });
  return {
    prisma,
    events,
    session,
  };
};

type Context = Awaited<ReturnType<typeof createContext>>;
const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      user: ctx.session.user,
    },
  });
});
