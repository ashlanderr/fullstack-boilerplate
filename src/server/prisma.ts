import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.ts";
import { DATABASE_URL } from "./env.ts";

const adapter = new PrismaPg({ connectionString: DATABASE_URL });
export const prisma = new PrismaClient({ adapter });

export type TransactionClient = Parameters<
  Parameters<typeof prisma.$transaction>[0]
>[0];
