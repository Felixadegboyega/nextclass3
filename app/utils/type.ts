// export type User = {
export interface User {
	id: number
	name: string
	department: string
	age: number
	address?: Address
}


// {
// 	name: string,
// 	department: string,
// 	age: string,
// 	address: {
// 		number: number
// 		street: string
// 		city: string
// 		country: string
// 	}
// }

export type Address = {
	number: number
	street: string
	city: string
	country: string
}

// export type UserProfile = User & {
// 	phone: string
// 	email: string
// 	password: string
// }

export interface UserProfile extends User {
	phone: string
	email: string | undefined
	password: string
}

// Omit, Pick

// export type BasicUser = Pick<UserProfile, 'name' | 'phone'>
export type BasicUser = Omit<UserProfile, 'password'>



// {
// name: string
// department: string
// age: number,
// address: Address
// phone: string
// email: string
// password: string
// }


export interface Product {
	id: number
	title: string
	price: number
	description: string
}