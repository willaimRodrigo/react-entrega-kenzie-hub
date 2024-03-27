import { LoginForm } from "../../components/forms/LoginForm";
import { HeaderLogin } from "../../components/Header/HeaderLogin";


export const LoginPage = ({setUser}) => {  
    return (
        <>
            <header>
                <HeaderLogin />
            </header>
            <main>
                <LoginForm setUser={setUser}/>
            </main> 
        </>
             
    )
}

