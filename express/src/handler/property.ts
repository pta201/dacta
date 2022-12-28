import db from "../lib/db";
export const createProperty = async (req, res) => {
  const { property: propertyReceived, attributes } = req.body;
  const user = req.user;
  const property = await db.property.create({
    data: {
      name: propertyReceived.name,
      address: propertyReceived.address,
      property_type: {
        connect: { id: +propertyReceived.property_type_id },
      },
      User: {
        connect: { id: +user.id },
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
  const user = req.user;
  const properties = await db.property.findMany({
    where: {
      userId: +user.id,
    },
  });
  res.status(200).json(properties);
};
export const getPropertyById = async (req, res) => {
  const { id } = req.params;
  const user = req.user;

  try {
    const property = await findOneById(id, user.id);
    res.status(200).json(property);
  } catch (error) {
    res.status(404);
  }
};

export const deleteProperty = async (req, res) => {
  const { id } = req.body;
  const user = req.user;
  const propertyToDelete = findOneById(id, user.id);
  if (!propertyToDelete) res.status(404).json("Not Found");
  const result = await db.property.delete({ where: { id } });
  res.status(200).json(result);
};

const findOneById = async (id, userId) => {
  return await db.property.findFirst({
    where: { id: +id, userId: +userId },
    include: {
      Property_Attributes: {
        include: { attribute: { select: { name: true } } },
      },
      property_type: { select: { name: true } },
      Image: true,
      Appointment: true,
    },
  });
};
