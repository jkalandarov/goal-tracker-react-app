import React, { useState } from "react";
import './App.css'
import CourseInput from "./components/CourseInput/CourseInput";
import GoalList from "./components/GoalList/GoalList";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const handleGoalAdd = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      return updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
    });
  };

  const handleItemDelete = goalId => {
    setCourseGoals(prevGoals => {
      return prevGoals.filter(goal => goal.id !== goalId);
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <GoalList items={courseGoals} onDeleteItem={handleItemDelete} />
    );
  }
  return (
    <div className="App">
      <section id="goal-form">
        <CourseInput onAddGoal={handleGoalAdd}/>
      </section>

      <section id="goals">
        {content}
      </section>      
    </div>
  );
}

export default App;
