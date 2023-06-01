const getAllUsers = () => {
    return fetch('http://localhost:3000/persons')
        .then(response => response.json())
        .then(json => { return json })

    // Axios
    // return axios.get('http://localhost:3000/persons')
    // .then(response => {
    //     const {data} = response
    //     return data
    // })

}

export default getAllUsers