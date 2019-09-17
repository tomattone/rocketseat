const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../../tests/utils/truncate");
const factory = require("../factories");

describe("Authorization", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("deve autenticar com login/senha", async () => {
    const user = await factory.create("User", {
      password: "123123"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123123"
      });
    expect(response.status).toBe(200);
  });

  it("nao autenticar com senha errada", async () => {
    const user = await factory.create("User", {
      password: "senhaerrada"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123123"
      });
    expect(response.status).toBe(401);
  });

  it("deve retornar um jwt token", async () => {
    const user = await factory.create("User", {
      password: "123123"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123123"
      });
    expect(response.body).toHaveProperty("token");
  });

  it("deve acessar rotas privadas com token", async () => {
    const user = await factory.create("User", {
      password: "123123"
    });

    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(200);
  });

  it("não deve acessar rotas privadas sem token", async () => {
    const user = await factory.create("User", {
      password: "123123"
    });

    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(200);
  });

  it("não deve acessar rotas privadas com token invalido", async () => {
    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer 123`);

    expect(response.status).toBe(401);
  });
});
