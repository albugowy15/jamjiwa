import Image from "next/image";
import jamjiwa_logo from "../assets/jamjiwa-logo.png";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { RiTwitterLine, RiYoutubeFill, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";
import { BsMedium } from "react-icons/bs";

export default function Footer() {
	return (
		<footer className="bg-bgSecondary py-4 px-4 md:px-7 rounded-t-xl">
			<div className="flex items-center justify-between">
				<div>
					<div className="flex items-center">
						<Image alt="logo jamjiwa" src={jamjiwa_logo} height={40} />
						<p className="font-bold font-rFlex text-lg">Jamjiwa</p>
					</div>
					<p className="text-xs py-2">&copy; 2022 Jamjiwa. All rights reserved.</p>
				</div>
				<div className="flex gap-2">
					<TiSocialFacebookCircular size={20} />
					<RiTwitterLine size={20} />
					<RiYoutubeFill size={20} />
					<RiInstagramLine size={20} />
					<RiLinkedinFill size={20} />
					<BsMedium size={20} />
				</div>
			</div>
		</footer>
	);
}
