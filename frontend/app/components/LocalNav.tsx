import Link from 'next/link';

const LocalNav = ({ localLinks }) => {
	console.log(localLinks);
	return (
		<div>
			<nav className="flex w-max-screen-md">
				<ul className="flex mx-auto justify-around w-full">
					{localLinks.map((link) => (
						<li 
							key={link.id}>
							<Link 
								href={link.href}>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default LocalNav;
