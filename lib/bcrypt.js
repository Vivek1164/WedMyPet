export const runtime = "nodejs";
import bcrypt from "bcrypt";

export const hashPassword = async (password) => await bcrypt.hash(password, 10);
export const comparePassword = async (password, hashed) =>
  await bcrypt.compare(password, hashed);
