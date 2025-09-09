import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); //crear el objeto prisma
//CRUD

//READ -leer u obtener las reservas
export const getReservas = async ( req : Request, res: Response, next: NextFunction) =>{
    const reservas = await prisma.reserva.findMany();

    res.json(reservas);

}

export const crearReserva = async(req: Request, res:Response, next:NextFunction)=>{
    try {
        const {userId, fecha} = req.body;

        const nuevaReserva = await prisma.reserva.create({
            data:{
                userId,
                fecha
            }
        })

        res.json(nuevaReserva);
    }catch (error){
        next(error);
    }

    
}

export const actualizarReserva = async(req: Request, res: Response, next : NextFunction)=>{
    const {id} = req.params;
    const {userId, fecha} = req.body;
    try {
        const reservaActualizada = await prisma.reserva.update({
            where:{
                id: Number(id)
            },
            data:{
                fecha:fecha,
                userId: userId,
            }
        })

        res.json(reservaActualizada);
    } catch (error) {
        next(error);
    }
}

export const borrarReserva = async (req: Request, res: Response, next: NextFunction)=>{
    const {id} = req.params;

    try {
        const borrarReserva = await prisma.reserva.delete({
            where:{
                id: Number(id)
            }
        })

        res.json(borrarReserva);
    } catch (error) {
        next(error);
    };
}

export const getReservasByUser = async(req: Request, res: Response, next: NextFunction)=>{
    const {id} = req.params;
    try {
        const reservasByUser = await prisma.reserva.findMany({
            where:{userId:Number(id)}
        })

        res.json(reservasByUser);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener reservas del usuario" });
    }
}