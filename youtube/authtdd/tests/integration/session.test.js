const request = require("supertest");

const app = require("../../src/app");
const { User } = require("../../src/app/models");
const truncate = require("../../tests/utils/truncate");

describe("Auth", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("deve autenticar com login/senha", async () => {
    const user = await User.create({
      name: "Armando",
      email: "armando@agenciaade.com.br",
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
    const user = await User.create({
      name: "Armando",
      email: "armando@agenciaade.com.br",
      password: "123123"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123123"
      });
    expect(response.status).toBe(401);
  });
});
