import { comparePasswords, createJWT } from "../utils/auth";
import prisma from "../lib/db";
import { hashPassword } from "../utils/auth";

export const createUser = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
    },
  });
  const token = createJWT(user);
  res.json({ token });
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  const isValid = await comparePasswords(password, user.password);
  if (!isValid) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
  const token = createJWT(user);
  res.status(200).json({ token });
};
