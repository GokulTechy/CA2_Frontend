import {
  createContext,
  useReducer,
  useEffect
}
from "react";

import { AppReducer }
from "../reducer/AppReducer";

import {
  getToken,
  getDataset
}
from "../services/api";

export const AppContext =
  createContext();

const initialState = {

  activities: [],
  loading: true

};

export const AppProvider =
  ({ children }) => {

    const [state, dispatch] =
      useReducer(
        AppReducer,
        initialState
      );


    useEffect(() => {

      const fetchData =
        async () => {
          try {
            dispatch({ type: "SET_LOADING", payload: true });
            const token =
              await getToken();

            const data =
              await getDataset(token);

            dispatch({
              type: "SET_ACTIVITIES",
              payload: data
            });
          } catch (error) {
            console.error("Error fetching data:", error);
            dispatch({ type: "SET_LOADING", payload: false });
          }
        };

      fetchData();

    }, []);


    return (

      <AppContext.Provider
        value={{
          state,
          dispatch
        }}
      >

        {children}

      </AppContext.Provider>

    );

};