import Logo from "../../../assests/Logo.svg";

import styles from "./style.module.scss";

export const HeaderLogin = () => {
    return (
        <div className={styles.logo__login}>
            <img src={Logo} alt="Logo Kenzie Hub" />
        </div>
    )
};