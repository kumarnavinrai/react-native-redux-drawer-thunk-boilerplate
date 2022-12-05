import {COUNT_INCRESE, COUNT_DECRESE} from './actions';

export const increment = () => {
  console.log('increment actoion called');
  return {
    type: COUNT_INCRESE,
  };
};

export const decrement = () => {
  return {
    type: COUNT_DECRESE,
  };
};
