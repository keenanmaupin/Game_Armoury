import jwt from "jsonwebtoken";
// Middleware function to authenticate JWT token
export const authenticateToken = (req, res, next) => {
    // Get the authorization header from the request
    const authHeader = req.headers.authorization;
    // Check if the authorization header is present
    if (authHeader) {
        // Extract the token from the authorization header
        const token = authHeader.split(" ")[1];
        // Get the secret key from the environment variables
        const secretKey = process.env.JWT_SECRET_KEY || "";
        // Verify the JWT token
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Send forbidden status if the token is invalid
            }
            // Attach the user information to the request object
            req.user = user;
            return next(); // Call the next middleware function
        });
    }
    else {
        res.sendStatus(401); // Send unauthorized status if no authorization header is present
    }
};
