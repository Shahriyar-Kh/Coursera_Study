import React from 'react';

function GoalList({ goals }) {
  return (
    <ul>
      {goals.map((g, index) => (
        <li key={index}>
          My goal is to {g.goal}, by {g.by}
        </li>
      ))}
    </ul>
  );
}

export default GoalList;
