import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expenseReducer(undefined, { type: '@@INT'});
  expect(state).toEqual([]);
});

test('should remove expenses by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expenses', () => {
  const expense = {
    id: '109',
    description: 'des',
    note: 'not',
    amount: 4,
    createdAt: 11
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit an expenses', () => {
  const amount = 90000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: { amount }
  };
  const state = expenseReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expenses', () => {
  const amount = 190000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: { amount }
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});