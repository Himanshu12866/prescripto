import jwt from "jsonwebtoken"
const authAdmin = async (req, res, next) => {
    try {

        const  {adminToken}  = req.headers

        if (!adminToken) {

            return res.status(401).json({ msg: "No token, authorization denied", success: false })
        }

        const decoded = jwt.verify(adminToken, process.env.JWT_SECRET)
       
        if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
        
            return res.status(401).json({ msg: "No token, authorization denied", success: false })

        }
        next();
    } catch (error) {

    }
}
export default authAdmin