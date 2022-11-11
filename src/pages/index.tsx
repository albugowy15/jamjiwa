import { GetServerSideProps } from "next";
import { prisma } from "db/prisma";
import { Daerah } from "@interfaces/database";

export default function Home({ daerah }: { daerah: Daerah[] }) {
	return (
		<div>
			{daerah?.map((data) => (
				<p key={data.idDaerah}>{data.namaDaerah}</p>
			))}
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const daerah = await prisma.daerah.findMany();

	return {
		props: {
			daerah: JSON.parse(JSON.stringify(daerah)),
		},
	};
};
