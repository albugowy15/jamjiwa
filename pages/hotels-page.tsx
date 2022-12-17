import type { NextPage } from "next";
import Image from "next/image";
import { useState, useCallback } from "react";
import Modal2Popup from "../components/modal2-popup";
import PortalPopup from "../components/portal-popup";
import image1 from "../public/rectangle-15@2x.png";
import image2 from "../public/rectangle-16@2x.png";
import image3 from "../public/rectangle-17@2x.png";
import madura from "../public/madura1@2x.png";
import scrollIcon from "../public/chevroncompactdoubledown.svg";

const location = ["Ngawi", "Magetan", "Ponorogo", "Bojonegoro", "Nganjuk", "Madiun", "Pacitan"];

const HotelsPage: NextPage = () => {
	const [isModal2PopupOpen, setModal2PopupOpen] = useState(false);

	const openModal2Popup = useCallback(() => {
		setModal2PopupOpen(true);
	}, []);

	const closeModal2Popup = useCallback(() => {
		setModal2PopupOpen(false);
	}, []);

	const onScrollContainerClick = useCallback(() => {
		// Please sync "Madiun" to the project
	}, []);

	return (
		<>
			<div className="bg-gray-900 w-full flex flex-col text-3xl text-white-200 font-inter">
				<div className="mx-auto">
					<div>
						<div className="flex flex-row items-center justify-center">
							<b>The</b>
							<b className="text-5xl text-gray-300">BEST</b>
							<b>Jawa Timur dictionary to help you!</b>
						</div>
					</div>
				</div>
				<div className="flex flex-row justify-center gap-4">
					<Image width={348} height={234} className="rounded-2xl object-cover" alt="" src={image1} />
					<Image width={348} height={234} className="rounded-2xl object-cover" alt="" src={image2} />
					<Image width={348} height={234} className="rounded-2xl object-cover" alt="" src={image3} />
				</div>
				<div className="flex flex-row items-center justify-center gap-6">
					<b>Welcome to</b>
					<b className="text-5xl text-gray-300">Madura</b>
				</div>
				<div className="mx-auto">
					<Image width={700} objectFit="contain" alt="" src={madura} />
				</div>
				<div className="flex gap-4 mx-auto w-[60%] flex-wrap justify-center">
					{location.map((item, index) => (
						<div className="px-5 py-4 font-bold text-base bg-gray-800 rounded-lg" key={index}>
							{item}
						</div>
					))}
				</div>
				<div className="my-6 flex flex-col items-center cursor-pointer text-base text-gray-1500" onClick={onScrollContainerClick}>
					<p>Scroll to have fun!</p>
					<Image width={48} height={48} className="cursor-pointer" alt="" src={scrollIcon} onClick={openModal2Popup} />
				</div>
			</div>
			<Modal2Popup />
			{/* {isModal2PopupOpen && (
				<PortalPopup overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered" onOutsideClick={closeModal2Popup}>
					<Modal2Popup onClose={closeModal2Popup} />
				</PortalPopup>
			)} */}
		</>
	);
};

export default HotelsPage;
