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
      <div className="relative rounded-[24px] bg-gray-900 flex flex-col p-[69px_56px] box-border items-start justify-start gap-[32px] max-w-full max-h-full overflow-auto text-left text-base text-white-200 font-inter sm:p-[33px_28px] sm:box-border">
        <div className="rounded-[8px] bg-gray-700 w-[859px] overflow-hidden flex flex-col items-start justify-start gap-[0px]">
          <div className="self-stretch rounded-[8px] bg-gray-500 overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start gap-[12px] text-lg">
            <div className="relative leading-[24px] font-semibold inline-block">
              Greetings
            </div>
            <div className="flex-1 flex flex-row items-start justify-end">
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../expand-more.svg"
              />
            </div>
          </div>
          <div
            className="self-stretch relative rounded-[8px] h-[56px] shrink-0 overflow-hidden cursor-pointer"
            onClick={openModal3Popup}
          >
            <div className="absolute top-[28.57%] left-[20px] leading-[24px] font-semibold flex items-center w-[200px]">
              Wilujeng Enjing
            </div>
            <i className="absolute top-[28.57%] left-[280px] leading-[24px] flex font-semibold items-center w-[200px]">
              Selamat Pagi
            </i>
            <img
              className="absolute h-[33.33%] w-[2.79%] top-[33.93%] right-[3.26%] bottom-[32.74%] left-[93.95%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../-icon-sound-wave.svg"
            />
          </div>
          <div className="self-stretch relative rounded-[8px] h-[56px] shrink-0 overflow-hidden">
            <div className="absolute top-[28.57%] left-[20px] leading-[24px] font-semibold flex items-center w-[200px]">
              Wilujeng Sumping
            </div>
            <i className="absolute top-[28.57%] left-[280px] leading-[24px] flex font-semibold items-center w-[200px]">
              Selamat Sumping
            </i>
            <img
              className="absolute h-[33.33%] w-[2.79%] top-[33.93%] right-[3.26%] bottom-[32.74%] left-[93.95%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../-icon-sound-wave.svg"
            />
          </div>
          <div className="self-stretch relative rounded-[8px] h-[56px] shrink-0 overflow-hidden">
            <div className="absolute top-[28.57%] left-[20px] leading-[24px] font-semibold flex items-center w-[200px]">
              Wilujeng Siang
            </div>
            <i className="absolute top-[28.57%] left-[280px] leading-[24px] flex font-semibold items-center w-[200px]">
              Selamat Siang
            </i>
            <img
              className="absolute h-[33.33%] w-[2.79%] top-[33.93%] right-[3.26%] bottom-[32.74%] left-[93.95%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../-icon-sound-wave.svg"
            />
          </div>
          <div className="self-stretch relative rounded-[8px] h-[56px] shrink-0 overflow-hidden">
            <div className="absolute top-[28.57%] left-[20px] leading-[24px] font-semibold flex items-center w-[200px]">
              Wilujeng Dalu
            </div>
            <i className="absolute top-[28.57%] left-[280px] leading-[24px] flex font-semibold items-center w-[200px]">
              Selamat Malam
            </i>
            <img
              className="absolute h-[33.33%] w-[2.79%] top-[33.93%] right-[3.26%] bottom-[32.74%] left-[93.95%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../-icon-sound-wave.svg"
            />
          </div>
          <div className="self-stretch relative rounded-[8px] h-[56px] shrink-0 overflow-hidden">
            <div className="absolute top-[28.57%] left-[20px] leading-[24px] font-semibold flex items-center w-[200px]">
              Wilujeng Sedoyo
            </div>
            <i className="absolute top-[28.57%] left-[280px] leading-[24px] flex font-semibold items-center w-[200px]">
              Halo Semuanya
            </i>
            <img
              className="absolute h-[33.33%] w-[2.79%] top-[33.93%] right-[3.26%] bottom-[32.74%] left-[93.95%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../-icon-sound-wave.svg"
            />
          </div>
        </div>
        <div className="rounded-[8px] w-[859px] h-[56px] shrink-0 overflow-hidden flex flex-col items-center justify-start gap-[0px]">
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start gap-[12px] text-lg">
            <div className="relative leading-[24px] font-semibold inline-block">
              Daily Conversation
            </div>
            <div className="flex-1 flex flex-row items-start justify-end">
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../expand-more1.svg"
              />
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 2
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 3
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 4
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 5
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 6
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 7
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 8
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 9
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 10
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 11
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 12
            </div>
          </div>
        </div>
        <div className="rounded-[8px] w-[859px] h-[56px] shrink-0 overflow-hidden flex flex-col items-center justify-start gap-[0px]">
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start gap-[12px] text-lg">
            <div className="relative leading-[24px] font-semibold inline-block">
              Asking for Helps
            </div>
            <div className="flex-1 flex flex-row items-start justify-end">
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../expand-more1.svg"
              />
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 2
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 3
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 4
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 5
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 6
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 7
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 8
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 9
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 10
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 11
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 12
            </div>
          </div>
        </div>
        <div className="rounded-[8px] w-[859px] h-[56px] shrink-0 overflow-hidden flex flex-col items-center justify-start gap-[0px]">
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start gap-[12px] text-lg">
            <div className="relative leading-[24px] font-semibold inline-block">
              Thank You
            </div>
            <div className="flex-1 flex flex-row items-start justify-end">
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../expand-more1.svg"
              />
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 2
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 3
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 4
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 5
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 6
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 7
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 8
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 9
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 10
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 11
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 12
            </div>
          </div>
        </div>
        <div className="rounded-[8px] w-[859px] h-[56px] shrink-0 overflow-hidden flex flex-col items-center justify-start gap-[0px]">
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start gap-[12px] text-lg">
            <div className="relative leading-[24px] font-semibold inline-block">
              Unique Phrase or Vocabulary
            </div>
            <div className="flex-1 flex flex-row items-start justify-end">
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../expand-more1.svg"
              />
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 2
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 3
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 4
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 5
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 6
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 7
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 8
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 9
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 10
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 11
            </div>
          </div>
          <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px_20px] box-border items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block">
              Label 12
            </div>
          </div>
        </div>
      </div>
      {isModal3PopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModal3Popup}
        >
          <Modal3Popup onClose={closeModal3Popup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Modal2Popup;
