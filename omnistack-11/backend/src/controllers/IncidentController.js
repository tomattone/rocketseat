const conn = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await conn("incidents").count();

    const incidents = await conn("incidents")
      .join("ongs", "ong_id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.nome",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.cidade",
        "ongs.uf"
      ]);

    res.header("X-Total-Count", count["count(*)"]);
    return res.json(incidents);
  },

  async create(req, res) {
    const { titulo, descricao, valor } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await conn("incidents").insert({
      titulo,
      descricao,
      valor,
      ong_id
    });

    return res.json({ id });
  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incidents = await conn("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incidents.ong_id !== ong_id) {
      return res.status(401).json({ error: "Operação não permitida" });
    }
    await conn("incidents")
      .where("id", id)
      .delete();

    return res.status(204).send();
  }
};
