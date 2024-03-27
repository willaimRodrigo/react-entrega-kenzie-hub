import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerFormSchema } from "./registerForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../services";
import { toast } from "react-toastify";

import style from "./styles.module.scss";

export const RegisterForm = ({setUser}) => {
    const onSubmit = (formData) => {
        userRegister(formData);
    }

    const navigate = useNavigate();

    const userRegister = async (payload) => {
        try {
            const {data} = await api.post("/users", payload)
            toast.success("Conta criada com sucesso!");
            
            setUser(data.user);
            localStorage.setItem("@kenziehub:id", data.id);
            navigate("/");
        } catch (error) {
            toast.error("Ops! Algo deu errado");
        }
    };

    const { register,
        handleSubmit,
        formState: {errors} } = useForm({
        resolver: zodResolver(registerFormSchema)
    });

    return (
        <>
            <div className={style.div__register}>

                <div className={style.newCont}>
                    <h2>Crie sua conta</h2>
                    <p>Rápido e grátis, vamos nessa</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        label={"Nome"}
                        placeholder="Digite aqui seu nome"
                        type="text"
                        error={errors.name}
                        {...register("name")}
                    />

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

                    <Input 
                        label={"Confirmar Senha"}
                        placeholder="Digite novamente sua senha"
                        type="password"
                        error={errors.confirmPassword}
                        {...register("confirmPassword")}
                    />

                    <Input 
                        label={"Bio"}
                        placeholder="Fale sobre você"
                        type="text"
                        error={errors.bio}
                        {...register("bio")}
                    />

                    <Input 
                        label={"Contato"}
                        placeholder="Opção de contato"
                        type="text"
                        error={errors.contact}
                        {...register("contact")}
                    />
                    
                    <label className={style.option}>Selecionar Módulo</label>

                    <select required>
                        <option value="" disabled selected >
                            Selecione seu módulo
                        </option>

                        <option value="Primeiro Módulo (Introdução a programação)">
                            <label>Primeiro Módulo</label></option>
                        
                        <option value="Segundo Módulo(Front-end Intermediário)">
                            <label>Segundo Módulo</label>
                        </option>
                        
                        <option value="Terceiro Módulo (Front-end Avançado)">
                            <label>Terceiro Módulo</label>
                        </option>
                        
                        <option value="Quarto Módulo (Introdução ao Back-end)">
                            <label>Quarto Módulo</label>
                        </option>
                        
                        <option value="Quinto Módulo (Back-end Intermediário)">
                            <label>Quinto Módulo</label>
                        </option>
                        
                    </select>

                    
                    <button className="btn__finalyRegister" type="submit">Cadastrar</button>
                </form>
            </div>
                
        </>
    );
};