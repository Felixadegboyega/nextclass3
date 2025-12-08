import gql from "graphql-tag"
import dbConnect from "./dbConnect"
import UserModel from "../models/user";
import * as bcrypt from "bcrypt";
import "server-only";

export const typeDefs = gql`
	type Query {
		name: String
		users: [User]
		user(_id: ID!): User
	}

	type User {
		_id: ID!
		firstname: String!
		lastname: String!
		email: String!
		password: String!
	}

	type Post {
		title: String,
		description: String,
		date: String
	}

	type Response {
		success: Boolean!
		message: String!
		user: User
	}

	type Mutation {
		register(firstname: String!, lastname:String!, email:String!, password:String!): Response
	}
		
`

export const resolvers = {
	Query: {
		name: () => "Oluwaseunfunmi",

		users: async () => {
			await dbConnect();
			const users = await UserModel.find();
			return users;
		},

		user: async (parent: any, args: { _id: string }) => {
			const { _id } = args;
			await dbConnect();
			const user = await UserModel.findById(_id);
			return user;
		}
	},

	Mutation: {
		register: async (parent: any, args: {
			firstname: string,
			lastname: string, email: string, password: string
		}) => {
			const userData = args;
			try {
				const salt = await bcrypt.genSalt(10);
				const hash = await bcrypt.hash(userData.password, salt)
				userData.password = hash;
				await dbConnect();
				await UserModel.init();
				const result = await UserModel.create(userData);
				if (!result) {
					return {
						success: false,
						message: "I no know wetin happen o"
					}
				}

				return {
					success: true,
					message: "E don save",
					user: result
				}
			} catch (error) {
				console.log(error);

				return {
					success: false,
					message: "something sup ni"
				}
			}
		}
	}
}
