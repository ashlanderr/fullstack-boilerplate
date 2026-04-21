import { protectedProcedure, publicProcedure, router } from "./trpc.ts";

export const appRouter = router({
  hello: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findUnique({
      where: { id: ctx.user.id },
    });
    return { greeting: `Hello, ${ctx.user.name}!`, user };
  }),

  onChange: publicProcedure.subscription(async function* () {
    for (let i = 0; i < 10; ++i) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      yield i;
    }
  }),
});

export type AppRouter = typeof appRouter;
