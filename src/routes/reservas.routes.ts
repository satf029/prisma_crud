import { Router } from "express";
import { crearReserva, borrarReserva, getReservas, actualizarReserva, getReservasByUser } from "../controllers/reservas.controller";
import { verifyToken } from "../middlewares/auth";

const router = Router();
router.post("/reserva",verifyToken, crearReserva);
router.get("/reserva",verifyToken, getReservas);
router.put("/reserva/:id",verifyToken, actualizarReserva);
router.delete("/reserva/:id",verifyToken, borrarReserva);
router.get("/reserva/byuser/:id", verifyToken, getReservasByUser);
export default router;
