const request = require("supertest");
const app = require("../../src/app");
const conn = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await conn.migrate.rollback();
    await conn.migrate.latest();
  });
  afterAll(async () => {
    await conn.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        nome: "SOS Alegria",
        email: "contato@sosalegria.org",
        whatsapp: "42988077188",
        cidade: "Ponta Grossa",
        uf: "PR"
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
