import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import style from "./style.module.scss";

export const LoginForm = ({setUser}) => {
    const onSubmit = (formData) => {
        login(formData);
    };

    const navigate = useNavigate();

    const login = async (payload) => {
        try {
            const {data} = await api.post("/sessions", payload)

            
            setUser(data.user);
            localStorage.setItem("@kenziehub:token", data.token);
            toast.success("Login realizado com sucesso!");
            navigate("/dashboard");
        } catch (error) {
            toast.error("Email ou senha inválida.");
        }
    }

    const { register,
        handleSubmit,
        formState: {errors} } = useForm({
        resolver: zodResolver(loginFormSchema)
    });
    
    return (
        <>

        <div className={style.div__login}>
            <div className={style.div__title}>
                <h2>Login</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <Input 
                    label={"E-mail"}
                    placeholder="Digite aqui seu e-mail"
                    type="email"
                    error={errors.email}
                    {...register("email")}
                />

                <Input 
                    label={"Senha"}
                    placeholder="Digite aqui sua senha"
                    type="password"
                    error={errors.password}
                    {...register("password")}
                />

                <button type="submit" className="btn__enter">Entrar</button>

                <p className="paragraph">Ainda não tem uma conta?</p>
                
                <button className="btn__register"><Link to={"/register"} className={style.link}>Cadastre-se</Link></button>
            </form>

        </div>
            
        </>
    );
};