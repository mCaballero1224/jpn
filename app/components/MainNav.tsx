import Link from 'next/link';
var moduleLinks = [];

for (let i = 1; i <= 10; ++i) {
	moduleLinks.push({name: `Module${i}`, href: `/modules/module${i}`});
}

const MainNav = () => {
	return (
		<nav>
			<ul>
				{moduleLinks.map((link, index) => (
					<li key={index}><Link href={link.href}>{link.name}</Link></li>
				))}
			</ul>
		</nav>
	);
};

export default MainNav;
