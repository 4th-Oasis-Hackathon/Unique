declare global {
	namespace App {
		interface Locals {
			user: {
				id: int;
				name: string;
				email: string;
				role: int;
				region: string;
			};
		}
	}
}

export {};
