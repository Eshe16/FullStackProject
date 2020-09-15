import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Listofpersons = (props) => {
  return (
    <div>
      {props.personlist.map((Listofpersons,i) =>(
        <p key={i}>
           {Listofpersons.name}
        </p>
      ))}
    </div>
  );
};



const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  


  const addperson = (event) => {
    event.preventDefault()
  const personsObject = {
      name: newName,
    }
  
    setPersons(persons.concat(personsObject))
    setNewName('')
  }

  

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
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