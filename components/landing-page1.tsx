import type { NextPage } from "next";
import { useCallback } from "react";

const LandingPage1: NextPage = () => {
  const onScrollContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='textJumbotronContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
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
    <div className="relative bg-gray-700 w-full overflow-hidden flex flex-col items-center justify-start gap-[64px] text-left text-2xl text-white font-inter lg:w-[1200px] lg:flex-col lg:pl-[0px] lg:pr-[0px] lg:box-border md:w-[768px] sm:w-[428px]">
      <div className="bg-gray-700 flex flex-row p-[53px_120px] box-border items-center justify-start gap-[329px] text-gray-200 lg:flex-row lg:pl-[60px] lg:pr-[60px] lg:pb-[31px] lg:box-border md:flex-row md:pl-[40px] md:pr-[40px] md:box-border sm:p-[30px_20px] sm:box-border">
        <div className="relative w-[305px] h-[6px] shrink-0 lg:w-[104px] lg:h-[63px] md:w-[11px]">
          <div className="absolute top-[-74px] left-[-120px] bg-gray-100 w-[86px] h-[63px]" />
          <b className="absolute top-[-61.5px] left-[43px] leading-[120%] inline-block">
            JamJiwa
          </b>
        </div>
        <div className="flex flex-row items-start justify-start gap-[56px] text-base text-white lg:w-[1200px] lg:pl-[250px] lg:box-border md:w-[768px] md:flex-col md:pl-[400px] md:box-border sm:w-[428px] sm:pl-[1800px] sm:pr-[900px] sm:box-border">
          <a
            className="[text-decoration:none] rounded-[12px] bg-gray-1200 w-[186px] shrink-0 flex flex-row p-[12px_32px] box-border items-center justify-center text-[inherit]"
            href="/"
          >
            <div className="relative tracking-[-0.05em] leading-[24px] font-semibold inline-block">
              Home
            </div>
          </a>
          <a
            className="[text-decoration:none] rounded-[12px] bg-gray-1200 w-[186px] shrink-0 flex flex-row p-[12px_32px] box-border items-center justify-center text-[inherit]"
            href="/Explore-Page"
          >
            <div className="relative tracking-[-0.05em] leading-[24px] font-semibold inline-block">
              Explore Jatim
            </div>
          </a>
          <a
            className="[text-decoration:none] rounded-[12px] [background:linear-gradient(180deg,_#5561ff,_#3643fc,_#3643fc)] w-[186px] shrink-0 flex flex-row p-[12px_32px] box-border items-center justify-center text-[inherit]"
            href="/login"
          >
            <div className="relative tracking-[-0.05em] leading-[24px] font-semibold inline-block">
              Login
            </div>
          </a>
        </div>
      </div>
      <div className="w-[1453px] flex flex-col p-[0px_120px_21px] box-border items-center justify-start gap-[64px] text-center text-3xl lg:pl-[60px] lg:pr-[60px] lg:box-border md:flex-col md:pl-[15px] md:pr-[30px] md:box-border">
        <div className="flex flex-row p-[20px_20px_10px_60px] box-border items-center justify-start gap-[0px] lg:flex-row lg:pl-[40px] lg:pt-[20px] lg:pr-[10px] lg:box-border md:flex md:flex-col md:pl-[0px] md:pt-[0px] md:pr-[0px] md:box-border sm:flex-col sm:pl-[0px] sm:box-border">
          <b className="relative leading-[120%] inline-block">The</b>
          <b className="relative text-5xl leading-[120%] inline-block text-gray-300">
            BEST
          </b>
          <b className="relative leading-[120%] inline-block">
            Jawa Timur dictionary to help you!
          </b>
        </div>
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
      <div
        className="flex flex-col items-center justify-start gap-[0px] cursor-pointer text-center text-base text-gray-1300 lg:pl-[0px] lg:box-border md:pl-[0px] md:box-border sm:pl-[00px] sm:box-border"
        onClick={onScrollContainerClick}
      >
        <div className="relative leading-[150%] font-medium flex items-center justify-center w-[186px]">
          Scroll to have fun!
        </div>
        <img
          className="relative w-[48px] h-[48px] shrink-0"
          alt=""
          src="../chevroncompactdoubledown1.svg"
        />
      </div>
      <div
        className="w-[1450px] flex flex-row p-[0px_172px_0px_300px] box-border items-center justify-start gap-[10px] text-center text-3xl lg:w-[1200px] lg:pl-[160px] lg:pr-[86px] lg:box-border md:w-[768px] md:flex-col md:pl-[20px] md:pr-[20px] md:box-border sm:flex-col sm:pl-[50px] sm:pr-[50px] sm:box-border"
        data-scroll-to="textJumbotronContainer"
      >
        <b className="relative leading-[120%] inline-block">What’s Inside of</b>
        <b className="relative text-5xl leading-[120%] inline-block text-gray-300">
          JamJiwa
        </b>
        <b className="relative leading-[120%] inline-block">?</b>
      </div>
      <div className="w-[1455px] overflow-x-auto flex flex-col p-[0px_120px] box-border items-start justify-start text-4xl lg:pl-[60px] lg:pr-[60px] lg:box-border md:pl-[0px] md:pr-[30px] md:box-border">
        <div className="w-[1228px] flex flex-col items-start justify-start">
          <div className="w-[1266px] flex flex-row p-[0px_20px_0px_0px] box-border items-start justify-end gap-[52px] lg:w-[1266px] lg:flex-row lg:pl-[30px] lg:pr-[0px] lg:pb-[50px] lg:box-border md:w-[768px] md:flex-col md:pl-[450px] md:pt-[0px] md:box-border sm:w-[428px] sm:pl-[450px] sm:pb-[50px] sm:box-border">
            <img
              className="relative rounded-[16px] w-[507px] h-[341px] shrink-0 object-cover"
              alt=""
              src="../rectangle-184@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[0px]">
              <b className="relative leading-[120%] inline-block">
                Find Common Words!
              </b>
              <div className="relative text-xl leading-[120%] inline-block w-[568px] h-[221px] shrink-0">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  <span className="font-medium">{`When you travel to a place in East Java, you must have experienced confusion about the general vocabulary that is there. `}</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  <span className="font-medium">&nbsp;</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  <span className="font-medium">{`Moreover, a different accent from what you have will be more difficult to understand. `}</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  <span className="font-medium">&nbsp;</span>
                </p>
                <p className="m-[0]">
                  <b className="font-inter">JamJiwa</b>
                  <span className="font-medium">
                    {" "}
                    will be the answer to your problem!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="[text-decoration:none] rounded-[12px] [background:linear-gradient(180deg,_#5561ff,_#3643fc,_#3643fc)] w-[186px] flex flex-row p-[12px_32px] box-border items-center justify-center text-base text-[inherit]"
        href="/Explore-Page"
      >
        <div className="relative tracking-[-0.05em] leading-[24px] font-semibold inline-block">
          Explore Now!
        </div>
      </a>
      <div className="w-[1468px] h-[120px] shrink-0 flex flex-col items-start justify-start text-gray-200 lg:w-[1200px] lg:h-[150px] lg:flex-row lg:pl-[0px] lg:pr-[0px] lg:pb-[0px] lg:box-border md:w-[768px] md:h-[180px] md:flex-row md:pr-[0px] md:box-border sm:w-[428px] sm:h-[120px] sm:flex-col">
        <div className="rounded-[24px_24px_0px_0px] bg-gray-600 [border:1px_solid_rgba(255,_255,_255,_0.1)] box-border w-[1442px] flex flex-row p-[40px_98px_40px_120px] items-center justify-start gap-[197px]">
          <div className="relative w-[217px] h-[40px] shrink-0">
            <b className="absolute top-[1px] left-[75px] leading-[120%] inline-block">
              JamJiwa
            </b>
            <div className="absolute top-[-15px] left-[-11px] bg-gray-100 w-[86px] h-[63px]" />
          </div>
          <div className="flex flex-col items-start justify-start text-base text-gray-1300">
            <div className="relative leading-[150%] font-medium inline-block">
              © 2022 JamJiwa. All rights reserved.
            </div>
          </div>
          <div className="flex-1 flex flex-col p-[4px_0px] box-border items-end justify-start">
            <div className="flex flex-row items-start justify-start gap-[24px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0 cursor-pointer"
                alt=""
                src="../faceboookcircle.svg"
                onClick={onFaceboookCircleIconClick}
              />
              <img
                className="relative w-[24px] h-[24px] shrink-0 cursor-pointer"
                alt=""
                src="../twitter1.svg"
                onClick={onTwitterIconClick}
              />
              <img
                className="relative w-[24px] h-[24px] shrink-0 cursor-pointer"
                alt=""
                src="../youtube.svg"
                onClick={onYoutubeIconClick}
              />
              <img
                className="relative w-[24px] h-[24px] shrink-0 cursor-pointer"
                alt=""
                src="../instagram.svg"
                onClick={onInstagramIconClick}
              />
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden cursor-pointer"
                alt=""
                src="../icons--bxllinkedin1.svg"
                onClick={onIconsBxlLinkedinClick}
              />
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden cursor-pointer"
                alt=""
                src="../frame-91.svg"
                onClick={onFrameIconClick}
              />
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden cursor-pointer"
                alt=""
                src="../frame-10.svg"
                onClick={onFrameIcon1Click}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage1;
