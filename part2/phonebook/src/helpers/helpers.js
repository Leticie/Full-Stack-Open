

export const isNameDuplicated = (persons, newName) => {
    return persons.every((person) => person.name !== newName)
} 