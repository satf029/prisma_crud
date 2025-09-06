import { Router } from "express";
import { createUser,
    deleteUser,
    filterUser,
    getUsers,
    ordenUser,
    paginacionUser,
    updateUser } from "../controllers/user.controller";

const router = Router();

router.get('/users',getUsers);
router.post('/users',createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id',deleteUser);

router.get('/users/filter/:nombre', filterUser);
router.get('/users/order', ordenUser);
router.get('/users/page', paginacionUser);
export default router;