import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const userSchema = z.object({
    id: z.number({
        required_error: "ID é obrigatorio",
        invalid_type_error: "O ID deve ser um numero inteiro"
    }) ,
    name: z.string({
        required_error: "Nome é obrigatorio",
        invalid_type_error: "o nome deve ser uma string"
    })
    .min(3,{message: "o nome deve ter no minimo 3 letras"})
    .max(200,{message: "o nome deve ter no maximio 200 caracteres"}) ,
    email: z.string({
        required_error: "O email é obrigatorio",
        invalid_type_error: "o email deve ser uma string"
    })
    .email({message: "Email inválido"})
    .max(500, {message: "O email deve ter no maximo 500 caracteres"}) ,
    pass: z.string({
        required_error: "A senha deve ser uma string",
        invalid_type_error: " A senha deve ser uma string"
    })
    .min(6, {message: "A senha deve ter no minimo 6 caracteres"}),
    avatar: z.string({
        required_error: "O avatar é obrigatorio",
        invalid_type_error: "O avatar deve ser uma string"
    })
    .url({message: "URL do avatar invalida"})
    .max(1000 , {message: "URL deve ter no maximo 1000 caracteres"})
})

const validateUserToCreat = (user) => {
    const partialUserSchema = userSchema.partial({id: true})
    return partialUserSchema.safeParse(user)
}

const getAll = async () =>{
    return await prisma.user.findMany()
}

const create = async (user) =>{
    return await prisma.user.create({
        data: user,
        select:{
            name: true,
            email: true,
            avatar: true,
        }
    })
}

const getById = async (id) =>{
    return await prisma.user.findUnique({where: {
        id
    }})
}

const remove = async (id) =>{
    return await prisma.user.delete({where: {
        id
    }})
}

const update = async (id, user) =>{
    return await prisma.user.update({where: {
        id,
    } ,data: user
})
}

export default {getAll, getById, create, remove, update, validateUserToCreat}