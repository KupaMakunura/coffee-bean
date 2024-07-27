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
    async jwt({ token, user, account }) {
      // Handle only Google authentication
      if (account?.provider === "google") {
        if (user) {
          token.id = user.id;
          token.email = user.email;
          token.name = user.name;
          token.image = user.image;
          // Add any other user properties you want to include in the token
        }
      }
      return token;
    },
    async session({ session, token }) {
      // Only include Google authenticated user in the session
      if (token.email) {
        session.user = {
          email: token.email,
          name: token.name,
          image: token.image as string,
          // Include any other properties you stored in the token
        };
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
});

export { routeHandler as GET, routeHandler as POST };
