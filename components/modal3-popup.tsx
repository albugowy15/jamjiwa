import type { NextPage } from "next";

type Modal3PopupType = {
  onClose?: () => void;
};

const Modal3Popup: NextPage<Modal3PopupType> = ({ onClose }) => {
  return (
    <div className="relative rounded-[24px] bg-gray-700 w-[658px] h-[689px] flex flex-col p-[40px] box-border items-center justify-start gap-[32px] max-w-full max-h-full overflow-auto text-left text-base text-white-200 font-inter sm:p-[20px] sm:box-border">
      <div className="self-stretch h-[24px] shrink-0 flex flex-col items-end justify-start">
        <img
          className="relative w-[24px] h-[24px] shrink-0 cursor-pointer"
          alt=""
          src="../x.svg"
          onClick={onClose}
        />
      </div>
      <div className="self-stretch relative rounded-[12px] [border:2px_solid_#fff] box-border h-[200px] shrink-0 overflow-hidden">
        <img
          className="absolute h-[12%] w-[4.15%] top-[78.5%] right-[91.52%] bottom-[9.5%] left-[4.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../-icon-speaker.svg"
        />
        <div className="absolute top-[20px] left-[25px] leading-[24px] font-semibold inline-block">
          <span>{`Sugeng Enjing `}</span>
          <span className="text-gray-1300">|</span>
        </div>
        <div className="absolute top-[157px] left-[404px] text-xs leading-[24px] font-medium text-gray-1400 inline-block">
          Jawa Timur - Madiun
        </div>
        <img
          className="absolute h-[5.89%] w-[3.46%] top-[81.5%] right-[4.33%] bottom-[12.61%] left-[92.21%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../-icon-keyboard-arrow-down.svg"
        />
      </div>
      <div className="self-stretch rounded-[12px] [background:linear-gradient(180deg,_#5561ff,_#3643fc,_#3643fc)] flex flex-row p-[12px_32px] box-border items-center justify-center">
        <div className="relative leading-[24px] font-semibold inline-block">
          Translate!
        </div>
      </div>
      <div className="self-stretch relative rounded-[12px] [border:2px_solid_#fff] box-border h-[200px] shrink-0 overflow-hidden">
        <img
          className="absolute h-[12%] w-[4.15%] top-[78.5%] right-[91.52%] bottom-[9.5%] left-[4.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../-icon-speaker.svg"
        />
        <div className="absolute top-[20px] left-[25px] leading-[24px] font-semibold inline-block">
          <span>{`Selamat Pagi `}</span>
          <span className="text-gray-1300">...</span>
        </div>
        <div className="absolute top-[157px] left-[424px] text-xs leading-[24px] font-medium text-gray-1400 text-right inline-block">
          Bahasa Indonesia
        </div>
        <img
          className="absolute h-[5.89%] w-[3.46%] top-[81.5%] right-[4.33%] bottom-[12.61%] left-[92.21%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../-icon-keyboard-arrow-down.svg"
        />
      </div>
    </div>
  );
};

export default Modal3Popup;
