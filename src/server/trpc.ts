import { initTRPC } from "@trpc/server";
import { EventEmitter } from "events";
import {prisma} from "./prisma.ts";

const events = new EventEmitter();

export const createContext = () => {
  return {
    prisma,
    events,
  };
};

const t = initTRPC.context<typeof createContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
