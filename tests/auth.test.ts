/*import request from "supertest";
import app from "../src/index";
describe("Rutas de Auth", () => {
 it("Login correcto retorna token", async () => {
 const res = await request(app).post("/api/login").send({
 email: "satf@gmail.com",
 password: "1234",
 });
 expect(res.statusCode).toBe(200);
 expect(res.body).toHaveProperty("token");
 });
 it("Login incorrecto retorna 401", async () => {
 const res = await request(app).post("/api/login").send({
 email: "test@example.com",
 password: "wrongpass",
 });
 expect(res.statusCode).toBe(401);
 expect(res.body).toHaveProperty("error");
 });
});*/
