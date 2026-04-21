import { appRouter } from "./router.ts";
import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { createContext } from "./trpc.ts";
import { applyWSSHandler } from "@trpc/server/adapters/ws";
import { WebSocketServer } from "ws";
import { auth } from "../auth.ts";
import { toNodeHandler } from "better-auth/node";

const app = express();

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.use(cors());
app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.use("/alive", (_req, res) => {
  res.status(200).send({});
});

const server = app.listen(5000, () => {
  console.log("🚀 Server ready at http://localhost:5000");
});

const wss = new WebSocketServer({ server });
applyWSSHandler({
  wss,
  router: appRouter,
  createContext,
});
