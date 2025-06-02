import axios from "axios";

export const sylveraApiClient = axios.create({
	baseURL: "http://localhost:4000/",
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});
