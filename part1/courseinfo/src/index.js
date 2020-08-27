import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
   return(
     <div>
       <h1>{props.head}</h1>
     </div>
   )
}

const Part = (props) => {
  
  return (
    <div>
        <p>{props.partCollection.name}{props.partCollection.exercises}</p>
    </div>

  )
 
}

 
const Content = (props) => {

  return(
    <div>
      <Part partCollection={props.part1} />
      <Part partCollection={props.part2}  />
      <Part partCollection={props.part3}  />
        

    
    </div>
  )
}
const Total = (props) => {
return (
<div>
  
<p>Number of exercise {props.total}</p>
</div>
)
}

const App = () => {
 /* const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14 */

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
    <Header head = {course} />

    <Content part1={part1} 
             part2={part2}
             part3={part3} />

    <Total total={part1.exercises + part2.exercises +part3.exercises } />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
