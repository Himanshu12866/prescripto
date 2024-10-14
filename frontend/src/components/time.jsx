import { useEffect, useState } from "react"

export default function TimeJsx() {

    const [docSlot, setDocSlot] = useState([])

    const getDocSlots = async () => {
        setDocSlot([])
        let today = new Date()

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            let endTime = new Date(today)
            endTime.setDate(today.getDate() + i) // Adjusted to make endTime correct for each date
            endTime.setHours(21, 0, 0, 0) // End at 9 PM

            if (today.getDate() === currentDate.getDate()) {
                // If it's today, set the starting time based on the current time
                if (currentDate.getHours() >= 10) {
                    currentDate.setHours(currentDate.getHours() + 1)
                } else {
                    currentDate.setHours(10)
                }
                currentDate.setMinutes(currentDate.getMinutes() >= 30 ? 30 : 0)
            } else {
                // For future dates, start at 10:00 AM
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }

            let timeSlots = []

            // Create time slots in 30-minute intervals
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                timeSlots.push({
                    time: formattedTime,
                    dateTime: new Date(currentDate)
                })
                currentDate.setMinutes(currentDate.getMinutes() + 30) // Increment by 30 minutes
            }

            setDocSlot(prev => [...prev, timeSlots])
        }
    }

    useEffect(() => {
        getDocSlots()
    }, [])

    useEffect(() => {
        console.log(docSlot)
    }, [docSlot])

    return (
        <div>
            <h1>Time Jsx</h1>
        </div>
    )
}
