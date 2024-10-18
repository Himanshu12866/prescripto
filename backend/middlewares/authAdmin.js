import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
    try {
        // Log headers for debugging
        console.log("Request Headers:", req.headers);

        // Extract token from Authorization header (Bearer token) or custom header
        let token = req.headers.authorization && req.headers.authorization.split(" ")[1]; // Bearer token
        if (!token) {
            token = req.headers.admintoken; // If you're passing the token in a custom header field
        }

        // Log the extracted token for debugging
        console.log("Extracted Token:", token);

        // If no token is provided, return an error
        if (!token) {
            return res.status(401).json({ msg: "No token, authorization denied", success: false });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Log the decoded token for debugging
        console.log("Decoded Token:", decoded);

        // Check if the decoded token contains valid admin credentials
        if (decoded.email !== process.env.ADMIN_EMAIL) {
            return res.status(401).json({ msg: "Authorization denied", success: false });
        }

        // Proceed to the next middleware
        next();
    } catch (error) {
        console.error("Error:", error.message); // Log error for debugging
        return res.status(500).json({ msg: "Server error", success: false });
    }
};

export default authAdmin;
