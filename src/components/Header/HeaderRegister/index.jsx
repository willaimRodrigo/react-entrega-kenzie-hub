import { Link } from "react-router-dom";

import Logo from "../../../assests/Logo.svg";
import style from "./styles.module.scss";

export const HeaderRegister = () => {
    return (
        <header>
            <div className={style.div__register}>
                <img src={Logo} alt="Logo Kenzie Hub" />
                <Link to={"/"} className="btn__back">Voltar</Link>
            </div>
        </header>
    )
};