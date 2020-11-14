
import React, { useState , useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


const App = () => {
  const [countries, setCountries] = useState([])
  const [newCountries, setNewCountries] = useState([])
  
  
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const newList = response.data
        setCountries(newList) 
      })
  }, [])

  const inputHandler = (e) => {
    const userInput = e.target.value.toLowerCase();
    const newList = countries.filter((country) =>
    country.name.toLowerCase().includes(userInput));
    setNewCountries(newList);
  };
  

return (
  <div>
    find a country{" "}
    <input type="text" placeholder="what country" onChange={inputHandler}/>
    {newCountries.length> 10 && (
      <p> To many matches, specific another filiter</p>
    )}
    {newCountries.length <=10 && newCountries.length > 1 && (
      <DisplayTenCountries list= {newCountries} />
    )}
    {newCountries.length === 1 && (
      <div>
        <DisplaySingleCountry country={newCountries[0]} />
        </div>

    )}
    }
  </div>
);

  };


const DisplayTenCountries= ({ list}) =>{
  const [displayConstent, setDisplayConstent] = useState([]);
  const [display, setDisplay] = useState(false);

  const handleShowBtnClick = (e) => {
    const country = list[e.target.id];
    setDisplayConstent(country);
    setDisplay(true);
  };

return(
  <div>
    {list.map((item, i) => (
   <div key= {i}>
     {item.name}{" "}
     <button id={i} onClick={handleShowBtnClick}>show</button>
     </div>
    ))}
    {display && <DisplaySingleCountry country={displayConstent}/>}
  </div>
);
};

const DisplaySingleCountry = ({country}) => {
  return (
    <div>
      <h1>{country.name}</h1>
    </div>
  );
};


ReactDOM.render(
  <App />,
  document.getElementById('root'))