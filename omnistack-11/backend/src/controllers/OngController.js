const generateUniqueId = require("../utils/generateUniqueId");
const conn = require("../database/connection");

module.exports = {
  async index(req, res) {
    const ongs = await conn("ongs").select("*");
    return res.json(ongs);
  },

  async create(req, res) {
    const { nome, email, whatsapp, cidade, uf } = req.body;
    const id = generateUniqueId();

    await conn("ongs").insert({ id, nome, email, whatsapp, cidade, uf });

    return res.json({ id });
  }
};
