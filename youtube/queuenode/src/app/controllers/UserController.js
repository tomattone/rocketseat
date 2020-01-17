import Queue from "../lib/Queue";

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password
    };

    // adicionar job mail na fila
    await Queue.add({ user });

    return res.json(user);
  }
};
