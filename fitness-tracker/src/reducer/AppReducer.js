export const AppReducer = (
  state,
  action
) => {

  switch (action.type) {

    case "SET_ACTIVITIES":

      return {
        ...state,
        activities: action.payload,
        loading: false
      };

    case "SET_LOADING":

      return {
        ...state,
        loading: action.payload
      };

    default:

      return state;
  }
};