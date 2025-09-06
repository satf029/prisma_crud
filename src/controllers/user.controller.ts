import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const getUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
};
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
 try {
    const { name, email } = req.body;
    const user = await prisma.user.create({ data: { name, email } });
    res.json(user);
 } catch (error) {
    next(error);
 }
};
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const user = await prisma.user.update({
        where: { id: Number(id) },
        data: { name, email },
        });
        res.json(user);
    } catch (error) {
        next(error);
    }
};
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await prisma.user.delete({ where: { id: Number(id) } });
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        next(error);
    }
};

export const filterUser = async (req: Request, res: Response) => {
    const {nombre} = req.params;

    const listadoUser = await prisma.user.findMany({
        where :{
            name:{
                contains: nombre
            }
        }
    });

    res.json(listadoUser);
};
export const ordenUser = async (req: Request, res: Response) => {

    const listadoOrdenado = await prisma.user.findMany({
        orderBy:{
            name: "asc"
        }
    });

    res.json(listadoOrdenado);
};

export const paginacionUser = async (req: Request, res: Response) => {
    const listaPaginada = await prisma.user.findMany({
        skip: 2,
        take: 3
    })

    res.json(listaPaginada);
};