import db from "../lib/db";

export const createPropertyType = async (req, res) => {
  const { name } = req.body;
  const property_type = await db.property_Type.create({
    data: { name: name },
  });
  res.status(200).json(property_type);
};

export const getAllPropertyType = async (req, res) => {
  const property_type = await db.property_Type.findMany();
  res.status(200).json(property_type);
};

export const deletePropertyType = async (req, res) => {
  const { id } = req.body;
  const property_type = findOneById(id);
  if (!property_type) res.status(404).json("Not Found");
  const result = await db.property_Type.delete({ where: { id: +id } });
  res.status(200).json(result);
};

export const findOneById = async (id) => {
  return await db.property_Type.findUniqueOrThrow({ where: { id: +id } });
};
