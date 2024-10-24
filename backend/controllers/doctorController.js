import doctorModal from "../models/doctorModal.js";


const checkAvailablity = async (req, res) => {
    try {
        const { docId } = req.body;
        const docData = await doctorModal.findById(docId)

        await doctorModal.findByIdAndUpdate(docId, { available: !docData.available })
        res.json({ message: "Doctor's Availability Change. 😊", success: true })

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })

    }

}

const doctorList = async (req,res) => {
    try {
        const doctors = await doctorModal.find({}).select(["-password", "-email"])
        res.json({ succes: true, doctors })
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })


    }
}
export { checkAvailablity, doctorList }