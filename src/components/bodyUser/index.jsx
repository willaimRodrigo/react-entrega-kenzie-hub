import style from "./styles.module.scss";

export const BodyUser = ({user}) => {
    return (
        <>

        <div className={style.dashboards}>
            <div className={style.welcome}>
                <h2>Olá, {user?.name}</h2>
                <p>{user?.module}</p> 
            </div>
            <div className={style.info__page}>
                <h2>Que pena! Estamos em desenvolvimentos :( </h2>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </div> 
        </div>
             
        </>
    )
}