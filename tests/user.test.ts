/*import request from "supertest";
import app from "../src/index";
describe("Rutas de Usuario", () => {
     it("Crear usuario, retornar el usuario nuevo", async () => {
        const res = await request(app).post("/api/users").send({
            name: "prueba",
            email: "pruebacorrectaf@gmail.com",
            password: "1234",
        });
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("id");
    });
});*/