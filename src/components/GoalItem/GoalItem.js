import React from "react";
import './GoalItem.css';

const GoalItem = props => {
  const handleDelete = () => {
    props.onDelete();
  }
  
  return (
    <li className="goal-item" onClick={handleDelete}>
      {props.text}
    </li>
  )
}

export default GoalItem;