import {
  fromJS,
} from 'immutable';
import tasksReducer from '../reducer';
import {
  // initAdd,
} from '../actions';

describe('tasksReducer', () => {
  it('returns the initial state', () => {
    expect(tasksReducer(undefined, {})).toEqual(fromJS({
      tasks: false,
      currentTask: false,
      flushSeedData: false,
    }));
  });
  // it('returns populated currentTask upon init', () => {
  //   expect(tasksReducer(undefined, initAdd())).toEqual(fromJS({
  //     tasks: false,
  //     currentTask: {

  //     },
  //   }));
  // });
});
