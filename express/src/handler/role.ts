import db from "../lib/db";

export const createRole = async (req, res) => {
  const { name } = req.body;
  const role = await db.role.create({
    data: { name: name },
  });
  res.status(200).json(role);
};

export const getAllRole = async (req, res) => {
  const roles = await db.role.findMany();
  res.status(200).json(roles);
};

export const deleteRole = async (req, res) => {
  const { id } = req.body;
  const roleToDelete = findOneById(id);
  if (!roleToDelete) res.status(404).json("Not Found");
  const result = await db.role.delete({ where: { id } });
  res.status(200).json(result);
};

const findOneById = async (id) => {
  return await db.role.findFirst({ where: id });
};
