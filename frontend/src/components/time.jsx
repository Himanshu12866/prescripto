import { useEffect, useState } from "react"

export default function TimeJsx() {

    const [docSlot, setDocSlot] = useState([])
    // const [slotIndex, setSlotIndex] = useState(0)
    // const [slotTime, setSlotTime] = useState("")
    const getDocSlots = async () => {
        setDocSlot([])
        let today = new Date()
        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)
            let endTime = new Date(today)
            endTime.setDate(today.getDate() + 1)
            endTime.setHours(21, 0, 0, 0)
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.setHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            }
            else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }
            let timeSlots = []
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                timeSlots.push({
                    time: formattedTime,
                    dateTime: new Date(currentDate)
                })
                currentDate.setMinutes(currentDate.getMinutes())
            }
            setDocSlot(prev => ([...prev, timeSlots]))
        }
    }
    useEffect(() => {
        getDocSlots()
    })
    useEffect(() => {
        console.log(docSlot)
    })

    return (
        <div>
            <h1>Time Jsx</h1>
        </div>
    )
}