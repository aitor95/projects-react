import { BASE_URL } from "../api";

export const getAllNotes = () => {


	return fetch(BASE_URL)
		.then((response) => response.json())
		.then(json => { return json })

}