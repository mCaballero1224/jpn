import Link from 'next/link';
import Image from 'next/image';
import Flag from '../../public/Flag_of_Japan.svg';

const Header = () => {
	return (
		<header className="max-w-screen-md text-center py-2">
			<div className="w-full flex justify-center py-2">
				<Image src={Flag} alt="Japanese Flag"
					className="mr-5 border-1 shadow-md shadow-red-300"
					width={120}
					height={40}
				/>
				<h1
					className="my-auto text-red-800 font-bold text-5xl hover:underline">
					<Link href="/">JPN111</Link>
				</h1>
			</div>
			<p>Resources for learning Japanese</p>
		</header>
	);
};

export default Header;
