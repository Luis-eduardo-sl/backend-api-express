import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getAll = async () =>{
    return await prisma.user.findMany()
}

const create = async (user) =>{
    return await prisma.user.create({
        data: user
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

export default {getAll, getById, create, remove, update}