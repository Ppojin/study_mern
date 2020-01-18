import React from 'react';

import GoalList from './components/GoalList';
import './App.css';

const App = () => {
  return <div className='courceGoals'>
    <h2>코스 목표</h2>
    <GoalList />
  </div>;
};

export default App;
