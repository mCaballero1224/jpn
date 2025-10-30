import Link from 'next/link';

const Header = () => {
	return (
		<header className="text-center px-6 py-2 mx-auto">
			<h1 className="text-red-800 font-bold py-2 text-5xl hover:underline"><Link href="/">JPN111</Link></h1>
			<p>Learning resources for learning Japanese</p>
		</header>
	);
};

export default Header;
