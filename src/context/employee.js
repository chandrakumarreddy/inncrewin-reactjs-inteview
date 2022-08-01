import { createContext, useContext } from "react";

const employeeContext = createContext([]);

export const employeeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return [...state, { ...action.payload, id: `${state.length + 1}` }];
    case "DELETE_EMPLOYEE":
      return state.filter((state) => state.id !== action.payload);
    case "UPDATE_EMPLOYEE": {
      const employee = state.findIndex(
        (state) => state.id === action.payload.id
      );
      return [
        ...state.slice(0, employee),
        action.payload,
        ...state.slice(employee + 1),
      ];
    }
    default:
      return state;
  }
};

export const useEmployeeContext = () => {
  return useContext(employeeContext);
};

export default employeeContext;
