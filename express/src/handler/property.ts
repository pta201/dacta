import db from "../lib/db";
export const createProperty = async (req, res) => {
  const { property: propertyReceived, attributes } = req.body;
  const user = req.user;
  const property = await db.property.create({
    data: {
      property_type: {
        connect: { id: +propertyReceived.property_type_id },
      },
      User: {
        connect: { id: user.id },
      },
      Property_Attributes: {
        createMany: {
          data: attributes.map((attribute) => {
            return {
              ...attribute,
              attributeId: +attribute.attributeId,
            };
          }),
        },
      },
    },
  });
  res.status(200).json(property);
};

export const getAllProperty = async (req, res) => {
  const propertys = await db.property.findMany();
  res.status(200).json(propertys);
};

export const deleteProperty = async (req, res) => {
  const { id } = req.body;
  const propertyToDelete = findOneById(id);
  if (!propertyToDelete) res.status(404).json("Not Found");
  const result = await db.property.delete({ where: { id } });
  res.status(200).json(result);
};

const findOneById = async (id) => {
  return await db.property.findUniqueOrThrow({ where: id });
};
