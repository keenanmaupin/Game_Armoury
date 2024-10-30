import { Router } from 'express';
import { Users } from '../models/users.js'; // Import the User model
import jwt from 'jsonwebtoken'; // Import the JSON Web Token library
import bcrypt from 'bcrypt'; // Import the bcrypt library for password hashing
// Login function to authenticate a user
const login = async (req, res) => {
    const { username, password } = req.body; // Extract username and password from request body
    // Find the user in the database by username
    const user = await Users.findOne({
        where: { username: username },
    });
    // If user is not found, send an authentication failed response
    if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
    // Compare the provided password with the stored hashed password
    const passwordIsValid = await bcrypt.compare(password, user.password);
    // If password is invalid, send an authentication failed response
    if (!passwordIsValid) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
    // Get the secret key from environment variables
    const secretKey = process.env.JWT_SECRET_KEY || '';
    // Generate a JWT token for the authenticated user
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    return res.json({ token }); // Send the token as a JSON response
};
const register = async (req, res) => {
    const { username, password, email, gamingEra } = req.body; // Extract username, password, and email from request body
    console.log(req.body);
    // Check if the user already exists
    // const existingUser = await Users.findOne({
    //     where: { username: username },
    // });
    // if (existingUser) {
    //     return res.status(409).json({ message: 'Username already exists' });
    // }
    // Create a new user record
    const newUser = await Users.create({
        username,
        password,
        email,
        gamingEra,
    });
    // Get the secret key from environment variables
    const secretKey = process.env.JWT_SECRET_KEY || '';
    // Generate a JWT token for the new user
    const token = jwt.sign({ username: newUser.username }, secretKey, { expiresIn: '1h' });
    return res.json({ token }); // Send the token as a JSON response
};
// Create a new router instance
const router = Router();
// POST auth/login - Login a user
router.post('/login', login);
router.post('/register', register);
export default router; // Export the router instance
