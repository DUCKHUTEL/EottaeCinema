import { handleActions } from 'redux-actions';

const prefix = 'EOTTAECINEMA/MODAL';

const SUCCESS = `${prefix}/SUCCESS`;

//action
export const success = () => ({ type: SUCCESS });

///initialState
const initialState = {
  modal: false,
};

const reducer = handleActions(
  {
    SUCCESS: (state, action) => ({
      modal: !state.modal,
    }),
  },
  initialState,
  { prefix },
);

export default reducer;
