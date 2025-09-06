import { Router } from "express";
import { crearReserva, borrarReserva, getReservas, actualizarReserva } from "../controllers/reservas.controller";

const router = Router();
router.post("/reserva", crearReserva);
router.get("/reserva", getReservas);
router.put("/reserva/:id", actualizarReserva);
router.delete("/reserva/:id", borrarReserva);
export default router;
