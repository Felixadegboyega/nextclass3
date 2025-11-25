"use server"

import { revalidatePath } from "next/cache";
import ProductModel from "../models/product";
import UserModel from "../models/user";
import dbConnect from "./dbConnect";
import * as bcrypt from "bcrypt";
import { encrypt } from "./session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const addProduct = async (form: { title: string, price: string }) => {
	try {
		await dbConnect();
		const isExisting = await ProductModel.findOne({ title: form.title });
		if (isExisting) {
			return {
				success: false,
				message: "A Product with this title already exist"
			}
		}
		const post = { title: form.title, price: form.price }
		await ProductModel.create(post);
		revalidatePath("/admin/products")
		return { success: true }
	} catch (error) {
		// if (error instanceof MongooseError && (error as any).code == 11000) {
		// 	return {
		// 		success: false,
		// 		message: "A Product with this title already exist"
		// 	}
		// }
		return { success: false, message: "Something went wrong" }
	}
}


// export const addProduct = async (form: FormData) => {
// 	const title = form.get("title") as string
// 	const price = form.get("price") as string

// 	console.log({
// 		title,
// 		price: parseFloat(price),
// 	})
// }


export const signUp = async (userData: {
	email: string,
	password: string,
	firstname: string,
	lastname: string
}) => {
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
			message: "E don save"
		}
	} catch (error) {
		console.log(error);

		return {
			success: false,
			message: "something sup ni"
		}
	}
}


export const signIn = async (userData: { email: string, password: string }) => {
	await dbConnect();
	const user = await UserModel.findOne({ email: userData.email }).select("+password");

	if (!user) {
		return {
			success: false,
			message: "Invalid Credentials"
		}
	}

	const validPassword = await bcrypt.compare(userData.password, user.password);

	if (!validPassword) {
		return {
			success: false,
			message: "Invalid Credentials"
		}
	}

	const cookieStore = await cookies();
	const token = await encrypt({ _id: user._id.toString() });
	cookieStore.set("token", token, {
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
		path: '/',
		expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
	});

	return {
		success: true,
		message: "Okay",
	}
}


export const logout = async () => {
	try {
		const cookieStore = await cookies();
		cookieStore.delete("token");
		redirect("/signin")
	} catch (error) {
		redirect("/signin")
	}
}