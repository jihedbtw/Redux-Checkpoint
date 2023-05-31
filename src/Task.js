import React from 'react';

const Task = ({ task, onUpdate }) => {
  const handleToggleTask = () => {
    onUpdate(task.id, task.description, task.isDone);
  };

  return (
    <li>
      <input type="checkbox" checked={task.isDone} onChange={handleToggleTask} />
      {task.description}
    </li>
  );
};

export default Task;
