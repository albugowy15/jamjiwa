import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Modal3Popup from "../components/modal3-popup";
import PortalPopup from "../components/portal-popup";

const modalElements = [
	{
		name: "Greetings",
		child: [
			{
				title: "Wilujeng enjing",
				translate: "Selamat Pagi",
			},
			{
				title: "Wilujeng sumping",
				translate: "Selamat Sumping",
			},
			{
				title: "Wilujeng dalu",
				translate: "Selamat Malam",
			},
			{
				title: "Wilujeng sedoyo",
				translate: "Halo Semuanya",
			},
		],
	},
	{
		name: "Daily Conversation",
		child: [
			{
				title: "Wilujeng enjing",
				translate: "Selamat Pagi",
			},
			{
				title: "Wilujeng sumping",
				translate: "Selamat Sumping",
			},
			{
				title: "Wilujeng dalu",
				translate: "Selamat Malam",
			},
			{
				title: "Wilujeng sedoyo",
				translate: "Halo Semuanya",
			},
		],
	},
	{
		name: "Asking for Helps",
		child: [
			{
				title: "Wilujeng enjing",
				translate: "Selamat Pagi",
			},
			{
				title: "Wilujeng sumping",
				translate: "Selamat Sumping",
			},
			{
				title: "Wilujeng dalu",
				translate: "Selamat Malam",
			},
			{
				title: "Wilujeng sedoyo",
				translate: "Halo Semuanya",
			},
		],
	},
	{
		name: "Thank You",
		child: [
			{
				title: "Wilujeng enjing",
				translate: "Selamat Pagi",
			},
			{
				title: "Wilujeng sumping",
				translate: "Selamat Sumping",
			},
			{
				title: "Wilujeng dalu",
				translate: "Selamat Malam",
			},
			{
				title: "Wilujeng sedoyo",
				translate: "Halo Semuanya",
			},
		],
	},
	{
		name: "Unique Phrase or Vocabulary",
		child: [
			{
				title: "Wilujeng enjing",
				translate: "Selamat Pagi",
			},
			{
				title: "Wilujeng sumping",
				translate: "Selamat Sumping",
			},
			{
				title: "Wilujeng dalu",
				translate: "Selamat Malam",
			},
			{
				title: "Wilujeng sedoyo",
				translate: "Halo Semuanya",
			},
		],
	},
];

const TranslateModal = ({ openTransModal, setOpenTransModal }: { openTransModal: boolean; setOpenTransModal: (input: boolean) => void }) => {
	return (
		<>
			{openTransModal && (
				<div className="bg-gray-1000 bg-opacity-60 z-50 fixed top-0 p-10 text-white-200 flex flex-col items-center justify-center overflow-hidden w-full h-full">
					<div className="bg-gray-900 z-30 flex flex-col w-[50%] p-10 font-bold text-lg rounded-xl">
						<div className="flex justify-end">
							<div className="cursor-pointer" onClick={() => setOpenTransModal(false)}>
								x
							</div>
						</div>
						<div className="py-4" />
						<textarea name="sentenceInput" id="sentenceInput" rows={4} className="form-textarea rounded-lg bg-gray-500"></textarea>
						<div className="flex justify-between items-center mt-2">
							<div className="text-sm font-normal">Audio</div>
							<div className="text-sm">
								<select className="form-select py-0 text-sm bg-gray-900 border-none" name="bahasa" id="inputBahasa">
									<option disabled>Pilih Bahasa</option>
									<option value="BAHASA">Bahasa Indonesia</option>
									<option value="MADURA">Jawa Timur - Madura</option>
									<option value="SURABAYA">Jawa Timur - Surabaya</option>
									<option value="BANYUWANGI">Jawa Timur - Banyuwangi</option>
									<option value="MADIUN">Jawa Timur - Madiun</option>
									<option value="MALANG">Jawa Timur - Malang</option>
								</select>
							</div>
						</div>
						<button className="bg-gray-400 text-base rounded-md py-2 my-4">Translate</button>
						<textarea name="sentenceInput" id="sentenceInput" disabled rows={4} className="form-textarea rounded-lg bg-gray-500"></textarea>
						<div className="flex justify-between items-center mt-2 mb-4">
							<div className="text-sm font-normal">Audio</div>
							<div className="text-sm">
								<select className="form-select py-0 text-sm bg-gray-900 border-none" name="bahasa" id="inputBahasa">
									<option disabled>Pilih Bahasa</option>
									<option value="BAHASA">Bahasa Indonesia</option>
									<option value="MADURA">Jawa Timur - Madura</option>
									<option value="SURABAYA">Jawa Timur - Surabaya</option>
									<option value="BANYUWANGI">Jawa Timur - Banyuwangi</option>
									<option value="MADIUN">Jawa Timur - Madiun</option>
									<option value="MALANG">Jawa Timur - Malang</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

const Modal2Popup = ({ openModal, setOpenModal }: { openModal: boolean; setOpenModal: (arg0: boolean) => void }) => {
	const [openDropDown, setOpenDropDown] = useState<number | null>();
	const [openTransModal, setOpenTransModal] = useState<boolean>(false);
	const handleDropDown = (dId: number) => {
		if (openDropDown === dId) {
			setOpenDropDown(null);
		} else {
			setOpenDropDown(dId);
		}
	};

	return (
		<>
			{openModal && (
				<div className="bg-gray-1000 bg-opacity-60 z-10 fixed top-0 p-10 text-white-200 flex flex-col items-center justify-center overflow-hidden gap-6 w-full h-full">
					<div className="relative bg-gray-900 z-20 flex flex-col gap-6 w-[70%] p-10 font-bold text-lg">
						{modalElements.map((item, index) => (
							<div className=" bg-gray-700 rounded-lg overflow-hidden cursor-pointer" onClick={() => handleDropDown(index)}>
								<div className="px-5 py-2">
									<div className="flex justify-between items-center">
										<p>{item.name}</p>
										<div>^</div>
									</div>
								</div>
								{openDropDown === index && (
									<div className="px-5 py-2 bg-gray-500 text-base space-y-3">
										{item.child.map((item, index) => (
											<div key={index} className="flex justify-between">
												<div className="flex w-[40%] justify-between">
													<p>{item.title}</p>
													<p className="italic">{item.translate}</p>
												</div>
												<div onClick={() => setOpenTransModal(true)}>ty</div>
											</div>
										))}
									</div>
								)}
							</div>
						))}
					</div>
					<div className="px-5 py-2 bg-gray-600 cursor-pointer w-fit rounded-2xl text-sm" onClick={() => setOpenModal(false)}>
						Close
					</div>
					<TranslateModal openTransModal={openTransModal} setOpenTransModal={setOpenTransModal} />
				</div>
			)}
		</>
	);
};

export default Modal2Popup;
