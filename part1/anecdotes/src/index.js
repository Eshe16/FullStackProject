import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(anecdotes[0]);

  const [currentAnecdotes, setcurrentAncedots] = useState(anecdotes[0]);

  const [maxVoteAncedote, setmaxVoteancedot] = useState("");

  const [point, setPoint] = useState([0, 0, 0, 0, 0, 0]);

  const vote = () => {
    const copy = [...point];
    copy[selected] += 1;
    setPoint(copy);
    console.log(copy);

    maxVoteMaker(copy);
  };

  const makeAncedotes = () => {
    const value = Math.floor(Math.random() * anecdotes.length);
    setSelected(value);
    setcurrentAncedots(anecdotes[value]);
  };


  const maxVoteMaker = (copy) => {
    console.log(...copy);
    const maxindex = copy.indexOf(Math.max(...copy));
    console.log(maxindex);
    setmaxVoteancedot(anecdotes[maxindex]);
  };

  return (
    <div>
      <p>{currentAnecdotes}</p>
      <p>has {point[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={makeAncedotes}>next anecdotes</button>
      <h2>Ancedotes with the most vote</h2>
      <p>
        {maxVoteAncedote} has {Math.max(...point)} votes{" "}
      </p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
