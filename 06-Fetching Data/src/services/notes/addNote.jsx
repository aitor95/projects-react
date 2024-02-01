import { BASE_URL } from "../api";

export const addNote = ( newNoteToAdd) => {
    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(newNoteToAdd),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((json) => {return json});
}