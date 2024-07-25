import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import choferRoutes from "./routes/chofer.routes.js";
import vehiculoRoutes from "./routes/vehiculo.routes.js";
import grupoRoutes from "./routes/grupos.routes.js";
import rutaRoutes from "./routes/ruta.routes.js";
import lineaRoutes from "./routes/linea.routes.js";
import gpsRoute from "./routes/gps.routes.js";
import trabajoRoute from "./routes/trabajo.routes.js";

const app = express();
app.use(morgan("dev"));
app.use(cookieParser());

// comunicacion con el front
app.use(
    cors({
        origin: [
            'http://localhost:5173', 
            'https://sistema-de-control.vercel.app',
            'https://sistema-de-control.onrender.com'
        ],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);


//tranformacion a formato json sin esto sale undefine en las peticiones
app.use(express.json());

//definiendo que toda ruta va tener api por delante ejem.. http....local../api/register
app.use("/api", authRoutes);
// app.use('/api', grupo)
app.use("/api", choferRoutes);

app.use("/api", vehiculoRoutes);

app.use("/api", grupoRoutes);

app.use("/api", rutaRoutes);

app.use('/api', lineaRoutes);

app.use('/api', gpsRoute);

app.use('/api', trabajoRoute);

export default app;
