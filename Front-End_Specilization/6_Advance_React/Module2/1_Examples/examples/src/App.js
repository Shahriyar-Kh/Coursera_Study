import React, { useState } from 'react';
import GoalForm from './GoalForm';
import GoalList from './GoalList';

import LittleLemonApp from './LittleLemonApp'; // ✅ Importing the separate useEffect component


function App() {
  const [allGoals, updateAllGoals] = useState([]);
  function addGoal(goalEntry) {
    updateAllGoals(prevGoals => [...prevGoals, goalEntry]);
  }

  return (
    <div>
      <h1>My Little Lemon Goals</h1>
      <GoalForm onAdd={addGoal} />
      <GoalList goals={allGoals} />


         {/* ✅ useEffect logic rendered as separate component */}
      <LittleLemonApp />
    </div>
    
  );
}

export default App;


