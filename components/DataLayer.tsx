import React, { createContext, ReactNode, useContext, useReducer } from "react";

type UserDispatch = {
  dispath: string;
  useDataLayerValue: () => void;
}[];

export const DataLayerContext = createContext();
export const DataLayer = ({
  initialState,
  reducer,
  children,
}: {
  initialState: string;
  reducer: any;
  children: ReactNode;
}) => {
  return (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerContext.Provider>
  );
};
export const useDataLayerValue: UserDispatch = () =>
  useContext(DataLayerContext);
