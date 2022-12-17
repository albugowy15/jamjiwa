import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import image1 from "../public/rectangle-155@2x.png";
import image2 from "../public/rectangle-165@2x.png";
import image3 from "../public/rectangle-175@2x.png";
import image4 from "../public/rectangle-18@2x.png";
import scrollIcon from "../public/chevroncompactdoubledown5.svg";
import Link from "next/link";
const LandingPage: NextPage = () => {
	const onScrollContainerClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='textJumbotronContainer']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	return (
		<div className="bg-gray-900 w-full overflow-hidden flex flex-col gap-16 text-2xl text-white-200 font-inter">
			<div className="flex flex-col items-center gap-16 text-center text-3xl">
				<div className="flex flex-row box-border items-center">
					<b className="inline-block">The</b>
					<b className="text-5xl inline-block text-gray-300">BEST</b>
					<b className="inline-block">Jawa Timur dictionary to help you!</b>
				</div>
				<div className="flex flex-row gap-11">
					<Image className="rounded-2xl object-cover" width={348} height={234} alt="" src={image1} />
					<Image className="rounded-2xl object-cover" width={348} height={234} alt="" src={image2} />
					<Image className="rounded-2xl object-cover" width={348} height={234} alt="" src={image3} />
				</div>
			</div>
			<div className="flex flex-col items-center cursor-pointer text-base" onClick={onScrollContainerClick}>
				<div className="font-medium">Scroll to have fun!</div>
				<Image width={48} height={48} alt="" src={scrollIcon} />
			</div>
			<div className="flex items-center justify-center gap-2 text-3xl" data-scroll-to="textJumbotronContainer">
				<b className="inline-block">What’s Inside of</b>
				<b className="text-5xl inline-block text-gray-300">JamJiwa</b>
				<b className="inline-block">?</b>
			</div>
			<div className="flex flex-col text-2xl">
				<div className="flex flex-col">
					<div className="flex flex-row justify-center gap-10">
						<Image width={507} height={341} className="rounded-2xl object-cover" alt="" src={image4} />
						<div className="w-[50%]">
							<p className="font-bold">Find Common Words!</p>
							<div className="text-xl space-y-4 mt-3">
								<p>When you travel to a place in East Java, you must have experienced confusion about the general vocabulary that is there.</p>
								<p>Moreover, a different accent from what you have will be more difficult to understand.</p>
								<p>JamJiwa will be the answer to your problem!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button className="rounded-xl [background:linear-gradient(180deg,_#5561ff,_#3643fc,_#3643fc)] px-5 w-fit py-3 mx-auto text-base font-bold">
				<Link href="/explore">Explore Now</Link>
			</button>
		</div>
	);
};

export default LandingPage;
