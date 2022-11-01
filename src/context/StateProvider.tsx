import { StateContext } from "@/context/StateContext";
import useAuth from "@/hooks/useAuth";
import { FC, ReactNode, useContext } from "react";

interface Props {
  children?: ReactNode | ReactNode[];
}

const StateProvider = ({ children }: Props) => {
  const context = useAuth();
  console.log(context);
  return (
    <StateContext.Provider value={context}>{children}</StateContext.Provider>
  );
};

const useLogged = () => {
  const context = useContext(StateContext);
  return context;
};

export default StateProvider;

export { useLogged };
