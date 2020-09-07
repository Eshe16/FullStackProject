import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = (props) => {
  const sum = props.Good + props.Neutral + props.Bad;
  const all = props.Good + props.Neutral + props.Bad;
  const average = sum !== 0 ? (props.Good - props.Bad) / sum : null;
  const positive = sum !== 0 ? (props.Good / sum) * 100 : null;

  return (
    <div>


      {all === 0 ? (
        <h3>no feedback given</h3>
      ) : (
        <div>
          <p>good {props.Good}</p>
          <p>neutral {props.Neutral}</p>
          <p>bad {props.Bad}</p>
          <p>all {all}</p>
          <p>average {average}</p>
          <p>positive {positive}%</p>
        </div>
      )}

    
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>

      <Statistics Good={good} Neutral={neutral} Bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
