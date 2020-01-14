import {createAction, ActionType, createReducer} from 'typesafe-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createAction(INCREASE)();
// () => ({type: INCREASE});
export const decrease = createAction(DECREASE)();
// () => ({type: DECREASE});
export const increaseBy = createAction(INCREASE_BY)<number>();
// (diff: number) => ({ type: INCREASE_BY, payload: diff });

const actions = {increase, decrease, increaseBy};
type CounterAction = ActionType<typeof actions>;

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, state => ({count: state.count + 1}))
  .handleAction(decrease, state => ({count: state.count - 1}))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload
  }));

/*
function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return {count: state.count + 1};
    case DECREASE:
      return {count: state.count - 1};
    case INCREASE_BY:
      return {count: state.count + action.payload};
    default:
      return state;
  }
}
*/

export default counter;
