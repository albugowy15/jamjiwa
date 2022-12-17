import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Modal3Popup from "../components/modal3-popup";
import PortalPopup from "../components/portal-popup";

type Modal2PopupType = {
	onClose?: () => void;
};

const Modal2Popup: NextPage<Modal2PopupType> = ({ onClose }) => {
	const [isModal3PopupOpen, setModal3PopupOpen] = useState(false);

	const openModal3Popup = useCallback(() => {
		setModal3PopupOpen(true);
	}, []);

	const closeModal3Popup = useCallback(() => {
		setModal3PopupOpen(false);
	}, []);

	return (
		<>
			<div className="bg-gray-1000 bg-opacity-60 z-50 fixed top-0 p-10 text-white-200 flex flex-col items-center justify-center overflow-hidden gap-6 w-full h-full">
				<div className="bg-gray-900 z-100 flex flex-col gap-6 w-[70%] p-10 font-bold text-lg">
					<div className="flex justify-between items-center bg-gray-700 rounded-lg px-5 py-2">
						<p>Greeting</p>
						<div>^</div>
					</div>
				</div>
			</div>
			{isModal3PopupOpen && (
				<PortalPopup overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered" onOutsideClick={closeModal3Popup}>
					<Modal3Popup onClose={closeModal3Popup} />
				</PortalPopup>
			)}
		</>
	);
};

export default Modal2Popup;
