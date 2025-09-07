import Express  from "express";
import { logger } from "./middlewares/logger";
import userRoutes from './routes/user.routes';
import reservasRoutes from './routes/reservas.routes';
import { errorHandler } from "./middlewares/errorHandler";
import cors from "cors";
import loginRoutes from "./routes/login.routes"


const app = Express();

app.use(Express.json());
app.use(logger);
app.use(cors);
app.use('/api',userRoutes);
app.use('/api',reservasRoutes)
app.use('/api',loginRoutes);
app.use(errorHandler);

app.listen(3000, ()=>{
    console.log(`Servidor`);
})