import bcrypt from  "bcryptjs";

const comparePassword = async (plain, hashed) => {
  return await bcrypt.compare(plain, hashed); // true or false
};

export default comparePassword;
