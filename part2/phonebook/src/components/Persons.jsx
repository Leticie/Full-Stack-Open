const Person = ({ name, number }) => (
  <div>
    {name} {number}
  </div>
);

 export const Persons = ({ personsToShow }) => (
    <>
      {personsToShow.map((person) => (
        <div key={person.name}>
          <Person
            name={person.name}
            number={person.number}
          />
        </div>
      ))}
    </>
)
