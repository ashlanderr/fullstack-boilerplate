import { createContext } from "react";
import type { Session } from "./types.ts";

export const SessionContext = createContext<Session | null>(null);
