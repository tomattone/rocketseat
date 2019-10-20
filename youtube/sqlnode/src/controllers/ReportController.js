const { Op } = require("sequelize");

const User = require("../models/User");
const Address = require("../models/Address");

module.exports = {
  async show(req, res) {
    const users = await User.findAll({
      where: {
        email: {
          [Op.iLike]: "%@agenciaade.com.br"
        }
      },
      include: [
        { association: "addresses", where: { street: "Otávio de Carvalho" } },
        {
          association: "techs",
          required: false,
          where: { name: { [Op.iLike]: "React%" } }
        }
      ]
    });
    return res.json(users);
  }
};
