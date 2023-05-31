import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask, filterTasks } from './redux/actions';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const filterType = useSelector((state) => state.filterType);
  const dispatch = useDispatch();

  const handleUpdateTask = (id, description, isDone) => {
    dispatch(updateTask(id, description, !isDone));
  };

  const handleFilterTasks = (filterType) => {
    dispatch(filterTasks(filterType));
  };

  const filteredTasks = filterType === 'done' ? tasks.filter((task) => task.isDone) : tasks;

  return (
    <div>
      <div>
        <button onClick={() => handleFilterTasks('all')}>All</button>
        <button onClick={() => handleFilterTasks('done')}>Done</button>
        <button onClick={() => handleFilterTasks('not-done')}>Not Done</button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} onUpdate={handleUpdateTask} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
