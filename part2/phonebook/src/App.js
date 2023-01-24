import { useState } from "react";

const NameRender = ({ person, number }) => {
  return <div>{person} {number}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "040-1234567"}]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("")

  const uniqueNameCheck = (name) => {
    if (name === newName) {
      return false;
    }
    return true;
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    persons.forEach((person) => {
      if (uniqueNameCheck(person.name) === false) {
        window.alert(`${newName} is already added to phonebook`);
      } else {
        setPersons(persons.concat({ name: newName, number: newNumber}));
      }
    });
    
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <div>
          filter shown with <input />
        </div>
      </form>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input onChange={handleChangeName} />
        </div>
        <div>
          number: <input onChange={handleChangeNumber}/>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>
        {persons.map((person) => (
          <NameRender key={person.name} person={person.name} number={person.number}/>
        ))}
      </>
    </div>
  );
};

export default App;
