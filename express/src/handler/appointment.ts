import db from "../lib/db";

export const createAppointment = async (req, res) => {
  const { propertyId, sellerId, buyerId, date } = req.body;
  const appointment = await db.appointment.create({
    data: {
      seller: {
        connect: {
          id: +sellerId,
        },
      },
      buyer: {
        connect: {
          id: +buyerId,
        },
      },
      property: {
        connect: {
          id: +propertyId,
        },
      },
      date: new Date(date),
    },
  });
  res.status(200).json(appointment);
};
export const getAllAppointment = async (req, res) => {
  const appointments = await db.appointment.findMany();
  res.status(200).json(appointments);
};
