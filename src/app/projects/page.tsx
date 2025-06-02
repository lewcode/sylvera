import { sylveraApiClient } from "@/clients/sylvera-api/client";
import PageContainer from "@/components/Page/PageContainer";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import type { Project } from "@/types";

const getProjects = async (): Promise<Project[]> => {
	const { data } = await sylveraApiClient.get("/projects");

	return data;
};

const projectsPage = async () => {
	const projects = await getProjects();

	const cards = projects.map(({ id, country, status, url }) => (
		<ProjectCard key={id} id={id} country={country} status={status} url={url} />
	));
	return (
		<PageContainer>
			<div>
				<h2 className="text-3xl text-green-900 font-bold mb-2">Projects</h2>
				<div className="grid grid-cols-3 gap-4">{cards}</div>
			</div>
		</PageContainer>
	);
};

export default projectsPage;
