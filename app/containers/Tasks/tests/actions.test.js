import {
  initAdd,
  addTask,
  completeTask,
  undoTaskChange,
  undoTaskStatus,
  saveTask,
  initEdit,
} from '../actions';

import {
  COMPLETE_TASK,
  INIT_ADD,
  ADD_TASK,
  INIT_EDIT,
  SAVE_TASK,
  UNDO_TASK_STATUS,
  UNDO_TASK_CHANGE,
} from '../constants';

describe('Tasks actions', () => {
  describe('initAdd Action', () => {
    it('has a type of INIT_ADD', () => {
      const expected = {
        type: INIT_ADD,
      };
      expect(initAdd()).toEqual(expected);
    });
  });
  describe('addTask Action', () => {
    it('has a type of ADD_TASK', () => {
      const expected = {
        type: ADD_TASK,
      };
      expect(addTask()).toEqual(expected);
    });
  });
  describe('initEdit Action', () => {
    it('has a type of INIT_EDIT', () => {
      const expected = {
        type: INIT_EDIT,
      };
      expect(initEdit()).toEqual(expected);
    });
  });
  describe('saveTask Action', () => {
    it('has a type of SAVE_TASK', () => {
      const expected = {
        type: SAVE_TASK,
      };
      expect(saveTask()).toEqual(expected);
    });
  });
  describe('undoTaskStatus Action', () => {
    it('has a type of UNDO_TASK_STATUS', () => {
      const expected = {
        type: UNDO_TASK_STATUS,
      };
      expect(undoTaskStatus()).toEqual(expected);
    });
  });
  describe('undoTaskChange Action', () => {
    it('has a type of UNDO_TASK_CHANGE', () => {
      const expected = {
        type: UNDO_TASK_CHANGE,
      };
      expect(undoTaskChange()).toEqual(expected);
    });
  });
  describe('completeTask Action', () => {
    it('has a type of COMPLETE_TASK', () => {
      const expected = {
        type: COMPLETE_TASK,
      };
      expect(completeTask()).toEqual(expected);
    });
  });
});
