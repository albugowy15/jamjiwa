import Image from "next/image";
import Link from "next/link";
import jamjiwa_logo from "../assets/jamjiwa-logo.png";
export default function Header() {
	return (
		<header className="bg-bgPrimary py-3">
			<nav className="flex px-6 justify-between">
				<div className="flex gap-3 items-center">
					<Image src={jamjiwa_logo} width={50} height={60} alt="logo jamjiwa" />
					<h1 className="font-bold hidden sm:block font-rFlex text-lg">Jamjiwa</h1>
				</div>
				<ul className="flex gap-2 md:gap-6 lg:gap-16 justify-between font-semibold">
					<li className="py-3 px-4 bg-btnPrimary rounded-xl text-sm md:min-w-[150px] text-center">
						<Link href="/">Home</Link>
					</li>
					<li className="py-3 px-4 bg-btnPrimary rounded-xl text-sm md:min-w-[150px] text-center">
						<Link href="/explore">Explore Jatim</Link>
					</li>
					<li className="py-3 px-4 bg-btnSecondary rounded-xl text-sm md:min-w-[150px] text-center">
						<Link href="/login">Login</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
