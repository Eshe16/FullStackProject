import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Listofpersons = (props) => {
  return (
    <div>
      {props.personlist.map((Listofpersons,i) =>(
        <p key={i}>
           {Listofpersons.name}     {Listofpersons.number}
        </p>
      ))}
    </div>
  );
};




const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [searchWord, setSearchWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState([]);
  


  const addperson = (event) => {
    event.preventDefault()
    
  const personsObject = {
      name: newName,
      number:newNumber,
    }
    persons.some((item) => item.name===newName)?window.alert('the name '+  newName + ' is already added to phonebook'):
    setPersons(persons.concat(personsObject))
    setNewName('')
    setNewNumber('')
  }

  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = e => {
    setSearchWord(e);
let oldPersonList=persons.map(person => {
  return {name: person.name.toLowerCase(),number: person.number};
});

  if(searchWord !==" "){
    let newPersonList= [];
    newPersonList=oldPersonList.filter(person =>person.name.includes(searchWord.toLowerCase()));
    setFilterDisplay(newPersonList);
  }
   else{
     setFilterDisplay(persons)
   }
  };

  
  return (
    
    <div>
      <h2>Phonebook</h2>
      filter shown with
      <input value={searchWord} onChange={e =>handleSearchChange(e.target.value)} placeholder="Search for names.." title="Type in a name"></input>

      <h2>Add a new</h2>
      <form onSubmit={addperson}>
        <div>
          name: <input value={newName}
          onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber}
          onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     
     <Listofpersons personlist={searchWord.length < 1 ? persons:filterDisplay} />
   
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'))