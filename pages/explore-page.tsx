import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const ExplorePage: NextPage = () => {
  const router = useRouter();

  const onMalangContainerClick = useCallback(() => {
    router.push("/hotels-page2");
  }, [router]);

  const onMadiunImageClick = useCallback(() => {
    router.push("/hotels-page4");
  }, [router]);

  const onSurabayaContainerClick = useCallback(() => {
    router.push("/hotels-page3");
  }, [router]);

  const onBanyuwangiContainerClick = useCallback(() => {
    router.push("/hotels-page1");
  }, [router]);

  const onMaduraContainerClick = useCallback(() => {
    router.push("/hotels-page");
  }, [router]);

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
    <div className="relative bg-gray-900 w-full overflow-hidden flex flex-col items-center justify-start gap-[88px] text-left text-2xl text-gray-200 font-inter sm:pl-[0px] sm:box-border">
      <div className="bg-gray-900 flex flex-row p-[31px_112px] box-border items-center justify-start gap-[529px] sm:pl-[89px] sm:pr-[0px] sm:box-border">
        <div className="relative w-[217px] h-[40px] shrink-0">
          <b className="absolute top-[1px] left-[75px] leading-[120%] inline-block">
            JamJiwa
          </b>
          <div className="absolute top-[-15px] left-[-11px] bg-gray-100 w-[86px] h-[63px]" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[56px]">
          <img
            className="relative w-[24px] h-[24px] shrink-0 overflow-hidden hidden md:flex"
            alt=""
            src="../notification8.svg"
          />
          <Button sx={{ width: 186 }} variant="outlined" color="primary">
            Home
          </Button>
          <Button sx={{ width: 186 }} variant="outlined" color="primary">
            Explore Jatim
          </Button>
        </div>
      </div>
      <div className="hidden flex-col items-start justify-start gap-[10px]">
        <img
          className="relative w-[1194.63px] h-[932px] shrink-0 object-cover"
          alt=""
          src="../group-2@2x.png"
        />
        <img
          className="relative w-[1194.25px] h-[932px] shrink-0 object-cover hidden"
          alt=""
          src="../image-2@2x.png"
        />
      </div>
      <div className="flex flex-col items-center justify-start gap-[111px] text-center text-3xl text-white-200 sm:w-[428px] sm:flex-col sm:pl-[720px] sm:box-border">
        <div className="w-[1233.86px] h-[173.34px] shrink-0 flex flex-row p-[0px_0px_0px_150px] box-border items-center justify-start gap-[0px]">
          <b className="relative leading-[120%] inline-block">Where</b>
          <b className="relative text-5xl leading-[120%] inline-block text-gray-300">
            LOCATION
          </b>
          <b className="relative leading-[120%] inline-block">Are You Now?</b>
        </div>
        <div className="relative w-[1418.25px] h-[770.25px] shrink-0 text-left text-xl">
          <div
            className="absolute top-[238.55px] left-[411.83px] w-[515.08px] h-[395.21px] cursor-pointer"
            onClick={onMalangContainerClick}
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hover:animate-[1s_ease_0s_infinite_normal_none_wobble-hor-bottom] hover:opacity-[1]"
              alt=""
              src="../malang1@2x.png"
            />
          </div>
          <div className="absolute top-[150.73px] left-[0px] w-[492.53px] h-[456.93px]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hover:animate-[1s_ease_0s_infinite_normal_none_bounce-top] hover:opacity-[1]"
              alt=""
              src="../madiun@2x.png"
              onClick={onMadiunImageClick}
            />
          </div>
          <div
            className="absolute top-[0px] left-[268.22px] w-[522.2px] h-[327.56px] cursor-pointer"
            onClick={onSurabayaContainerClick}
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hover:animate-[1s_ease_0s_infinite_normal_none_bounce-top] hover:opacity-[1]"
              alt=""
              src="../surabaya1@2x.png"
            />
          </div>
          <div
            className="absolute top-[280.09px] left-[738.2px] w-[680.05px] h-[490.16px] cursor-pointer"
            onClick={onBanyuwangiContainerClick}
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hover:animate-[1s_ease_0s_infinite_normal_none_bounce-top] hover:opacity-[1]"
              alt=""
              src="../banyuwangi1@2x.png"
            />
          </div>
          <div
            className="absolute top-[7.12px] left-[694.29px] w-[723.96px] h-[231.43px] cursor-pointer"
            onClick={onMaduraContainerClick}
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hover:animate-[1s_ease_0s_infinite_normal_none_bounce-top] hover:opacity-[1]"
              alt=""
              src="../madura1@2x.png"
            />
          </div>
          <div className="absolute top-[128.18px] left-[1000.49px] rounded-[24px] bg-gray-700 w-[356.05px] h-[115.35px] overflow-hidden flex flex-col items-center justify-end">
            <div className="self-stretch rounded-[24px] bg-gray-500 flex flex-col p-[24px] box-border items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <b className="self-stretch relative leading-[120%] inline-block">
                  Tips! #1
                </b>
                <div className="self-stretch relative text-base leading-[150%] font-medium text-gray-1500 inline-block">
                  Hover on your desired location!
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[521.01px] left-[75.96px] rounded-[24px] bg-gray-700 w-[356.05px] h-[115.35px] overflow-hidden flex flex-col items-center justify-end">
            <div className="self-stretch rounded-[24px] bg-gray-500 flex flex-col p-[24px] box-border items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <b className="self-stretch relative leading-[120%] inline-block">
                  Tips! #2
                </b>
                <div className="self-stretch relative text-base leading-[150%] font-medium text-gray-1500 inline-block">
                  Is it what you want? Click it!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start sm:w-[428px]">
        <div className="rounded-[24px_24px_0px_0px] bg-gray-800 [border:1px_solid_rgba(255,_255,_255,_0.1)] box-border w-[1442px] flex flex-row p-[40px_112px] items-center justify-start gap-[0px]">
          <div className="relative w-[217px] h-[40px] shrink-0">
            <b className="absolute top-[1px] left-[75px] leading-[120%] inline-block">
              JamJiwa
            </b>
            <div className="absolute top-[-15px] left-[-11px] bg-gray-100 w-[86px] h-[63px]" />
          </div>
          <div className="flex flex-col items-start justify-start gap-[8px] text-base text-gray-1500">
            <div className="flex flex-row p-[0px_12px_0px_0px] box-border items-center justify-start gap-[0px]">
              <img
                className="relative w-[48px] h-[48px] shrink-0 hidden"
                alt=""
                src="../icon.svg"
              />
              <img
                className="relative w-[124px] h-[48px] shrink-0 hidden"
                alt=""
                src="../wordmark.svg"
              />
            </div>
            <div className="relative leading-[150%] font-medium inline-block">
              © 2022 JamJiwa. All rights reserved.
            </div>
          </div>
          <div className="flex-1 relative h-[32px]">
            <div className="absolute h-[75%] top-[12.5%] right-[0px] bottom-[12.5%] flex flex-row items-start justify-start gap-[24px]">
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
                src="../youtube5.svg"
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
                src="../frame-105.svg"
                onClick={onFrameIcon1Click}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
