import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
   return(
     <div>
       <h1>{props.course}</h1>
     </div>
   )
}

const Part = (props) => {
  
  return (
    <div>
        <p>{props.partArray.name}  {props.partArray.exercises}</p>
    </div>

  )
 
}

 
const Content = ({parts}) => {

  return(
    <div>
      <Part partArray={parts[0]} />
      <Part partArray={parts[1]}  />
      <Part partArray={parts[2]}  />
        
    </div>
  )
}
const Total = ({parts}) => {
return (
<div>
  
<p>Number of exercise {parts[0].exercises+parts[1].exercises+parts[2].exercises}</p>
</div>
)
}

const App = () => {
 
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
