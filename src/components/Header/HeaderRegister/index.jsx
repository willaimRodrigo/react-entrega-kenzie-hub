import { Link } from "react-router-dom";

import Logo from "../../../assests/Logo.svg";
import style from "./styles.module.scss";

export const HeaderRegister = () => {
    return (
        <header>
            <div className={style.div__register}>
                <img src={Logo} alt="Logo Kenzie Hub" />
                <button className="btn__back"><Link to={"/"} className={style.link}>Voltar</Link></button>
            </div>
        </header>
    )
};