import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const getAll = async () =>{
    return await prisma.product.findMany()
}

const create = async (product) =>{
    return await prisma.product.create({
        data: product
    })
}

const getById = async (id) =>{
    return await prisma.product.findUnique({
        where:{
            id
        }
    })
}

const remove = async (id) =>{
    return await prisma.product.delete({where: {
        id
    }})
}

const update = async (id, product) =>{
    return await prisma.product.update({where: {
        id,
    } ,data: product
})
}

export default {getAll, getById, create, remove, update}