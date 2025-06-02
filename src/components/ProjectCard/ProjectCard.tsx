import type { Project } from "@/types";
import Card from "../Card/Card";

export const ProjectCard: React.FC<Project> = ({
	id,
	country,
	status,
	url,
}) => {
	return (
		<Card>
			<div className="flex flex-col gap-0.5">
				<div>
					<h3 className="text-lg font-medium underline">ID</h3>
					<span>{id}</span>
				</div>
				<div>
					<h3 className="text-lg font-medium underline">Country</h3>
					<span>{country}</span>
				</div>
				<div>
					<h3 className="text-lg font-medium underline">Status</h3>
					<span>{status}</span>
				</div>
				<div>
					<h3 className="text-lg font-medium underline">URL</h3>
					<a className="text-green-900" href={url}>Go to site</a>
				</div>
			</div>
		</Card>
	);
};
