// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@services/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { from, to, sentence } = req.query;

	const idKalimat = await prisma.bahasa.findFirst({
		select: {
			id: true,
		},
		where: {
			daerah: {
				// @ts-ignore
				nama: {
					equals: from,
					mode: "insensitive",
				},
			},
			kalimat: {
				// @ts-ignore
				equals: sentence,
				mode: "insensitive",
			},
		},
	});
	if (!idKalimat) {
		res.status(404).json({ status: "error", result: "Kalimat tidak ditemukan" });
		return;
	}
	const idTranslate = await prisma.daerahToDaerah.findFirst({
		select: {
			idBahasa2: true,
		},
		where: {
			// @ts-ignore
			idBahasa1: idKalimat,
		},
	});
	const translated = await prisma.bahasa.findFirst({
		select: {
			kalimat: true,
		},
		where: {
			// @ts-ignore
			id: idTranslate,
			daerah: {
				// @ts-ignore
				nama: {
					equals: to,
					mode: "insensitive",
				},
			},
		},
	});
	if (!translated) {
		res.status(404).json({ status: "error", result: "Kalimat pada bahasa tujuan tidak ditemukan" });
		return;
	}
	res.status(200).json({
		status: "success",
		result: translated,
	});
}
