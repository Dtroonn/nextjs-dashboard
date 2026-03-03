import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
    async session({ session, token }) {
        // console.log('TOKEN', token)
      //   console.log('session token', token)
      // console.log("SESSION:", session)
      return session
    },
    async jwt({ token, user, account }) {
      // console.log('JWT', {
      //   token,
      //   user,
      //   account
      // })
      if(user) {
        token.xuyxuy = 'xuyxuy'
      }
      return token
    },
  },
  providers: [],
} satisfies NextAuthConfig;
