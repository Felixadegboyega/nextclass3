import UserModel from "@/app/models/user";
import dbConnect from "@/app/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, ctx: RouteContext<'/api/users/[_id]'>) => {
	try {
		const { _id } = await ctx.params;

		await dbConnect();
		const user = await UserModel.findById(_id)

		if (!user) {
			return NextResponse.json({
				success: false,
				message: "This user no dey our db"
			}, { status: 404 })
		}

		return NextResponse.json({
			success: true,
			user
		})
	} catch (error) {
		return NextResponse.json({
			success: false,
			message: "We couldn't get this user details"
		}, { status: 500 })
	}
}