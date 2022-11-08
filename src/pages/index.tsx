import { User } from "@prisma/client";
import { GetServerSideProps, GetServerSidePropsResult } from "next";

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
	const res = await fetch("http://localhost:3000/api/hello");
	const users = await res.json();
	console.log(users);

	return {
		props: {
			users,
		},
	};
};
