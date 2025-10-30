'use client';
import { usePathname } from 'next/navigation';


const ModulePage = () => {
	const id = usePathname().slice(-1);
	return (
		<div>
			<h2>Module {id}</h2>
		</div>
	);
};

export default ModulePage;
