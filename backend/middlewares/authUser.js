import jwt from "jsonwebtoken";


const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.status(401).json({ msg: "No token, authorization denied 😵‍💫", success: false });
        }
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decoded.id
        // Proceed to the next middleware
        next();
    } catch (error) {
        console.error("Error:", error.message); // Log error for debugging
        return res.status(400).json({ msg: "Invalid User 🙄", success: false });
    }
};
export default authUser;
