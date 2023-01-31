import { useState } from "react";
import { Persons } from "./components/Persons";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { isNameDuplicated } from "./helpers/helpers";


const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchedName, setSearchedName] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const duplicateName=isNameDuplicated(persons, newName)

    if (duplicateName === false) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
    }
  };

  const handleChangeName = (event) => { 
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleChangeSearchedName = (event) => {
    setSearchedName(event.target.value);
    setShowAll(false);
  };

  const personsToShow = showAll
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(searchedName.toLowerCase()));  


  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handleChangeSearchedName={handleChangeSearchedName} />  
      <h2>add a new</h2>
      <PersonForm handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  );
};

export default App;
