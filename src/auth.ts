import { betterAuth } from "better-auth";

export const auth = betterAuth({
    session: {
        cookieCache: {
            enabled: true,
            strategy: "jwt",
            refreshCache: true
        }
    },
    account: {
        storeAccountCookie: true
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
});
