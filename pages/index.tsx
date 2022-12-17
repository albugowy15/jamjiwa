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

	return (
		<div className="bg-gray-900 w-full flex flex-col items-center gap-7 text-gray-200 font-inter">
			<div className="flex flex-col items-center gap-7 text-center text-3xl">
				<div className="flex flex-row items-center">
					<b>Where</b>
					<b className="text-5xl text-gray-300">LOCATION</b>
					<b>Are You Now?</b>
				</div>
				<div className="relative w-[1418.25px] h-[770.25px] text-xl">
					<div className="absolute top-[238.55px] left-[411.83px] w-[515.08px] h-[395.21px] cursor-pointer" onClick={() => router.push("/explore/malang")}>
						<img
							className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hover:animate-[1s_ease_0s_infinite_normal_none_wobble-hor-bottom] hover:opacity-[1]"
							alt=""
							src="../malang@2x.png"
						/>
					</div>
					<div className="absolute top-[150.73px] left-[0px] w-[492.53px] h-[456.93px]">
						<img
							className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hover:animate-[1s_ease_0s_infinite_normal_none_bounce-top] hover:opacity-[1]"
							alt=""
							src="../madiun@2x.png"
							onClick={() => router.push("/explore/madiun")}
						/>
					</div>
					<div className="absolute top-[0px] left-[268.22px] w-[522.2px] h-[327.56px] cursor-pointer" onClick={() => router.push("/explore/surabaya")}>
						<img
							className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hover:animate-[1s_ease_0s_infinite_normal_none_bounce-top] hover:opacity-[1]"
							alt=""
							src="../surabaya@2x.png"
						/>
					</div>
					<div className="absolute top-[280.09px] left-[738.2px] w-[680.05px] h-[490.16px] cursor-pointer" onClick={() => router.push("/explore/banyuwangi")}>
						<img
							className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hover:animate-[1s_ease_0s_infinite_normal_none_bounce-top] hover:opacity-[1]"
							alt=""
							src="../banyuwangi@2x.png"
						/>
					</div>
					<div className="absolute top-[7.12px] left-[694.29px] w-[723.96px] h-[231.43px] cursor-pointer" onClick={() => router.push("/explore/madura")}>
						<img
							className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hover:animate-[1s_ease_0s_infinite_normal_none_bounce-top] hover:opacity-[1]"
							alt=""
							src="../madura@2x.png"
						/>
					</div>
					<div className="absolute top-[128.18px] left-[1000.49px] rounded-[24px] bg-gray-700 w-[356.05px] h-[115.35px] overflow-hidden flex flex-col items-center justify-end">
						<div className="self-stretch rounded-[24px] bg-gray-500 flex flex-col p-[24px] box-border items-start justify-start">
							<div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
								<b className="self-stretch relative leading-[120%] inline-block">Tips! #1</b>
								<div className="self-stretch relative text-base leading-[150%] font-medium text-gray-1500 inline-block">Hover on your desired location!</div>
							</div>
						</div>
					</div>
					<div className="absolute top-[521.01px] left-[75.96px] rounded-[24px] bg-gray-700 w-[356.05px] h-[115.35px] overflow-hidden flex flex-col items-center justify-end">
						<div className="self-stretch rounded-[24px] bg-gray-500 flex flex-col p-[24px] box-border items-start justify-start">
							<div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
								<b className="self-stretch relative leading-[120%] inline-block">Tips! #2</b>
								<div className="self-stretch relative text-base leading-[150%] font-medium text-gray-1500 inline-block">Is it what you want? Click it!</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExplorePage;
