
import React, { useState , useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


const Listofcontries = (props) => {
  return (
    <div>
      {props.countrieslist.map((Listofcontries,i) =>(
        <p key={i}>
           {Listofcontries.name}   
        </p>
      ))}
    </div>
  );
};
 



const App = () => {
  const [countries, setCountries] = useState([])
  const [searchWord, setSearchWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState([]);
  
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const newList = response.data
        console.log(newList);
        setCountries(newList) 
      })
  }, [])

  /*const addperson = (event) => {
    event.preventDefault()
    
  const countriesObject = {
      name: newName,
    }
    countries.some((item) => item.name===newName)?window.alert('the name '+  newName + ' is already added to phonebook'):
    setCountries(countries.concat(countriesObject))
    setNewName('')
  }*/




  const handleSearchChange = e => {
    setSearchWord(e);
let oldCountriesList=countries.map(country=> {
  return {name: country.name.toLowerCase()};
});

  if(searchWord !==" "){
    let newCountriesList= [];
    newCountriesList=oldCountriesList.filter(country =>country.name.toLowerCase().includes(searchWord.toLowerCase()));
    console.log(newCountriesList);
    setFilterDisplay(newCountriesList);
  }
   else{
     setFilterDisplay(countries)
   }
  };

  
  return (
    
    <div>
      <h2>countries</h2>
      find countries
      <input value={searchWord} onChange={e =>handleSearchChange(e.target.value)} placeholder="Search for names.." title="Type in a name"></input>

      <Listofcontries countrieslist={searchWord.length < 1 ? countries:filterDisplay} />
   
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'))