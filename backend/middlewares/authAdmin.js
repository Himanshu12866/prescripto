import jwt from "jsonwebtoken";


const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers



        if (!atoken) {
            return res.status(401).json({ msg: "No token, authorization denied 🙄", success: false });
        }
        const token_decoded = jwt.verify(atoken, process.env.JWT_SECRET)

        if (token_decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ msg: "Authorization denied 🙄", success: false });
        }

        // Proceed to the next middleware
        next();
    } catch (error) {
        console.error("Error:", error.message); // Log error for debugging
        return res.status(500).json({ msg: "Server error 🥴", success: false });
    }
};
export default authAdmin;
