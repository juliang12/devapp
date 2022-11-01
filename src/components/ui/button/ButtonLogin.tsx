import React, { FC, ReactNode } from "react";
import style from "./ButtonLogin.module.css";

interface Props {
  children: ReactNode | ReactNode[];
  rest?: any;
  onClick?: any;
}

const ButtonLogin: FC<Props> = ({ children, ...rest }) => {
  console.log(rest);
  return (
    <button {...rest} className={style.button}>
      {children}
    </button>
  );
};

export default ButtonLogin;
