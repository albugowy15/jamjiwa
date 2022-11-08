import { User } from "@prisma/client";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { prisma } from "db/prisma";

export default function Home({ users }: { users: User[] }) {
	return (
		<div>
			{users?.map((user) => (
				<p key={user.id}>{user.fullName}</p>
			))}
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	// const res = await fetch(`${process.env.BASE_URL}/api/hello`);
	// const users = await res.json();
	// console.log(users);

	const users = await prisma.user.findMany();

	return {
		props: {
			users: JSON.parse(JSON.stringify(users)),
		},
	};
};
