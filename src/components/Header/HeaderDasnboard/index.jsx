import Logo from "../../../assests/Logo.svg";

import style from "./styles.module.scss";

export const HeaderDashboard = ({logout}) => {
    return (
        <div className={style.div__dashboard}>
            <img src={Logo} alt="Logo Kenzie Hub" />
            <button onClick={logout} className="btn__logout">Sair</button>
        </div>
    )
};