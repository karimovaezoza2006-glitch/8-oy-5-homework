import { authOptins} from "@/config";
import NextAuth from "next-auth";
const handler = NextAuth(authOptins)

export { handler as GET, handler as POST}