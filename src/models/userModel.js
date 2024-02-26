import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getAll = async () =>{
    return await prisma.user.findMany()
}

const create = async (data) =>{
    return await prisma.user.create({
        data
    })
}

const getById = async (id) =>{
    return await prisma.user.findUnique({where: {
        id
    }})
}

const remove = async (id) =>{
    return await prisma.user.findUnique({where: {
        id
    }})
}

const update = async (id, data) =>{
    return await prisma.user.update({where: {
        id,
    } ,data
})
}

export default {getAll, getById, create, remove, update}