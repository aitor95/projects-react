const addUser = (newPerson) => {
    return fetch('http://localhost:3000/persons', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson)
    })
        .then(response => response.json())
        .then(json => { return json })

    // POST USING AXIOS
    // return axios
    //   .post('http://localhost:3000/persons', newPerson)
    //   .then(response => {
    //      const { data } = response
    //      return data)
    //   })
}

export default addUser