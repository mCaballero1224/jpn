"use client"; 
import Link from 'next/link'; 


const MainNav = () => {
	const navItems = [];

	for (let i = 1; i <= 10; ++i) {
		navItems.push(i);
	}

	return (
		<div className="bg-black max-w-screen text-white text-center">
			<div className="flex max-w-screen-md mx-auto py-2">
				<h3 className="flex-initial px-4">Modules</h3>
				<nav className="flex-1">
					<ul className="flex">
						{navItems.map((id) => (
							<li 
								key={id} 
								className="flex-1">
								<Link 
									className="block hover:bg-red-400 rounded-sm cursor-pointer duration-150" 
									href={`/modules/${id}`}
								>
									{id}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				</div>
		</div>
	);
};

export default MainNav;
