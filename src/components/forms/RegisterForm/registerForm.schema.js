import { z } from "zod";

export const registerFormSchema = z
    .object({
        name: z
            .string()
            .min(1, "Este campo é obrigatório."),
        email: z
            .string()
            .min(1, "Este campo é obrigatório.")
            .email("Forneça um email válido."),
        password: z
            .string()
            .min(8, "São necessários no mínimo 8 caracteres.")
            .regex(/[a-z]+/, "É necessário pelo menos uma letra minúscula.")
            .regex(/[A-Z]+/, "É necessário pelo menos uma letra maiúscula.")
            .regex(/[0-9]+/, "É necessário pelo menos um número.")
            .regex(/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]+/, "É necessário pelo menos um caracter especial."),
        confirmPassword: z.string()
        .min(1, "Este campo é obrigatório."),
        bio: z
            .string()
            .min(1, "Este campo é obrigatório."),
        contact: z
            .string()
            .min(1, "Este campo é obrigatório."),
        // course_module: z
        //     .string()
        //     .min(1, "Este campo é obrigatório.")
}).refine(({confirmPassword, password}) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
});