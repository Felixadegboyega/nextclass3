"use server"

export const addProduct = async (form: { title: string, price: string }) => {
	const post = {
		title: form.title,
		price: form.price
	}

	return post
}


// export const addProduct = async (form: FormData) => {
// 	const title = form.get("title") as string
// 	const price = form.get("price") as string

// 	console.log({
// 		title,
// 		price: parseFloat(price),
// 	})
// }