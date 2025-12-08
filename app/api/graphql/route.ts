import { resolvers, typeDefs } from "@/app/utils/graphql";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";


const server = new ApolloServer({ typeDefs, resolvers });
const handler = startServerAndCreateNextHandler(server);


export const GET = (req: NextRequest) => {
	return handler(req);
}


export const POST = (req: NextRequest) => {
	return handler(req);
}