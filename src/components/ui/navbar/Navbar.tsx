import { Link, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";
import ButtonLogin from "../button/ButtonLogin";
import Bars from "../../../assets/svg/bars.svg";
import Exit from "../../../assets/svg/xmark-solid.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLogged } from "@/context/StateProvider";
import { auth } from "@/services/firebase/firebaseConfig";
import { signOut } from "firebase/auth";

const Navbar = (): any => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const context = useLogged();

  console.log(context);

  const toggleMovil = () => {
    setToggle(!toggle);
  };

  const logoutAccount = () => {
    signOut(auth);
    navigate("/login");
  };

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <h1>DVAP</h1>
        </div>
        <ul
          className={
            toggle
              ? style.navContainer
              : `${style.navContainer} ${style.active}`
          }
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Crear Proyecto</a>
          </li>
        </ul>
        <div className={style.movil} onClick={toggleMovil}>
          {toggle ? (
            <img style={{ width: "30px" }} src={Bars} />
          ) : (
            <img style={{ width: "30px" }} src={Exit} />
          )}
        </div>
        {context?.displayName ? (
          <p style={{ color: "#ccc" }}>Hola {context?.displayName}</p>
        ) : (
          "Hola Anonimo"
        )}

        {context?.displayName ? (
          <ButtonLogin onClick={logoutAccount}>Logout</ButtonLogin>
        ) : (
          <NavLink to={"/login"}>
            <ButtonLogin>Login</ButtonLogin>
          </NavLink>
        )}
      </nav>
    </>
  );
};

export default Navbar;
