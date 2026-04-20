import { initTRPC } from "@trpc/server";
import { EventEmitter } from "events";

const events = new EventEmitter();

export const createContext = () => {
  return {
    events,
  };
};

const t = initTRPC.context<typeof createContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
