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
        <p>{props.name}{props.exercises}</p>
    </div>

  )
 
}

const Content = (props) => {
  return(
    <div>
      <Part name={props.part1} exercises = {props.exercises1} />
      <Part name={props.part2} exercises = {props.exercises2} />
      <Part name={props.part3} exercises = {props.exercises3} />
        
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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
    <Header head = {course} />

    <Content part1={part1} exercises1={exercises1}
             part2={part2} exercises2={exercises2}
             part3={part3} exercises3={exercises3}/>

    <Total total={exercises3+exercises2+exercises1} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
