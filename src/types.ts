export interface Project {
	id: string;
	url?: string;
	status?: string;
	country?: string;
}

export interface ComponentProps extends React.PropsWithChildren {
	className?: string;
}
