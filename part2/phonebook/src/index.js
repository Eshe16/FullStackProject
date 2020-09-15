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
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '0448117010'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  


  const addperson = (event) => {
    event.preventDefault()
    
  const personsObject = {
      name: newName,
      number:newNumber,
    }
    persons.some((item) => item.name===newName)?window.alert('the name '+  newName + ' is already added to phonebook'):
    setPersons(persons.concat(personsObject))
    setNewName('')
  }

  

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  
  return (
    
    <div>
      <h2>Phonebook</h2>
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
     
     <Listofpersons personlist={persons} />
    
      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'))