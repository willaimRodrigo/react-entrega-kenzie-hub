import { HeaderRegister } from "../../components/Header/HeaderRegister";
import { RegisterForm } from "../../components/forms/RegisterForm";


export const RegisterPage = ({setUser}) => {
    return (
        <>
            <header>
                <HeaderRegister />
            </header>
            <main>
                <RegisterForm setUser={setUser} />
            </main>
        </>
    );
};

