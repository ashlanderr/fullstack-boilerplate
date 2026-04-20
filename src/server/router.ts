import { publicProcedure, router } from "./trpc.ts";
import { z } from "zod";

export const appRouter = router({
  hello: publicProcedure.input(z.object({name: z.string()})).query(async ({input}) => {
    return {greeting: `Hello, ${input.name}`};
  }),

  onChange: publicProcedure.subscription(async function *() {
    for (let i = 0; i < 10; ++i) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield i;
    }
  })
});

export type AppRouter = typeof appRouter;
