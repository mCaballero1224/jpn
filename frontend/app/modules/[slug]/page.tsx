'use client';
import { usePathname } from 'next/navigation';
import LocalNav from '@/components/LocalNav';

const localLinks = [
	{id: 0, name: 'Vocabulary List', href: '#'},
	{id: 1, name: 'Conjugation Table', href: '#'},
];

const ModulePage = () => {
	const id = usePathname().split('/').slice(-1)[0];
	return (
		<div>
			<h2
				className="py-2 text-2xl text-center"
			>Module {id}</h2>
			<LocalNav localLinks={localLinks} />
		</div>
	);
};

export default ModulePage;
