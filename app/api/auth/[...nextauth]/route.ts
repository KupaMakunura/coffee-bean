import NextAuth from "next-auth";
import GoogleProviders from "next-auth/providers/google";

const routeHandler = NextAuth({
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update" && session?.user) {
        return { ...token, ...session.user };
      }

      if (user) {
        return { ...token, ...user };
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token as any;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { routeHandler as GET, routeHandler as POST };

