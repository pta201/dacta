import db from "../lib/db";

export const createAttribute = async (req, res) => {
  const { name } = req.body;
  const attribute = await db.attribute.create({
    data: { name: name },
  });
  res.status(200).json(attribute);
};

export const getAllAttribute = async (req, res) => {
  const Attributes = await db.attribute.findMany();
  res.status(200).json(Attributes);
};

export const deleteAttribute = async (req, res) => {
  const { id } = req.body;
  const attributeToDelete = findOneById(id);
  if (!attributeToDelete) res.status(404).json("Not Found");
  const result = await db.attribute.delete({ where: { id } });
  res.status(200).json(result);
};

const findOneById = async (id) => {
  return await db.attribute.findUnique({ where: id });
};
