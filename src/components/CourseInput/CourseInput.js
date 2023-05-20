import React, { useState } from "react";
import './CourseInput.css';
import Button from "../Button";

const CourseInput = props => {
  const [ enteredValue, setEnteredValue ] = useState('');
  const [ isValid, setIsValid ] = useState(true);

  const handleGoalInputChange = event => {
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
      <div className="form-control">
        <label className="form-control label" style={{color: !isValid ? 'red' : 'black'}}>
          Course Goal
        </label>
        <input className="form-control input" type="text" onChange={handleGoalInputChange}/>
      </div>
      <Button type="submit">Add Goal </Button>
    </form>
  )
}

export default CourseInput;