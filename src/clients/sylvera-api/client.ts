import type { Project } from "@/types";
import axios from "axios";

const sylveraApiClient = axios.create({
	baseURL: "http://localhost:4000/",
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

export const getProjects = async (): Promise<Project[]> => {
	const { data } = await sylveraApiClient.get("/projects");

	return data;
};
