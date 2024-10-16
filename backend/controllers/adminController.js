
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, address, fees } = req.body
        const imageFile = req.file
        console.log({ name, email, password, speciality, degree, experience, about, address, fees }, imageFile)

    } catch (error) {

    }
}
export default addDoctor