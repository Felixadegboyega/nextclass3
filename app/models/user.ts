import { model, models, Schema } from "mongoose";

interface IUser {
	email: string,
	password: string,
	firstname: string,
	lastname: string
}

const userSchema = new Schema<IUser>({
	email: {
		required: true,
		unique: true,
		type: String,
	},
	password: {
		required: true,
		type: String,
		select: false
	},
	firstname: String,
	lastname: String
})

const UserModel = models.User<IUser> || model("User", userSchema);

export default UserModel