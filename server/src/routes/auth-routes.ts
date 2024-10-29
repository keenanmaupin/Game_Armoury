import { Router, type Request, type Response } from "express";
import { Users } from "../models/users.js"; // Import the User model
import jwt from "jsonwebtoken"; // Import the JSON Web Token library
import bcrypt from "bcrypt"; // Import the bcrypt library for password hashing
// Login function to authenticate a user
const login = async (req: Request, res: Response): Promise<any> => {
  console.log("I'm logging in")
  const { username, password } = req.body; // Extract username and password from request body
  // Find the user in the database by username
  const user = await Users.findOne({
    where: { username: username },
  });
  // If user is not found, send an authentication failed response
  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }
  // Compare the provided password with the stored hashed password
  const passwordIsValid = await bcrypt.compare(password, user.password);
  // If password is invalid, send an authentication failed response
  if (!passwordIsValid) {
    return res.status(401).json({ message: "Authentication failed" });
  }
  // Get the secret key from environment variables
  const secretKey = process.env.JWT_SECRET_KEY || "";
  // Generate a JWT token for the authenticated user
  const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
  return res.json({ token }); // Send the token as a JSON response
};
// Create a new router instance
const router = Router();
// POST /login - Login a user
router.post("/login", login);
export default router; // Export the router instance
