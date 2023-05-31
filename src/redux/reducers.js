import { ADD_TASK, UPDATE_TASK, FILTER_TASKS } from './actions';

const initialState = {
  tasks: [],
  filterType: 'all',
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description, isDone: action.payload.isDone }
            : task
        ),
      };
    case FILTER_TASKS:
      return {
        ...state,
        filterType: action.payload.filterType,
      };
    default:
      return state;
  }
};

export default tasksReducer;
