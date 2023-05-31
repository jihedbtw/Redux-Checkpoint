// action types
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const FILTER_TASKS = 'FILTER_TASKS';

// action creators
export const addTask = (description) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now(),
    description,
    isDone: false,
  },
});

export const updateTask = (id, description, isDone) => ({
  type: UPDATE_TASK,
  payload: {
    id,
    description,
    isDone,
  },
});

export const filterTasks = (filterType) => ({
  type: FILTER_TASKS,
  payload: {
    filterType,
  },
});
