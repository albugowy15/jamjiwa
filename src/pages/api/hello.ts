// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "db/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse<User[] | {}>) {
	const users = await prisma.user.findMany();
	if (users.length !== 0) {
		res.status(200).json(users);
	}
	res.status(400).json({ message: "No users found" });
}
