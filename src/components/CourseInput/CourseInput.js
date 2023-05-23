import React, { useState } from "react";
import './CourseInput.css';
import Button from "../Button";

const CourseInput = props => {
  const [ enteredValue, setEnteredValue ] = useState('');
  const [ isValid, setIsValid ] = useState(true);

  const handleGoalInputChange = event => {
    if (event.target.value.trim().length > 0) setIsValid(true);
    setEnteredValue(event.target.value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={isValid ? 'form-control' : 'form-control invalid'}>
        <label>Course Goal</label>
        <input type="text" onChange={handleGoalInputChange}/>
      </div>
      <Button type="submit">Add Goal </Button>
    </form>
  )
}

export default CourseInput;