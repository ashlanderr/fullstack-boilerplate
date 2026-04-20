import { publicProcedure, router } from "./trpc.ts";
import { z } from "zod";

export const appRouter = router({
  hello: publicProcedure.input(z.object({id: z.string()})).query(async ({ctx, input}) => {
    const user = await ctx.prisma.user.findUnique({
      where: {id: input.id}
    });
    if (!user) throw new Error('User not found');
    return {greeting: `Hello, ${user.name}!`, user};
  }),

  onChange: publicProcedure.subscription(async function *() {
    for (let i = 0; i < 10; ++i) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield i;
    }
  })
});

export type AppRouter = typeof appRouter;
