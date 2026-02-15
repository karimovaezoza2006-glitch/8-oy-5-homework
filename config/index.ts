import type {AuthOptions} from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider from "next-auth/providers/linkedin";
export const authOptins: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_GIT_CLIENT_ID as string,
      clientSecret: process.env.NEXT_GIT_CLIENT_SECREET as string,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECREET as string,
    }),
    LinkedinProvider({
      clientId: process.env.NEXT_LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.NEXT_LINKEDIN_CLIENT_SECREET as string,
    }),
  ],
  secret: process.env.SECREET_KEY as string,
};