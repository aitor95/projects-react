import React from 'react'

const PersonForm = (
    {
        newName,
        newPhone,
        handleChange,
        handleChangePhone,
        addNote
    }) => {

    return (
        <form action="#" onSubmit={addNote}>
            <div>
                name: <input minLength={1} onChange={handleChange} value={newName} />

            </div>
            <div>
                phone: <input type='number' onChange={handleChangePhone} value={newPhone} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm