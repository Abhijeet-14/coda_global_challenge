export const initialState = {
  playing9: [],
  checkboxList: {},
  values: null,
  opposingBet: 0,
};

const reducer = (state, action) => {
  console.log(action);
  if (action.type === "SET_VALUES")
    return { ...state, values: action.payload.values, playing9: [] };
  if (action.type === "SET_CHECKED")
    return { ...state, checkboxList: action.payload.checkedList };
  if (action.type === "ADD_SELECTED") {
    return { ...state, playing9: [...state.playing9, action.payload.selected] };
  }
  if (action.type === "REMOVE_SELECTED") {
    let newList = state.playing9;
    let index = newList.indexOf(action.payload.selected);
    if (index !== -1) {
      newList.splice(index, 1);
    }
    return {
      ...state,
      playing9: newList,
    };
  }

  if (action.type === "SET_OPPOSING_BET")
    return {
      ...state,
      opposingBet: action.payload.newBet,
    };

  return state;
};

export default reducer;
