import { hashPassword } from "./../src/utils/auth";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const role = await prisma.role.createMany({
    data: [
      { name: "Admin" },
      { name: "SuperAdmin" },
      { name: "Buyer" },
      { name: "Seller" },
      { name: "Guest" },
    ],
  });
  await prisma.user.createMany({
    data: [
      {
        email: "seller1@gmail.com",
        password: await hashPassword("123456"),
        address: "Ha Noi",
        phone: "0123456789",
        roleId: 4,
      },
      {
        email: "seller2@gmail.com",
        password: await hashPassword("123456"),
        address: "Ha Noi",
        phone: "0123456789",
        roleId: 4,
      },
      {
        email: "buyer1@gmail.com",
        password: await hashPassword("123456"),
        address: "Ha Noi",
        phone: "0912345678",
        roleId: 3,
      },
      {
        email: "buyer2@gmail.com",
        password: await hashPassword("123456"),
        address: "Ha Noi",
        phone: "0912345678",
        roleId: 3,
      },
    ],
  });

  const property_type = await prisma.property_Type.createMany({
    data: [
      { name: "Family Home" },
      { name: "Land" },
      { name: "Condo" },
      { name: "Farm" },
      { name: "Townhome" },
    ],
  });
  const attribute = await prisma.attribute.createMany({
    data: [
      { name: "Bedroom" },
      { name: "Bathroom" },
      { name: "Area" },
      { name: "Garage" },
      { name: "Pool" },
      { name: "Appliances" },
    ],
  });
  const property = await prisma.property.createMany({
    data: [
      { address: "Ha Noi", name: "Property 1", property_TypeId: 1, userId: 1 },
      { address: "Ha Noi", name: "Property 2", property_TypeId: 2, userId: 1 },
      { address: "Ha Noi", name: "Property 3", property_TypeId: 1, userId: 2 },
      { address: "Ha Noi", name: "Property 4", property_TypeId: 2, userId: 2 },
    ],
  });
  const property_attribute = await prisma.property_Attribute.createMany({
    data: [
      {
        attributeId: 1,
        propertyId: 1,
        value: "1",
      },
      {
        attributeId: 2,
        propertyId: 1,
        value: "1",
      },
      {
        attributeId: 2,
        propertyId: 2,
        value: "2",
      },
      {
        attributeId: 2,
        propertyId: 2,
        value: "1",
      },
      {
        attributeId: 1,
        propertyId: 3,
        value: "1",
      },
      {
        attributeId: 2,
        propertyId: 3,
        value: "1",
      },
      {
        attributeId: 1,
        propertyId: 4,
        value: "1",
      },
      {
        attributeId: 2,
        propertyId: 4,
        value: "1",
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
