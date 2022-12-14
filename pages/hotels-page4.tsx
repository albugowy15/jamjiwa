import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Modal2Popup from "../components/modal2-popup";
import PortalPopup from "../components/portal-popup";

const HotelsPage4: NextPage = () => {
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

  const onFaceboookCircleIconClick = useCallback(() => {
    window.open("https://www.facebook.com/COMPFEST/");
  }, []);

  const onTwitterIconClick = useCallback(() => {
    window.open("https://twitter.com/compfest");
  }, []);

  const onYoutubeIconClick = useCallback(() => {
    window.open("https://www.youtube.com/channel/UC03QmhwvQEWVI608A-RCEpw");
  }, []);

  const onInstagramIconClick = useCallback(() => {
    window.open("https://www.instagram.com/compfest/?hl=en");
  }, []);

  const onIconsBxlLinkedinClick = useCallback(() => {
    window.open("https://www.linkedin.com/company/compfest");
  }, []);

  const onFrameIconClick = useCallback(() => {
    window.open("https://line.me/R/ti/p/%40compfest");
  }, []);

  const onFrameIcon1Click = useCallback(() => {
    window.open("https://medium.com/compfest");
  }, []);

  return (
    <>
      <div className="relative bg-gray-900 w-full overflow-hidden flex flex-col items-start justify-start gap-[0px] text-center text-3xl text-white-200 font-inter">
        <header className="self-stretch bg-white-200 h-[77px] shrink-0 flex flex-row p-[22px_80px] box-border items-center justify-center sticky w-full top-[0] [background:white-100] text-left text-sm text-gray-600 font-roboto lg:pl-[40px] lg:pr-[40px] lg:box-border md:pl-[24px] md:pr-[24px] md:box-border">
          <div className="flex-1 flex flex-row items-center justify-between">
            <div className="relative w-[174px] h-[33px] shrink-0 overflow-hidden">
              <div className="absolute h-[96.97%] w-[99.82%] top-[1.59%] right-[0.18%] bottom-[1.44%] left-[0%]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../webscreen4.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
              <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
                <div className="relative inline-block">Explore</div>
                <div className="relative inline-block">Search</div>
                <button className="cursor-pointer [border:none] p-[0] bg-[transparent] relative text-sm font-roboto text-gray-400 text-left inline-block">
                  Hotels
                </button>
                <button className="cursor-pointer [border:none] p-[0] bg-[transparent] relative text-sm font-roboto text-gray-600 text-left inline-block">
                  Offers
                </button>
              </div>
              <div className="flex flex-row items-center justify-center gap-[12px]">
                <img
                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden hidden md:flex"
                  alt=""
                  src="../notification1.svg"
                />
                <img
                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                  alt=""
                  src="../notification10.svg"
                />
                <img
                  className="rounded-[38px] w-[36px] h-[36px] shrink-0 object-cover"
                  alt=""
                  src="../top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch relative bg-gray-900 h-[193px] shrink-0 lg:p-[21px_40px_21px_41px] lg:box-border md:p-[21px_24px] md:box-border">
            <div className="absolute top-[19px] left-[86px] flex flex-row p-[20px_20px_10px_60px] box-border items-center justify-start gap-[0px] lg:flex-row lg:pl-[40px] lg:pt-[20px] lg:pr-[10px] lg:box-border md:flex md:flex-col md:pl-[0px] md:pt-[0px] md:pr-[0px] md:box-border sm:flex-col sm:pl-[0px] sm:box-border">
              <b className="relative leading-[120%] inline-block">The</b>
              <b className="relative text-5xl leading-[120%] inline-block text-gray-300">
                BEST
              </b>
              <b className="relative leading-[120%] inline-block">
                Jawa Timur dictionary to help you!
              </b>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col p-[50px_80px] box-border items-start justify-start gap-[20px] lg:p-[40px] lg:box-border md:p-[30px_24px] md:box-border">
          <div className="w-[1293px] flex flex-col p-[0px_120px_21px] box-border items-center justify-start lg:pl-[60px] lg:pr-[60px] lg:box-border md:flex-col md:pl-[15px] md:pr-[30px] md:box-border">
            <div className="flex flex-row p-[0px_120px] box-border items-start justify-start gap-[44px] lg:pl-[60px] lg:pr-[60px] lg:box-border md:flex-col md:pl-[0px] md:pr-[0px] md:box-border sm:pl-[0px] sm:box-border">
              <img
                className="relative rounded-[16px] w-[348px] h-[234px] shrink-0 object-cover"
                alt=""
                src="../rectangle-15@2x.png"
              />
              <img
                className="relative rounded-[16px] w-[348px] h-[234px] shrink-0 object-cover"
                alt=""
                src="../rectangle-16@2x.png"
              />
              <img
                className="relative rounded-[16px] w-[348px] h-[234px] shrink-0 object-cover"
                alt=""
                src="../rectangle-17@2x.png"
              />
            </div>
          </div>
          <div className="w-[1213px] flex flex-row p-[0px_538px_0px_318px] box-border items-center justify-start gap-[40px]">
            <b className="relative leading-[120%] inline-block">Welcome to</b>
            <b className="relative text-5xl leading-[120%] inline-block text-gray-300">
              Madiun
            </b>
          </div>
          <div className="relative w-[1293px] h-[610px] shrink-0 text-lg">
            <img
              className="absolute top-[0px] left-[198px] w-[830px] h-[610px] object-cover"
              alt=""
              src="../madiun1@2x.png"
            />
            <div className="absolute top-[338px] left-[1144px] rounded-[16px] bg-gray-1400 w-[149px] h-[88px] overflow-hidden flex flex-col p-[16px] box-border items-start justify-start gap-[0px]">
              <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px] box-border items-center justify-center gap-[12px]">
                <div className="relative leading-[24px] font-semibold inline-block">
                  Madiun
                </div>
                <div className="flex-1 hidden flex-row items-start justify-end">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../expand-more29.svg"
                  />
                </div>
              </div>
              <div className="self-stretch overflow-hidden hidden" />
            </div>
            <div className="absolute top-[484px] left-[1128px] rounded-[16px] bg-gray-1400 w-[149px] h-[88px] overflow-hidden flex flex-col p-[16px] box-border items-start justify-start gap-[0px]">
              <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px] box-border items-center justify-center gap-[12px]">
                <div className="relative leading-[24px] font-semibold inline-block">
                  Pacitan
                </div>
                <div className="flex-1 hidden flex-row items-start justify-end">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../expand-more29.svg"
                  />
                </div>
              </div>
              <div className="self-stretch overflow-hidden hidden" />
            </div>
            <div className="absolute top-[71px] left-[105px] rounded-[16px] bg-gray-1400 w-[149px] h-[88px] overflow-hidden flex flex-col p-[16px] box-border items-start justify-start gap-[0px]">
              <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px] box-border items-center justify-center gap-[12px]">
                <div className="relative leading-[24px] font-semibold inline-block">
                  Ngawi
                </div>
                <div className="flex-1 hidden flex-row items-start justify-end">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../expand-more29.svg"
                  />
                </div>
              </div>
              <div className="self-stretch overflow-hidden hidden" />
            </div>
            <div className="absolute top-[183px] left-[1101px] rounded-[16px] bg-gray-1400 w-[149px] h-[88px] overflow-hidden flex flex-col p-[16px] box-border items-start justify-start gap-[0px]">
              <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px] box-border items-center justify-center gap-[12px]">
                <div className="relative leading-[24px] font-semibold inline-block">
                  Nganjuk
                </div>
                <div className="flex-1 hidden flex-row items-start justify-end">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../expand-more29.svg"
                  />
                </div>
              </div>
              <div className="self-stretch overflow-hidden hidden" />
            </div>
            <div className="absolute top-[37px] left-[1053px] rounded-[16px] bg-gray-1400 w-[149px] h-[88px] overflow-hidden flex flex-col p-[16px] box-border items-start justify-start gap-[0px]">
              <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px] box-border items-center justify-center gap-[12px]">
                <div className="relative leading-[24px] font-semibold inline-block">
                  Bojonegoro
                </div>
                <div className="flex-1 hidden flex-row items-start justify-end">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                  />
                </div>
              </div>
              <div className="self-stretch overflow-hidden hidden" />
            </div>
            <div className="absolute top-[217px] left-[58px] rounded-[16px] bg-gray-1400 w-[149px] h-[88px] overflow-hidden flex flex-col p-[16px] box-border items-start justify-start gap-[0px]">
              <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px] box-border items-center justify-center gap-[12px]">
                <div className="relative leading-[24px] font-semibold inline-block">
                  Magetan
                </div>
                <div className="flex-1 hidden flex-row items-start justify-end">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../expand-more29.svg"
                  />
                </div>
              </div>
              <div className="self-stretch overflow-hidden hidden" />
            </div>
            <div className="absolute top-[363px] left-[0px] rounded-[16px] bg-gray-1400 w-[149px] h-[88px] overflow-hidden flex flex-col p-[16px] box-border items-start justify-start gap-[0px]">
              <div className="self-stretch rounded-[8px] overflow-hidden flex flex-row p-[16px] box-border items-center justify-center gap-[12px]">
                <div className="relative leading-[24px] font-semibold inline-block">
                  Ponorogo
                </div>
                <div className="flex-1 hidden flex-row items-start justify-end">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../expand-more34.svg"
                  />
                </div>
              </div>
              <div className="self-stretch overflow-hidden hidden" />
            </div>
          </div>
        </div>
        <div
          className="w-[1440px] flex flex-col items-center justify-start gap-[0px] cursor-pointer text-base text-gray-1500"
          onClick={onScrollContainerClick}
        >
          <div className="relative leading-[150%] font-medium flex items-center justify-center w-[186px]">
            Scroll to have fun!
          </div>
          <img
            className="relative w-[48px] h-[48px] shrink-0 cursor-pointer"
            alt=""
            src="../chevroncompactdoubledown.svg"
            onClick={openModal2Popup}
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-left text-2xl text-gray-200">
          <div className="w-[1468px] h-[120px] shrink-0 flex flex-col items-start justify-start lg:w-[1200px] lg:h-[150px] lg:flex-row lg:pl-[0px] lg:pr-[0px] lg:pb-[0px] lg:box-border md:w-[768px] md:h-[180px] md:flex-row md:pr-[0px] md:box-border sm:w-[428px] sm:h-[120px] sm:flex-col">
            <div className="rounded-[24px_24px_0px_0px] bg-gray-800 [border:1px_solid_rgba(255,_255,_255,_0.1)] box-border w-[1442px] flex flex-row p-[40px_98px_40px_120px] items-center justify-start gap-[197px]">
              <div className="relative w-[217px] h-[40px] shrink-0">
                <b className="absolute top-[1px] left-[75px] leading-[120%] inline-block">
                  JamJiwa
                </b>
                <div className="absolute top-[-15px] left-[-11px] bg-gray-100 w-[86px] h-[63px]" />
              </div>
              <div className="flex flex-col items-start justify-start text-base text-gray-1500">
                <div className="relative leading-[150%] font-medium inline-block">
                  © 2022 JamJiwa. All rights reserved.
                </div>
              </div>
              <div className="flex-1 flex flex-col p-[4px_0px] box-border items-end justify-start">
                <div className="flex flex-row items-start justify-start gap-[24px]">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 cursor-pointer"
                    alt=""
                    src="../faceboookcircle5.svg"
                    onClick={onFaceboookCircleIconClick}
                  />
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 cursor-pointer"
                    alt=""
                    src="../twitter5.svg"
                    onClick={onTwitterIconClick}
                  />
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 cursor-pointer"
                    alt=""
                    src="../youtube1.svg"
                    onClick={onYoutubeIconClick}
                  />
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 cursor-pointer"
                    alt=""
                    src="../instagram5.svg"
                    onClick={onInstagramIconClick}
                  />
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden cursor-pointer"
                    alt=""
                    src="../icons--bxllinkedin5.svg"
                    onClick={onIconsBxlLinkedinClick}
                  />
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden cursor-pointer"
                    alt=""
                    src="../frame-95.svg"
                    onClick={onFrameIconClick}
                  />
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden cursor-pointer"
                    alt=""
                    src="../frame-101.svg"
                    onClick={onFrameIcon1Click}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModal2PopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModal2Popup}
        >
          <Modal2Popup onClose={closeModal2Popup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelsPage4;
