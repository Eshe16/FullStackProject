import React, { useState } from "react";
import ReactDOM from "react-dom";

const FeedbackButton = (props) => {
  return (
    <div style={{ display: "inline-block" }}>
      <button onClick={() => props.addFeedback()}>{props.text}</button>
    </div>
  );
};

const Statistics = (props) => {
  return (
    <div>
      <p>
        {props.feedbacktype} {props.value}
      </p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    setGood(good + 1);
  };
  const addNeutral = () => {
    setNeutral(neutral + 1);
  };

  const addBAd = () => {
    setBad(bad + 1);
  };

  let all = good + neutral + bad;
  let average = all !== 0 ? good - bad / all : null;
  let positive = all !== 0 ? good / all : null;

  return (
    <div>
      <h1>give feedback</h1>
      <FeedbackButton addFeedback={addGood} text="good" />
      <FeedbackButton addFeedback={addNeutral} text="neutral" />
      <FeedbackButton addFeedback={addBAd} text="bad" />
      <h1>statistics</h1>
      {all === 0 ? (
        <h3>no feedback given </h3>
      ) : (
        <div>
          <Statistics feedbacktype="good" value={good} />
          <Statistics feedbacktype="neutral" value={neutral} />
          <Statistics feedbacktype="bad" value={bad} />
          <Statistics feedbacktype="all" value={all} />
          <Statistics feedbacktype="average" value={average} />
          <Statistics feedbacktype="positive" value={positive} />
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
