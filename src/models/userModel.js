import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getAll = async () =>{
    return await prisma.user.findMany()
}

const create = async () =>{
    return await prisma.user.create()
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

export default {getAll, getById, create, remove}