import { useEffect, useState } from "react";

export default function TimeBox() {
    const [data, setTime] = useState([])
    const getTime = async () => {
        setTime([])
        let today = new Date()
        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today)
            currentDate.setDate(currentDate.getDate() + i)
            
            let endTime = new Date(today)
            endTime.setDate(endTime.getDate() + i)
            endTime.setHours(21, 0, 0, 0)
            if (today.getDate() === currentDate.getDate()) {
                if (currentDate.getHours() >= 10) {
                    currentDate.setHours(currentDate.getHours() + 1)
                }
                else {
                    currentDate.setHours(10)
                }
                currentDate.setMinutes(currentDate.getMinutes() >= 30 ? 30 : 0)
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
                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }

            setTime(prev => ([...prev , timeSlots]))
        }

    }
    useEffect(() => {
        getTime()
    }, [])
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div>

        </div>
    )
}