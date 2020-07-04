const conn = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const ong = await conn("ongs")
      .where("id", id)
      .select("nome")
      .first();

    if (!ong) {
      return res
        .status(400)
        .json({ error: "Nenhuma ONG encontrada com esse ID" });
    }

    return res.json(ong);
  }
};
